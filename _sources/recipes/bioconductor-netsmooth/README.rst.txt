:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netsmooth'
.. highlight: bash

bioconductor-netsmooth
======================

.. conda:recipe:: bioconductor-netsmooth
   :replaces_section_title:
   :noindex:

   Network smoothing for scRNAseq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/netSmooth.html
   :license: GPL-3
   :recipe: /`bioconductor-netsmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsmooth/meta.yaml>`_

   netSmooth is an R package for network smoothing of single cell RNA sequencing data. Using bio networks such as protein\-protein interactions as priors for gene co\-expression\, netsmooth improves cell type identification from noisy\, sparse scRNAseq data.


.. conda:package:: bioconductor-netsmooth

   |downloads_bioconductor-netsmooth| |docker_bioconductor-netsmooth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterexperiment: ``>=2.26.0,<2.27.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-data.table: 
   :depends r-entropy: 
   :depends r-matrix: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-netsmooth

   and update with::

      mamba update bioconductor-netsmooth

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netsmooth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netsmooth:<tag>

   (see `bioconductor-netsmooth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netsmooth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netsmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netsmooth
   :alt:   (downloads)
.. |docker_bioconductor-netsmooth| image:: https://quay.io/repository/biocontainers/bioconductor-netsmooth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netsmooth
.. _`bioconductor-netsmooth/tags`: https://quay.io/repository/biocontainers/bioconductor-netsmooth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netsmooth";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netsmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netsmooth/README.html
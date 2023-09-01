:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scone'
.. highlight: bash

bioconductor-scone
==================

.. conda:recipe:: bioconductor-scone
   :replaces_section_title:
   :noindex:

   Single Cell Overview of Normalized Expression data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scone.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scone/meta.yaml>`_

   SCONE is an R package for comparing and ranking the performance of different normalization schemes for single\-cell RNA\-seq and other high\-throughput analyses.


.. conda:package:: bioconductor-scone

   |downloads_bioconductor-scone| |docker_bioconductor-scone|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-aroma.light: ``>=3.30.0,<3.31.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-ruvseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-class: 
   :depends r-cluster: 
   :depends r-compositions: 
   :depends r-diptest: 
   :depends r-fpc: 
   :depends r-gplots: 
   :depends r-hexbin: 
   :depends r-matrixstats: 
   :depends r-mixtools: 
   :depends r-rarpack: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scone

   and update with::

      mamba update bioconductor-scone

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scone:<tag>

   (see `bioconductor-scone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scone
   :alt:   (downloads)
.. |docker_bioconductor-scone| image:: https://quay.io/repository/biocontainers/bioconductor-scone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scone
.. _`bioconductor-scone/tags`: https://quay.io/repository/biocontainers/bioconductor-scone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scone";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scone/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coseq'
.. highlight: bash

bioconductor-coseq
==================

.. conda:recipe:: bioconductor-coseq
   :replaces_section_title:
   :noindex:

   Co\-Expression Analysis of Sequencing Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/coseq.html
   :license: GPL-3
   :recipe: /`bioconductor-coseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq/meta.yaml>`_

   Co\-expression analysis for expression profiles arising from high\-throughput sequencing data. Feature \(e.g.\, gene\) profiles are clustered using adapted transformations and mixture models or a K\-means algorithm\, and model selection criteria \(to choose an appropriate number of clusters\) are provided.


.. conda:package:: bioconductor-coseq

   |downloads_bioconductor-coseq| |docker_bioconductor-coseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-htsfilter: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-capushe: 
   :depends r-compositions: 
   :depends r-corrplot: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-htscluster: 
   :depends r-mvtnorm: 
   :depends r-rmixmod: 
   :depends r-scales: 
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

      mamba install bioconductor-coseq

   and update with::

      mamba update bioconductor-coseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-coseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coseq:<tag>

   (see `bioconductor-coseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coseq
   :alt:   (downloads)
.. |docker_bioconductor-coseq| image:: https://quay.io/repository/biocontainers/bioconductor-coseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coseq
.. _`bioconductor-coseq/tags`: https://quay.io/repository/biocontainers/bioconductor-coseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-coseq";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coseq/README.html
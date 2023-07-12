:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qmtools'
.. highlight: bash

bioconductor-qmtools
====================

.. conda:recipe:: bioconductor-qmtools
   :replaces_section_title:
   :noindex:

   Quantitative Metabolomics Data Processing Tools

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/qmtools.html
   :license: GPL-3
   :recipe: /`bioconductor-qmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qmtools/meta.yaml>`_

   The qmtools \(quantitative metabolomics tools\) package provides basic tools for processing quantitative metabolomics data with the standard SummarizedExperiment class. This includes functions for imputation\, normalization\, feature filtering\, feature clustering\, dimension\-reduction\, and visualization to help users prepare data for statistical analysis. Several functions in this package could also be used in other types of omics data.


.. conda:package:: bioconductor-qmtools

   |downloads_bioconductor-qmtools| |docker_bioconductor-qmtools|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-igraph: 
   :depends r-patchwork: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-vim: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qmtools

   and update with::

      conda update bioconductor-qmtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qmtools:<tag>

   (see `bioconductor-qmtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qmtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qmtools
   :alt:   (downloads)
.. |docker_bioconductor-qmtools| image:: https://quay.io/repository/biocontainers/bioconductor-qmtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qmtools
.. _`bioconductor-qmtools/tags`: https://quay.io/repository/biocontainers/bioconductor-qmtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qmtools";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qmtools/README.html
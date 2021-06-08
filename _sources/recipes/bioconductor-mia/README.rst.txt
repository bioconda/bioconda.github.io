:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mia'
.. highlight: bash

bioconductor-mia
================

.. conda:recipe:: bioconductor-mia
   :replaces_section_title:
   :noindex:

   Microbiome analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/mia.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-mia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mia/meta.yaml>`_

   mia implements tools for microbiome analysis based on the SummarizedExperiment\, SingleCellExperiment and TreeSummarizedExperiment infrastructure. Data wrangling and analysis in the context of taxonomic data is the main scope. Additional functions for common task are implemented such as community indices calculation and summarization.


.. conda:package:: bioconductor-mia

   |downloads_bioconductor-mia| |docker_bioconductor-mia|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mia

   and update with::

      conda update bioconductor-mia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mia:<tag>

   (see `bioconductor-mia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mia
   :alt:   (downloads)
.. |docker_bioconductor-mia| image:: https://quay.io/repository/biocontainers/bioconductor-mia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mia
.. _`bioconductor-mia/tags`: https://quay.io/repository/biocontainers/bioconductor-mia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mia/README.html
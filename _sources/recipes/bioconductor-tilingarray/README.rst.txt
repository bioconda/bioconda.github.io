:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tilingarray'
.. highlight: bash

bioconductor-tilingarray
========================

.. conda:recipe:: bioconductor-tilingarray
   :replaces_section_title:
   :noindex:

   Transcript mapping with high\-density oligonucleotide tiling arrays

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/tilingArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tilingarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tilingarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tilingarray/meta.yaml>`_

   The package provides functionality that can be useful for the analysis of high\-density tiling microarray data \(such as from Affymetrix genechips\) for measuring transcript abundance and architecture. The main functionalities of the package are\: 1. the class \'segmentation\' for representing partitionings of a linear series of data\; 2. the function \'segment\' for fitting piecewise constant models using a dynamic programming algorithm that is both fast and exact\; 3. the function \'confint\' for calculating confidence intervals using the strucchange package\; 4. the function \'plotAlongChrom\' for generating pretty plots\; 5. the function \'normalizeByReference\' for probe\-sequence dependent response adjustment from a \(set of\) reference hybridizations.


.. conda:package:: bioconductor-tilingarray

   |downloads_bioconductor-tilingarray| |docker_bioconductor-tilingarray|

   :versions:
      
      

      ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``

      

   
   :depends bioconductor-affy: ``>=1.66.0,<1.67.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genefilter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-vsn: ``>=3.56.0,<3.57.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-pixmap: 
   :depends r-rcolorbrewer: 
   :depends r-strucchange: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tilingarray

   and update with::

      conda update bioconductor-tilingarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tilingarray:<tag>

   (see `bioconductor-tilingarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tilingarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tilingarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tilingarray
   :alt:   (downloads)
.. |docker_bioconductor-tilingarray| image:: https://quay.io/repository/biocontainers/bioconductor-tilingarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tilingarray
.. _`bioconductor-tilingarray/tags`: https://quay.io/repository/biocontainers/bioconductor-tilingarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tilingarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tilingarray/README.html
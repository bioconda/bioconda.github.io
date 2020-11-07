:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgawgbsdata.hg19'
.. highlight: bash

bioconductor-tcgawgbsdata.hg19
==============================

.. conda:recipe:: bioconductor-tcgawgbsdata.hg19
   :replaces_section_title:
   :noindex:

   Data

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/tcgaWGBSData.hg19.html
   :license: GPL-2
   :recipe: /`bioconductor-tcgawgbsdata.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgawgbsdata.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgawgbsdata.hg19/meta.yaml>`_

   Data package for WGBS Data in TCGA. Data is stored as SummarizedExperiment Format. See vignette on how to extract the data and perform differential methylation analysis.


.. conda:package:: bioconductor-tcgawgbsdata.hg19

   |downloads_bioconductor-tcgawgbsdata.hg19| |docker_bioconductor-tcgawgbsdata.hg19|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-bsseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgawgbsdata.hg19

   and update with::

      conda update bioconductor-tcgawgbsdata.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgawgbsdata.hg19:<tag>

   (see `bioconductor-tcgawgbsdata.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgawgbsdata.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgawgbsdata.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgawgbsdata.hg19
   :alt:   (downloads)
.. |docker_bioconductor-tcgawgbsdata.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-tcgawgbsdata.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgawgbsdata.hg19
.. _`bioconductor-tcgawgbsdata.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgawgbsdata.hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgawgbsdata.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgawgbsdata.hg19/README.html
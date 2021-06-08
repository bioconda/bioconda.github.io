:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgabiolinks'
.. highlight: bash

bioconductor-tcgabiolinks
=========================

.. conda:recipe:: bioconductor-tcgabiolinks
   :replaces_section_title:
   :noindex:

   TCGAbiolinks\: An R\/Bioconductor package for integrative analysis with GDC data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/TCGAbiolinks.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tcgabiolinks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinks/meta.yaml>`_
   :links: biotools: :biotools:`tcgabiolinks`, doi: :doi:`10.1093/nar/gkv1507`

   The aim of TCGAbiolinks is \: i\) facilitate the GDC open\-access data retrieval\, ii\) prepare the data using the appropriate pre\-processing strategies\, iii\) provide the means to carry out different standard analyses and iv\) to easily reproduce earlier research results. In more detail\, the package provides multiple methods for analysis \(e.g.\, differential expression analysis\, identifying differentially methylated regions\) and methods for visualization \(e.g.\, survival plots\, volcano plots\, starburst plots\) in order to easily develop complete analysis pipelines.


.. conda:package:: bioconductor-tcgabiolinks

   |downloads_bioconductor-tcgabiolinks| |docker_bioconductor-tcgabiolinks|

   :versions:
      
      

      ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.3-0``,  ``2.10.0-0``,  ``2.8.4-0``,  ``2.6.11-0``

      

   
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-tcgabiolinksgui.data: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-downloader: ``>=0.4``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-httr: ``>=1.2.1``
   :depends r-jsonlite: ``>=1.0.0``
   :depends r-knitr: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-readr: 
   :depends r-rvest: ``>=0.3.0``
   :depends r-stringr: ``>=1.0.0``
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml: ``>=3.98.0``
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgabiolinks

   and update with::

      conda update bioconductor-tcgabiolinks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgabiolinks:<tag>

   (see `bioconductor-tcgabiolinks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgabiolinks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgabiolinks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgabiolinks
   :alt:   (downloads)
.. |docker_bioconductor-tcgabiolinks| image:: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks
.. _`bioconductor-tcgabiolinks/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgabiolinks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgabiolinks/README.html
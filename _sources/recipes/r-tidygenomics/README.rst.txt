:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tidygenomics'
.. highlight: bash

r-tidygenomics
==============

.. conda:recipe:: r-tidygenomics
   :replaces_section_title:
   :noindex:

   Handle genomic data within data frames just as you would with \'GRanges\'. This packages provides method to deal with genomic intervals the \"tidy\-way\" which makes it simpler to integrate in the the general data munging process. The API is inspired by the popular \'bedtools\' and the genome\_join\(\) method from the \'fuzzyjoin\' package.

   :homepage: https://github.com/const-ae/tidygenomics
   :license: GPL3 / GPL-3
   :recipe: /`r-tidygenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics/meta.yaml>`_

   


.. conda:package:: r-tidygenomics

   |downloads_r-tidygenomics| |docker_r-tidygenomics|

   :versions:
      
      

      ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-0``

      

   
   :depends bioconductor-iranges: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-fuzzyjoin: ``>=0.1.3``
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tidygenomics

   and update with::

      conda update r-tidygenomics

   or use the docker container::

      docker pull quay.io/biocontainers/r-tidygenomics:<tag>

   (see `r-tidygenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tidygenomics| image:: https://img.shields.io/conda/dn/bioconda/r-tidygenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tidygenomics
   :alt:   (downloads)
.. |docker_r-tidygenomics| image:: https://quay.io/repository/biocontainers/r-tidygenomics/status
   :target: https://quay.io/repository/biocontainers/r-tidygenomics
.. _`r-tidygenomics/tags`: https://quay.io/repository/biocontainers/r-tidygenomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tidygenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tidygenomics/README.html
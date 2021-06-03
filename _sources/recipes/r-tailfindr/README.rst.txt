:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tailfindr'
.. highlight: bash

r-tailfindr
===========

.. conda:recipe:: r-tailfindr
   :replaces_section_title:
   :noindex:

   An R package for estimating poly\(A\)\-tail lengths in Oxford Nanopore RNA and DNA reads.

   :homepage: https://github.com/adnaniazi/tailfindr
   :license: AGPL-3.0
   :recipe: /`r-tailfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tailfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tailfindr/meta.yaml>`_

   


.. conda:package:: r-tailfindr

   |downloads_r-tailfindr| |docker_r-tailfindr|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-rsamtools: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hdf5r: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-psych: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rbokeh: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tailfindr

   and update with::

      conda update r-tailfindr

   or use the docker container::

      docker pull quay.io/biocontainers/r-tailfindr:<tag>

   (see `r-tailfindr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tailfindr| image:: https://img.shields.io/conda/dn/bioconda/r-tailfindr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tailfindr
   :alt:   (downloads)
.. |docker_r-tailfindr| image:: https://quay.io/repository/biocontainers/r-tailfindr/status
   :target: https://quay.io/repository/biocontainers/r-tailfindr
.. _`r-tailfindr/tags`: https://quay.io/repository/biocontainers/r-tailfindr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tailfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tailfindr/README.html
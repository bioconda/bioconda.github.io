:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rapidr'
.. highlight: bash

r-rapidr
========

.. conda:recipe:: r-rapidr
   :replaces_section_title:
   :noindex:

   Package to perform non\-invasive fetal testing for aneuploidies using sequencing count data from cell\-free DNA

   :homepage: https://CRAN.R-project.org/package=RAPIDR
   :license: GPL3 / GPL-3
   :recipe: /`r-rapidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr/meta.yaml>`_

   


.. conda:package:: r-rapidr

   |downloads_r-rapidr| |docker_r-rapidr|

   :versions:
      
      

      ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-propcis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rapidr

   and update with::

      conda update r-rapidr

   or use the docker container::

      docker pull quay.io/biocontainers/r-rapidr:<tag>

   (see `r-rapidr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rapidr| image:: https://img.shields.io/conda/dn/bioconda/r-rapidr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rapidr
   :alt:   (downloads)
.. |docker_r-rapidr| image:: https://quay.io/repository/biocontainers/r-rapidr/status
   :target: https://quay.io/repository/biocontainers/r-rapidr
.. _`r-rapidr/tags`: https://quay.io/repository/biocontainers/r-rapidr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rapidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rapidr/README.html
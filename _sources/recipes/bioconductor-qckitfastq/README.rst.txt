:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qckitfastq'
.. highlight: bash

bioconductor-qckitfastq
=======================

.. conda:recipe:: bioconductor-qckitfastq
   :replaces_section_title:
   :noindex:

   FASTQ Quality Control

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/qckitfastq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-qckitfastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qckitfastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qckitfastq/meta.yaml>`_

   Assessment of FASTQ file format with multiple metrics including quality score\, sequence content\, overrepresented sequence and Kmers.


.. conda:package:: bioconductor-qckitfastq

   |downloads_bioconductor-qckitfastq| |docker_bioconductor-qckitfastq|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-rseqan: ``>=1.8.0,<1.9.0``
   :depends bioconductor-seqtools: ``>=1.22.0,<1.23.0``
   :depends bioconductor-zlibbioc: ``>=1.34.0,<1.35.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qckitfastq

   and update with::

      conda update bioconductor-qckitfastq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qckitfastq:<tag>

   (see `bioconductor-qckitfastq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qckitfastq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qckitfastq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qckitfastq
   :alt:   (downloads)
.. |docker_bioconductor-qckitfastq| image:: https://quay.io/repository/biocontainers/bioconductor-qckitfastq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qckitfastq
.. _`bioconductor-qckitfastq/tags`: https://quay.io/repository/biocontainers/bioconductor-qckitfastq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qckitfastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qckitfastq/README.html
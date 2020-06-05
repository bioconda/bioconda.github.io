:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plyranges'
.. highlight: bash

bioconductor-plyranges
======================

.. conda:recipe:: bioconductor-plyranges
   :replaces_section_title:
   :noindex:

   A fluent interface for manipulating GenomicRanges

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/plyranges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-plyranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyranges/meta.yaml>`_

   A dplyr\-like interface for interacting with the common Bioconductor classes Ranges and GenomicRanges. By providing a grammatical and consistent way of manipulating these classes their accessiblity for new Bioconductor users is hopefully increased.


.. conda:package:: bioconductor-plyranges

   |downloads_bioconductor-plyranges| |docker_bioconductor-plyranges|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicalignments: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rlang: ``>=0.2.0``
   :depends r-tidyselect: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plyranges

   and update with::

      conda update bioconductor-plyranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plyranges:<tag>

   (see `bioconductor-plyranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plyranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plyranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plyranges
   :alt:   (downloads)
.. |docker_bioconductor-plyranges| image:: https://quay.io/repository/biocontainers/bioconductor-plyranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plyranges
.. _`bioconductor-plyranges/tags`: https://quay.io/repository/biocontainers/bioconductor-plyranges?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plyranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plyranges/README.html
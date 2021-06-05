:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ldblock'
.. highlight: bash

bioconductor-ldblock
====================

.. conda:recipe:: bioconductor-ldblock
   :replaces_section_title:
   :noindex:

   data structures for linkage disequilibrium measures in populations

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ldblock.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ldblock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ldblock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ldblock/meta.yaml>`_

   Define data structures for linkage disequilibrium measures in populations.


.. conda:package:: bioconductor-ldblock

   |downloads_bioconductor-ldblock| |docker_bioconductor-ldblock|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-ensdb.hsapiens.v75: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensembldb: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfiles: ``>=1.28.0,<1.29.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-snpstats: ``>=1.42.0,<1.43.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-httr: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ldblock

   and update with::

      conda update bioconductor-ldblock

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ldblock:<tag>

   (see `bioconductor-ldblock/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ldblock| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ldblock.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ldblock
   :alt:   (downloads)
.. |docker_bioconductor-ldblock| image:: https://quay.io/repository/biocontainers/bioconductor-ldblock/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ldblock
.. _`bioconductor-ldblock/tags`: https://quay.io/repository/biocontainers/bioconductor-ldblock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ldblock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ldblock/README.html
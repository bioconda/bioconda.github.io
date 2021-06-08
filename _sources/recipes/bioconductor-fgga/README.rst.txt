:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgga'
.. highlight: bash

bioconductor-fgga
=================

.. conda:recipe:: bioconductor-fgga
   :replaces_section_title:
   :noindex:

   Hierarchical ensemble method based on factor graph

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/fgga.html
   :license: GPL-3
   :recipe: /`bioconductor-fgga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgga/meta.yaml>`_

   Package that implements the FGGA algorithm. This package provides a hierarchical ensemble method based ob factor graphs for the consistent GO annotation of protein coding genes. FGGA embodies elements of predicate logic\, communication theory\, supervised learning and inference in graphical models.


.. conda:package:: bioconductor-fgga

   |downloads_bioconductor-fgga| |docker_bioconductor-fgga|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.0.0,<2.1.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-rbgl: ``>=1.68.0,<1.69.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-curl: 
   :depends r-e1071: 
   :depends r-grbase: ``>=1.8_6.7``
   :depends r-jsonlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fgga

   and update with::

      conda update bioconductor-fgga

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fgga:<tag>

   (see `bioconductor-fgga/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fgga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgga
   :alt:   (downloads)
.. |docker_bioconductor-fgga| image:: https://quay.io/repository/biocontainers/bioconductor-fgga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgga
.. _`bioconductor-fgga/tags`: https://quay.io/repository/biocontainers/bioconductor-fgga?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgga/README.html
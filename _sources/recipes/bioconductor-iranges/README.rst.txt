:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iranges'
.. highlight: bash

bioconductor-iranges
====================

.. conda:recipe:: bioconductor-iranges
   :replaces_section_title:

   Foundation of integer range manipulation in Bioconductor

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/IRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iranges/meta.yaml>`_
   :links: biotools: :biotools:`iranges`

   Provides efficient low\-level and highly reusable S4 classes for storing\, manipulating and aggregating over annotated ranges of integers. Implements an algebra of range operations\, including efficient algorithms for finding overlaps and nearest neighbors. Defines efficient list\-like classes for storing\, transforming and aggregating large grouped data\, i.e.\, collections of atomic vectors and DataFrames.


.. conda:package:: bioconductor-iranges

   |downloads_bioconductor-iranges| |docker_bioconductor-iranges|

   :versions: 2.22.1-0, 2.20.0-0, 2.18.2-0, 2.18.1-0, 2.16.0-0, 2.14.12-0, 2.12.0-0, 2.10.5-0, 2.8.2-0, 2.8.0-0, 2.6.1-0, 2.6.0-0, 2.4.8-0, 2.4.7-0, 2.4.6-0, 2.4.1-0, 2.4.0-0, 2.2.9-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iranges

   and update with::

      conda update bioconductor-iranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iranges:<tag>

   (see `bioconductor-iranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iranges
   :alt:   (downloads)
.. |docker_bioconductor-iranges| image:: https://quay.io/repository/biocontainers/bioconductor-iranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iranges
.. _`bioconductor-iranges/tags`: https://quay.io/repository/biocontainers/bioconductor-iranges?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iranges/README.html
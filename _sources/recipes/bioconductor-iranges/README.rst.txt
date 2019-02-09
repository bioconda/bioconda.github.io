.. title:: Package Recipe 'bioconductor-iranges'
.. highlight: bash


bioconductor-iranges
====================

.. conda:recipe:: bioconductor-iranges
   :replaces_section_title:

   Provides efficient low\-level and highly reusable S4 classes for storing\, manipulating and aggregating over annotated ranges of integers. Implements an algebra of range operations\, including efficient algorithms for finding overlaps and nearest neighbors. Defines efficient list\-like classes for storing\, transforming and aggregating large grouped data\, i.e.\, collections of atomic vectors and DataFrames.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iranges/meta.yaml>`_
   :links: biotools: :biotools:`iranges`

   


.. conda:package:: bioconductor-iranges

   |downloads_bioconductor-iranges| |docker_bioconductor-iranges|

   :versions: 2.16.0, 2.14.12, 2.12.0, 2.10.5, 2.8.2, 2.8.0, 2.6.1, 2.6.0, 2.4.8, 2.4.7, 2.4.6, 2.4.1, 2.4.0, 2.2.9

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-iranges|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iranges

   and update with::

      conda update bioconductor-iranges

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iranges


.. |required_by_bioconductor-iranges| conda:required_by:: bioconductor-iranges
.. |downloads_bioconductor-iranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iranges.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iranges| image:: https://quay.io/repository/biocontainers/bioconductor-iranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iranges







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iranges/README.html


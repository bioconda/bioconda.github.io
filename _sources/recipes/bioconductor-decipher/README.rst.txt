:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decipher'
.. highlight: bash

bioconductor-decipher
=====================

.. conda:recipe:: bioconductor-decipher
   :replaces_section_title:

   Tools for curating\, analyzing\, and manipulating biological sequences

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/DECIPHER.html
   :license: GPL-3
   :recipe: /`bioconductor-decipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decipher/meta.yaml>`_
   :links: biotools: :biotools:`DECIPHER`

   A toolset for deciphering and managing biological sequences.


.. conda:package:: bioconductor-decipher

   |downloads_bioconductor-decipher| |docker_bioconductor-decipher|

   :versions: 2.16.0-0, 2.14.0-0, 2.12.0-1, 2.10.0-0, 2.8.1-0, 2.6.0-1, 2.6.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-xvector: >=0.28.0,<0.29.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dbi: 
   :depends r-rsqlite: >=1.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-decipher

   and update with::

      conda update bioconductor-decipher

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decipher:<tag>

   (see `bioconductor-decipher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decipher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decipher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decipher
   :alt:   (downloads)
.. |docker_bioconductor-decipher| image:: https://quay.io/repository/biocontainers/bioconductor-decipher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decipher
.. _`bioconductor-decipher/tags`: https://quay.io/repository/biocontainers/bioconductor-decipher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decipher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decipher/README.html
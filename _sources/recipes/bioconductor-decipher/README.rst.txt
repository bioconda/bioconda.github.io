:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decipher'
.. highlight: bash

bioconductor-decipher
=====================

.. conda:recipe:: bioconductor-decipher
   :replaces_section_title:

   A toolset for deciphering and managing biological sequences.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DECIPHER.html
   :license: GPL-3
   :recipe: /`bioconductor-decipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decipher/meta.yaml>`_
   :links: biotools: :biotools:`DECIPHER`

   


.. conda:package:: bioconductor-decipher

   |downloads_bioconductor-decipher| |docker_bioconductor-decipher|

   :versions: 2.10.0-0, 2.8.1-0, 2.6.0-1, 2.6.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-xvector: >=0.22.0,<0.23.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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
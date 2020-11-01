:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagenomefeatures'
.. highlight: bash

bioconductor-metagenomefeatures
===============================

.. conda:recipe:: bioconductor-metagenomefeatures
   :replaces_section_title:
   :noindex:

   Exploration of marker\-gene sequence taxonomic annotations

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/metagenomeFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagenomefeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagenomefeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagenomefeatures/meta.yaml>`_

   metagenomeFeatures was developed for use in exploring the taxonomic annotations for a marker\-gene metagenomic sequence dataset. The package can be used to explore the taxonomic composition of a marker\-gene database or annotated sequences from a marker\-gene metagenome experiment.


.. conda:package:: bioconductor-metagenomefeatures

   |downloads_bioconductor-metagenomefeatures| |docker_bioconductor-metagenomefeatures|

   :versions:
      
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-decipher: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-ape: ``>=3.5``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbplyr: ``>=1.0.0``
   :depends r-dplyr: ``>=0.7.0``
   :depends r-lattice: ``>=0.20.33``
   :depends r-lazyeval: ``>=0.1.10``
   :depends r-magrittr: ``>=1.5``
   :depends r-rsqlite: ``>=1.0.0``
   :depends r-stringr: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagenomefeatures

   and update with::

      conda update bioconductor-metagenomefeatures

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metagenomefeatures:<tag>

   (see `bioconductor-metagenomefeatures/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metagenomefeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagenomefeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagenomefeatures
   :alt:   (downloads)
.. |docker_bioconductor-metagenomefeatures| image:: https://quay.io/repository/biocontainers/bioconductor-metagenomefeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagenomefeatures
.. _`bioconductor-metagenomefeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-metagenomefeatures?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagenomefeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagenomefeatures/README.html
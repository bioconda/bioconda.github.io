:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flippyr'
.. highlight: bash

flippyr
=======

.. conda:recipe:: flippyr
   :replaces_section_title:
   :noindex:

   This package is designed to align a PLINK fileset with a FASTA reference genome.

   :homepage: https://github.com/BEFH/flippyr
   :license: MIT / MIT
   :recipe: /`flippyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flippyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flippyr/meta.yaml>`_

   Flippy is a simple\, fast script to ensure that PLINK filesets are aligned to
   a reference genome in FASTA format. It identifies and fixes strand flipping\,
   and reversed alleles. It removes ambiguous \(palindromic\) alleles and sites
   that do not match the reference genome. It also recognizes and removes multi\-
   allelic sites and indels by default. Instructions and more details can be
   found on GitHub.



.. conda:package:: flippyr

   |downloads_flippyr| |docker_flippyr|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends pandas: 
   :depends pyfaidx: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flippyr

   and update with::

      conda update flippyr

   or use the docker container::

      docker pull quay.io/biocontainers/flippyr:<tag>

   (see `flippyr/tags`_ for valid values for ``<tag>``)


.. |downloads_flippyr| image:: https://img.shields.io/conda/dn/bioconda/flippyr.svg?style=flat
   :target: https://anaconda.org/bioconda/flippyr
   :alt:   (downloads)
.. |docker_flippyr| image:: https://quay.io/repository/biocontainers/flippyr/status
   :target: https://quay.io/repository/biocontainers/flippyr
.. _`flippyr/tags`: https://quay.io/repository/biocontainers/flippyr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flippyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flippyr/README.html
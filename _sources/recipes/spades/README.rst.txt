:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spades'
.. highlight: bash

spades
======

.. conda:recipe:: spades
   :replaces_section_title:

   SPAdes \(St. Petersburg genome assembler\) is intended for both standard isolates and single\-cell MDA bacteria assemblies.

   :homepage: http://cab.spbu.ru/software/spades/
   :documentation: http://cab.spbu.ru/files/release3.13.1/manual.html
   
   :developer docs: https://github.com/ablab/spades
   :license: GPL / GPLv2
   :recipe: /`spades <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spades>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spades/meta.yaml>`_
   :links: biotools: :biotools:`spades`, doi: :doi:`10.1089/cmb.2012.0021`, doi: :doi:`10.1101/gr.213959.116`

   SPAdes \(St. Petersburg genome assembler\) is a genome assembly algorithm which was designed for
   single cell and multi\-cells bacterial data sets. However\, it might not be suitable for large
   genomes projects.

   SPAdes works with Ion Torrent\, PacBio\, Oxford Nanopore\, and Illumina paired\-end\, mate\-pairs and
   single reads



.. conda:package:: spades

   |downloads_spades| |docker_spades|

   :versions: 3.13.1-2, 3.13.1-1, 3.13.1-0, 3.13.0-0, 3.12.0-1, 3.12.0-0, 3.11.1-4, 3.11.1-3, 3.11.1-2, 3.11.1-1, 3.11.1-0, 3.11.0-1, 3.11.0-0, 3.10.1-1, 3.10.1-0, 3.10.0-0, 3.9.1-0, 3.9.0-4, 3.9.0-3, 3.9.0-2, 3.9.0-1, 3.9.0-0, 3.8.1-0, 3.8.0-0, 3.7.0-0, 3.6.2-0, 3.5.0-1, 3.5.0-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openmp: 
   :depends python: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spades

   and update with::

      conda update spades

   or use the docker container::

      docker pull quay.io/biocontainers/spades:<tag>

   (see `spades/tags`_ for valid values for ``<tag>``)


.. |downloads_spades| image:: https://img.shields.io/conda/dn/bioconda/spades.svg?style=flat
   :target: https://anaconda.org/bioconda/spades
   :alt:   (downloads)
.. |docker_spades| image:: https://quay.io/repository/biocontainers/spades/status
   :target: https://quay.io/repository/biocontainers/spades
.. _`spades/tags`: https://quay.io/repository/biocontainers/spades?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spades/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spades/README.html
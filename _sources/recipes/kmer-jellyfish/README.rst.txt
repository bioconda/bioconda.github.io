:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-jellyfish'
.. highlight: bash

kmer-jellyfish
==============

.. conda:recipe:: kmer-jellyfish
   :replaces_section_title:

   Jellyfish is a tool for fast\, memory\-efficient counting of k\-mers in DNA. A k\-mer is a substring of length k\, and counting the occurrences of all such substrings is a central step in many analyses of DNA sequence

   :homepage: http://www.genome.umd.edu/jellyfish.html
   :developer docs: https://github.com/gmarcais/Jellyfish
   :license: GPL / GPL-3.0
   :recipe: /`kmer-jellyfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-jellyfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-jellyfish/meta.yaml>`_
   :links: biotools: :biotools:`jellyfish`, doi: :doi:`10.1093/bioinformatics/btr011`

   


.. conda:package:: kmer-jellyfish

   |downloads_kmer-jellyfish| |docker_kmer-jellyfish|

   :versions: 2.3.0-0, 1.1.12-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmer-jellyfish

   and update with::

      conda update kmer-jellyfish

   or use the docker container::

      docker pull quay.io/biocontainers/kmer-jellyfish:<tag>

   (see `kmer-jellyfish/tags`_ for valid values for ``<tag>``)


.. |downloads_kmer-jellyfish| image:: https://img.shields.io/conda/dn/bioconda/kmer-jellyfish.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-jellyfish
   :alt:   (downloads)
.. |docker_kmer-jellyfish| image:: https://quay.io/repository/biocontainers/kmer-jellyfish/status
   :target: https://quay.io/repository/biocontainers/kmer-jellyfish
.. _`kmer-jellyfish/tags`: https://quay.io/repository/biocontainers/kmer-jellyfish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-jellyfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-jellyfish/README.html
.. title:: Package Recipe 'jellyfish'
.. highlight: bash


jellyfish
=========

.. conda:recipe:: jellyfish
   :replaces_section_title:

   Jellyfish is a tool for fast\, memory\-efficient counting of k\-mers in DNA. A k\-mer is a substring of length k\, and counting the occurrences of all such substrings is a central step in many analyses of DNA sequence

   :homepage: http://www.genome.umd.edu/jellyfish.html
   :developer docs: https://github.com/gmarcais/Jellyfish
   :license: GPL / GPL-3.0
   :recipe: /`jellyfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jellyfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jellyfish/meta.yaml>`_
   :links: biotools: :biotools:`jellyfish`

   


.. conda:package:: jellyfish

   |downloads_jellyfish| |docker_jellyfish|

   :versions: 2.2.10, 2.2.6, 2.2.3, 1.1.12, 1.1.11

   :depends: :conda:package:`jemalloc`  :conda:package:`libstdcxx-ng` >=4.9 

   :required~by: |required_by_jellyfish|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jellyfish

   and update with::

      conda update jellyfish

   or use the docker container::

      docker pull quay.io/repository/biocontainers/jellyfish


.. |required_by_jellyfish| conda:required_by:: jellyfish
.. |downloads_jellyfish| image:: https://img.shields.io/conda/dn/bioconda/jellyfish.svg?style=flat
   :alt:   (downloads)
.. |docker_jellyfish| image:: https://quay.io/repository/biocontainers/jellyfish/status
   :target: https://quay.io/repository/biocontainers/jellyfish







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jellyfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jellyfish/README.html


.. title:: Package Recipe 'bloomfiltertrie'
.. highlight: bash


bloomfiltertrie
===============

.. conda:recipe:: bloomfiltertrie
   :replaces_section_title:

   An alignment\-free\, reference\-free and incremental data structure for colored de Bruijn graph with application to pan\-genome indexing.

   :homepage: https://github.com/GuillaumeHolley/BloomFilterTrie
   :license: MIT / MIT
   :recipe: /`bloomfiltertrie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloomfiltertrie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloomfiltertrie/meta.yaml>`_

   


.. conda:package:: bloomfiltertrie

   |downloads_bloomfiltertrie| |docker_bloomfiltertrie|

   :versions: 0.8.7, 0.8.1

   :depends: :conda:package:`jemalloc`  :conda:package:`judy`  :conda:package:`libgcc-ng` >=4.9 

   :required~by: |required_by_bloomfiltertrie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bloomfiltertrie

   and update with::

      conda update bloomfiltertrie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bloomfiltertrie


.. |required_by_bloomfiltertrie| conda:required_by:: bloomfiltertrie
.. |downloads_bloomfiltertrie| image:: https://img.shields.io/conda/dn/bioconda/bloomfiltertrie.svg?style=flat
   :alt:   (downloads)
.. |docker_bloomfiltertrie| image:: https://quay.io/repository/biocontainers/bloomfiltertrie/status
   :target: https://quay.io/repository/biocontainers/bloomfiltertrie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bloomfiltertrie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bloomfiltertrie/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bloomfiltertrie'
.. highlight: bash

bloomfiltertrie
===============

.. conda:recipe:: bloomfiltertrie
   :replaces_section_title:
   :noindex:

   An alignment\-free\, reference\-free and incremental data structure for colored de Bruijn graph with application to pan\-genome indexing.

   :homepage: https://github.com/GuillaumeHolley/BloomFilterTrie
   :license: MIT / MIT
   :recipe: /`bloomfiltertrie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloomfiltertrie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bloomfiltertrie/meta.yaml>`_

   


.. conda:package:: bloomfiltertrie

   |downloads_bloomfiltertrie| |docker_bloomfiltertrie|

   :versions:
      
      

      ``0.8.7-5``,  ``0.8.7-4``,  ``0.8.7-3``,  ``0.8.7-2``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.1-0``

      

   
   :depends jemalloc: 
   :depends judy: 
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bloomfiltertrie

   and update with::

      conda update bloomfiltertrie

   or use the docker container::

      docker pull quay.io/biocontainers/bloomfiltertrie:<tag>

   (see `bloomfiltertrie/tags`_ for valid values for ``<tag>``)


.. |downloads_bloomfiltertrie| image:: https://img.shields.io/conda/dn/bioconda/bloomfiltertrie.svg?style=flat
   :target: https://anaconda.org/bioconda/bloomfiltertrie
   :alt:   (downloads)
.. |docker_bloomfiltertrie| image:: https://quay.io/repository/biocontainers/bloomfiltertrie/status
   :target: https://quay.io/repository/biocontainers/bloomfiltertrie
.. _`bloomfiltertrie/tags`: https://quay.io/repository/biocontainers/bloomfiltertrie?tab=tags


.. raw:: html

    <script>
        var package = "bloomfiltertrie";
        var versions = ["0.8.7","0.8.7","0.8.7","0.8.7","0.8.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bloomfiltertrie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bloomfiltertrie/README.html
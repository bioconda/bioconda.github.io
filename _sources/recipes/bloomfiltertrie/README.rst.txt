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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bloomfiltertrie

   and update with::

      mamba update bloomfiltertrie

  To create a new environment, run::

      mamba create --name myenvname bloomfiltertrie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cityhash'
.. highlight: bash

cityhash
========

.. conda:recipe:: cityhash
   :replaces_section_title:

   Python\-bindings for CityHash\, a fast non\-cryptographic hash algorithm

   :homepage: https://github.com/escherba/python-cityhash
   :license: MIT License
   :recipe: /`cityhash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cityhash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cityhash/meta.yaml>`_

   


.. conda:package:: cityhash

   |downloads_cityhash| |docker_cityhash|

   :versions: 0.2.3.post9-0, 0.1.7-1, 0.1.7-0, 0.1.5-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cityhash

   and update with::

      conda update cityhash

   or use the docker container::

      docker pull quay.io/biocontainers/cityhash:<tag>

   (see `cityhash/tags`_ for valid values for ``<tag>``)


.. |downloads_cityhash| image:: https://img.shields.io/conda/dn/bioconda/cityhash.svg?style=flat
   :alt:   (downloads)
.. |docker_cityhash| image:: https://quay.io/repository/biocontainers/cityhash/status
   :target: https://quay.io/repository/biocontainers/cityhash
.. _`cityhash/tags`: https://quay.io/repository/biocontainers/cityhash?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cityhash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cityhash/README.html
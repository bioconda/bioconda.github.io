:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libdeflate'
.. highlight: bash

libdeflate
==========

.. conda:recipe:: libdeflate
   :replaces_section_title:

   libdeflate is a library for fast\, whole\-buffer DEFLATE\-based compression and decompression.

   :homepage: https://github.com/ebiggers/libdeflate
   :license: MIT
   :recipe: /`libdeflate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdeflate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libdeflate/meta.yaml>`_

   


.. conda:package:: libdeflate

   |downloads_libdeflate| |docker_libdeflate|

   :versions: 1.2-0, 1.0-1, 1.0-0, 0.8-2, 0.8-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libdeflate

   and update with::

      conda update libdeflate

   or use the docker container::

      docker pull quay.io/biocontainers/libdeflate:<tag>

   (see `libdeflate/tags`_ for valid values for ``<tag>``)


.. |downloads_libdeflate| image:: https://img.shields.io/conda/dn/bioconda/libdeflate.svg?style=flat
   :alt:   (downloads)
.. |docker_libdeflate| image:: https://quay.io/repository/biocontainers/libdeflate/status
   :target: https://quay.io/repository/biocontainers/libdeflate
.. _`libdeflate/tags`: https://quay.io/repository/biocontainers/libdeflate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libdeflate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libdeflate/README.html
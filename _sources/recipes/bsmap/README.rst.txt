:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bsmap'
.. highlight: bash

bsmap
=====

.. conda:recipe:: bsmap
   :replaces_section_title:

   BSMAP is a short reads mapping software for bisulfite sequencing reads.

   :homepage: https://code.google.com/archive/p/bsmap/
   :license: GPL / GNU GPL v3
   :recipe: /`bsmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bsmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bsmap/meta.yaml>`_
   :links: biotools: :biotools:`bsmap`

   


.. conda:package:: bsmap

   |downloads_bsmap| |docker_bsmap|

   :versions: 2.90-2, 2.90-1, 2.90-0
   
   :depends libcxx: >=4.0.1
   :depends python: 
   :depends samtools: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bsmap

   and update with::

      conda update bsmap

   or use the docker container::

      docker pull quay.io/biocontainers/bsmap:<tag>

   (see `bsmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bsmap| image:: https://img.shields.io/conda/dn/bioconda/bsmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bsmap| image:: https://quay.io/repository/biocontainers/bsmap/status
   :target: https://quay.io/repository/biocontainers/bsmap
.. _`bsmap/tags`: https://quay.io/repository/biocontainers/bsmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bsmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bsmap/README.html
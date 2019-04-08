:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discovardenovo'
.. highlight: bash

discovardenovo
==============

.. conda:recipe:: discovar-denovo
   :replaces_section_title:

   Suitable for de novo assembly of large and small genomes.

   :homepage: https://www.broadinstitute.org/software/discovar/
   :license: MIT
   :recipe: /`discovar-denovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar-denovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar-denovo/meta.yaml>`_

   


.. conda:package:: discovardenovo

   |downloads_discovardenovo| |docker_discovardenovo|

   :versions: 52488-1, 52488-0
   
   :depends jemalloc: 
   :depends libgcc: 
   :depends zlib: 1.2.11*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install discovardenovo

   and update with::

      conda update discovardenovo

   or use the docker container::

      docker pull quay.io/biocontainers/discovardenovo:<tag>

   (see `discovardenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_discovardenovo| image:: https://img.shields.io/conda/dn/bioconda/discovardenovo.svg?style=flat
   :alt:   (downloads)
.. |docker_discovardenovo| image:: https://quay.io/repository/biocontainers/discovardenovo/status
   :target: https://quay.io/repository/biocontainers/discovardenovo
.. _`discovardenovo/tags`: https://quay.io/repository/biocontainers/discovardenovo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discovardenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discovardenovo/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eggnog-mapper'
.. highlight: bash

eggnog-mapper
=============

.. conda:recipe:: eggnog-mapper
   :replaces_section_title:

   Fast genome\-wide functional annotation through orthology assignment.

   :homepage: https://github.com/jhcepas/eggnog-mapper
   :documentation: https://github.com/eggnogdb/eggnog-mapper/wiki
   
   :license: GPL / GPL-2.0
   :recipe: /`eggnog-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggnog-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggnog-mapper/meta.yaml>`_

   


.. conda:package:: eggnog-mapper

   |downloads_eggnog-mapper| |docker_eggnog-mapper|

   :versions: 1.0.3-3, 1.0.3-2, 1.0.3-1, 1.0.3-0, 1.0.2-0, 1.0.1-0, 1.0.0-0
   
   :depends biopython: 
   :depends diamond: 0.8.22.*
   :depends hmmer: 3.1b2.*
   :depends python: <3
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eggnog-mapper

   and update with::

      conda update eggnog-mapper

   or use the docker container::

      docker pull quay.io/biocontainers/eggnog-mapper:<tag>

   (see `eggnog-mapper/tags`_ for valid values for ``<tag>``)


.. |downloads_eggnog-mapper| image:: https://img.shields.io/conda/dn/bioconda/eggnog-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/eggnog-mapper
   :alt:   (downloads)
.. |docker_eggnog-mapper| image:: https://quay.io/repository/biocontainers/eggnog-mapper/status
   :target: https://quay.io/repository/biocontainers/eggnog-mapper
.. _`eggnog-mapper/tags`: https://quay.io/repository/biocontainers/eggnog-mapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eggnog-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eggnog-mapper/README.html
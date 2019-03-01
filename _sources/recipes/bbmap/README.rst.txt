:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbmap'
.. highlight: bash

bbmap
=====

.. conda:recipe:: bbmap
   :replaces_section_title:

   BBMap is a short read aligner\, as well as various other bioinformatic tools.

   :homepage: https://sourceforge.net/projects/bbmap
   :documentation: https://jgi.doe.gov/data-and-tools/bbtools/bb-tools-user-guide/
   
   :license: UC-LBL license (see package)
   :recipe: /`bbmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmap/meta.yaml>`_
   :links: biotools: :biotools:`bbmap`, doi: :doi:`10.1371/journal.pone.0185056`

   


.. conda:package:: bbmap

   |downloads_bbmap| |docker_bbmap|

   :versions: 38.22-1, 38.22-0, 38.20-0, 38.19-0, 38.18-0, 38.16-0, 38.06-2, 38.06-0, 37.99-1, 37.99-0, 37.96-0, 37.95-0, 37.90-0, 37.78-0, 37.77-0, 37.75-0, 37.66-0, 37.62-1, 37.62-0, 37.52-1, 37.52-0, 37.17-1, 37.17-0, 37.10-1, 37.10-0, 37.02-0, 36.84-0, 36.32-0, 35.85-2, 35.85-1
   
   :depends libgcc-ng: >=7.3.0
   
   :depends openjdk: >=7.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bbmap

   and update with::

      conda update bbmap

   or use the docker container::

      docker pull quay.io/biocontainers/bbmap:<tag>

   (see `bbmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bbmap| image:: https://img.shields.io/conda/dn/bioconda/bbmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bbmap| image:: https://quay.io/repository/biocontainers/bbmap/status
   :target: https://quay.io/repository/biocontainers/bbmap
.. _`bbmap/tags`: https://quay.io/repository/biocontainers/bbmap?tab=tags






Notes
-----
BBMap is a series of Java programs\, but they come with a number of custom
wrapper shell scripts. Each of these is symlinked to the conda bin directory
during install.



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmap/README.html
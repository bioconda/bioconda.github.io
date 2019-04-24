:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reaper'
.. highlight: bash

reaper
======

.. conda:recipe:: reaper
   :replaces_section_title:

   Tool for demultiplexing\, trimming and filtering sequencing data.

   :homepage: https://www.ebi.ac.uk/~stijn/reaper/reaper.html
   :license: GPL3
   :recipe: /`reaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reaper/meta.yaml>`_

   


.. conda:package:: reaper

   |downloads_reaper| |docker_reaper|

   :versions: 16.098-2, 16.098-1, 16.098-0
   
   :depends libgcc-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reaper

   and update with::

      conda update reaper

   or use the docker container::

      docker pull quay.io/biocontainers/reaper:<tag>

   (see `reaper/tags`_ for valid values for ``<tag>``)


.. |downloads_reaper| image:: https://img.shields.io/conda/dn/bioconda/reaper.svg?style=flat
   :alt:   (downloads)
.. |docker_reaper| image:: https://quay.io/repository/biocontainers/reaper/status
   :target: https://quay.io/repository/biocontainers/reaper
.. _`reaper/tags`: https://quay.io/repository/biocontainers/reaper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reaper/README.html
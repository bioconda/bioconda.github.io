:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moods'
.. highlight: bash

moods
=====

.. conda:recipe:: moods
   :replaces_section_title:

   MOODS\, Motif Occurrence Detection Suite

   :homepage: https://github.com/jhkorhonen/MOODS
   :license: GPL-3.0
   :recipe: /`moods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods/meta.yaml>`_
   :links: biotools: :biotools:`MOODS`, doi: :doi:`10.1109/TCBB.2009.35`

   


.. conda:package:: moods

   |downloads_moods| |docker_moods|

   :versions: 1.9.3-2, 1.9.3-1, 1.9.3-0, 1.9.0-0
   
   :depends libgcc-ng: >=4.9
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moods

   and update with::

      conda update moods

   or use the docker container::

      docker pull quay.io/biocontainers/moods:<tag>

   (see `moods/tags`_ for valid values for ``<tag>``)


.. |downloads_moods| image:: https://img.shields.io/conda/dn/bioconda/moods.svg?style=flat
   :target: https://anaconda.org/bioconda/moods
   :alt:   (downloads)
.. |docker_moods| image:: https://quay.io/repository/biocontainers/moods/status
   :target: https://quay.io/repository/biocontainers/moods
.. _`moods/tags`: https://quay.io/repository/biocontainers/moods?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moods/README.html
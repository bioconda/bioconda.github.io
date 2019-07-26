:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignlib-lite'
.. highlight: bash

alignlib-lite
=============

.. conda:recipe:: alignlib-lite
   :replaces_section_title:

   Simple wrapper around alignlib C\+\+ library for sequence alignment

   :homepage: http://sourceforge.net/projects/alignlib/
   :license: GPL-2.0-or-later
   :recipe: /`alignlib-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignlib-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignlib-lite/meta.yaml>`_

   


.. conda:package:: alignlib-lite

   |downloads_alignlib-lite| |docker_alignlib-lite|

   :versions: 0.3-2, 0.3-1, 0.3-0, 0.2.3-2, 0.2.3-1, 0.2.3-0
   
   :depends libcxx: >=4.0.1
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alignlib-lite

   and update with::

      conda update alignlib-lite

   or use the docker container::

      docker pull quay.io/biocontainers/alignlib-lite:<tag>

   (see `alignlib-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_alignlib-lite| image:: https://img.shields.io/conda/dn/bioconda/alignlib-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/alignlib-lite
   :alt:   (downloads)
.. |docker_alignlib-lite| image:: https://quay.io/repository/biocontainers/alignlib-lite/status
   :target: https://quay.io/repository/biocontainers/alignlib-lite
.. _`alignlib-lite/tags`: https://quay.io/repository/biocontainers/alignlib-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignlib-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignlib-lite/README.html
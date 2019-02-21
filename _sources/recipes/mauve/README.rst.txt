:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mauve'
.. highlight: bash

mauve
=====

.. conda:recipe:: mauve
   :replaces_section_title:

   Mauve is a system for constructing multiple genome alignments in the presence of large\-scale evolutionary events such as rearrangement and inversion

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauve/meta.yaml>`_

   


.. conda:package:: mauve

   |downloads_mauve| |docker_mauve|

   :versions: 2.4.0.r4736-0
   
   :depends mauvealigner: 
   
   :depends openjdk: >=8.0.122
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mauve

   and update with::

      conda update mauve

   or use the docker container::

      docker pull quay.io/biocontainers/mauve:<tag>

   (see `mauve/tags`_ for valid values for ``<tag>``)


.. |downloads_mauve| image:: https://img.shields.io/conda/dn/bioconda/mauve.svg?style=flat
   :alt:   (downloads)
.. |docker_mauve| image:: https://quay.io/repository/biocontainers/mauve/status
   :target: https://quay.io/repository/biocontainers/mauve
.. _`mauve/tags`: https://quay.io/repository/biocontainers/mauve?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauve/README.html
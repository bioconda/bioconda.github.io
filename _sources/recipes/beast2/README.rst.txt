:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast2'
.. highlight: bash

beast2
======

.. conda:recipe:: beast2/2.4.5
   :replaces_section_title:

   BEAST 2 is a cross\-platform program for Bayesian phylogenetic analysis of molecular sequences.

   :homepage: http://www.beast2.org
   :license: LGPLv2.1
   :recipe: /`beast2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2>`_/`2.4.5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2/2.4.5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast2/2.4.5/meta.yaml>`_

   


.. conda:package:: beast2

   |downloads_beast2| |docker_beast2|

   :versions: 2.5.0-0, 2.4.5-1, 2.4.5-0
   
   :depends beagle-lib: 
   :depends font-ttf-ubuntu: 
   :depends fontconfig: >=2.13.1,<3.0a0
   :depends freetype: >=2.9.1,<3.0a0
   :depends openjdk: 8.0.* zulu8*
   :depends xorg-libxtst: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beast2

   and update with::

      conda update beast2

   or use the docker container::

      docker pull quay.io/biocontainers/beast2:<tag>

   (see `beast2/tags`_ for valid values for ``<tag>``)


.. |downloads_beast2| image:: https://img.shields.io/conda/dn/bioconda/beast2.svg?style=flat
   :alt:   (downloads)
.. |docker_beast2| image:: https://quay.io/repository/biocontainers/beast2/status
   :target: https://quay.io/repository/biocontainers/beast2
.. _`beast2/tags`: https://quay.io/repository/biocontainers/beast2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast2/README.html
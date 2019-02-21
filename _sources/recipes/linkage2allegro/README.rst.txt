:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkage2allegro'
.. highlight: bash

linkage2allegro
===============

.. conda:recipe:: linkage2allegro
   :replaces_section_title:

   Converts between the output linkage formats of Merlin\, Simwalk\, Genehunter\, and Swiftlink into Allegro.

   :homepage: https://github.com/BioTools-Tek/linkage-converter
   :license: GPL3
   :recipe: /`linkage2allegro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkage2allegro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkage2allegro/meta.yaml>`_

   


.. conda:package:: linkage2allegro

   |downloads_linkage2allegro| |docker_linkage2allegro|

   :versions: 2017.3-1, 2017.3-0, 2017.2-0, 2017.1-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install linkage2allegro

   and update with::

      conda update linkage2allegro

   or use the docker container::

      docker pull quay.io/biocontainers/linkage2allegro:<tag>

   (see `linkage2allegro/tags`_ for valid values for ``<tag>``)


.. |downloads_linkage2allegro| image:: https://img.shields.io/conda/dn/bioconda/linkage2allegro.svg?style=flat
   :alt:   (downloads)
.. |docker_linkage2allegro| image:: https://quay.io/repository/biocontainers/linkage2allegro/status
   :target: https://quay.io/repository/biocontainers/linkage2allegro
.. _`linkage2allegro/tags`: https://quay.io/repository/biocontainers/linkage2allegro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkage2allegro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkage2allegro/README.html
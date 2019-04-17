:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathwaymatcher'
.. highlight: bash

pathwaymatcher
==============

.. conda:recipe:: pathwaymatcher
   :replaces_section_title:

   PathwayMatcher is a software tool writen in Java to search for pathways related to a list of proteins in Reactome.


   :homepage: https://github.com/PathwayAnalysisPlatform/PathwayMatcher
   :license: Apache License, Version 2.0
   :recipe: /`pathwaymatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher/meta.yaml>`_

   


.. conda:package:: pathwaymatcher

   |downloads_pathwaymatcher| |docker_pathwaymatcher|

   :versions: 1.9.1-1, 1.8.1-2, 1.8.1-1, 1.8-1, 1.7-0
   
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathwaymatcher

   and update with::

      conda update pathwaymatcher

   or use the docker container::

      docker pull quay.io/biocontainers/pathwaymatcher:<tag>

   (see `pathwaymatcher/tags`_ for valid values for ``<tag>``)


.. |downloads_pathwaymatcher| image:: https://img.shields.io/conda/dn/bioconda/pathwaymatcher.svg?style=flat
   :alt:   (downloads)
.. |docker_pathwaymatcher| image:: https://quay.io/repository/biocontainers/pathwaymatcher/status
   :target: https://quay.io/repository/biocontainers/pathwaymatcher
.. _`pathwaymatcher/tags`: https://quay.io/repository/biocontainers/pathwaymatcher?tab=tags






Notes
-----
PathwayMatcher is Java program that comes with a custom wrapper shell script.
By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"java \-Xms512m \-Xmx1g \-jar PathwayMatcher.jar\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathwaymatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathwaymatcher/README.html
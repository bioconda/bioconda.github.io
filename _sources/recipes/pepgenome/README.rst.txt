:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepgenome'
.. highlight: bash

pepgenome
=========

.. conda:recipe:: pepgenome
   :replaces_section_title:

   A java tool to map peptide and peptidoform evideces to ENSEMBL Genome Coordinates

   :homepage: https://github.com/bigbio/pgatk/
   :license: Apache / Apache-2.0
   :recipe: /`pepgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepgenome/meta.yaml>`_

   


.. conda:package:: pepgenome

   |downloads_pepgenome| |docker_pepgenome|

   :versions: 1.0.beta-0
   
   :depends openjdk: >=6
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pepgenome

   and update with::

      conda update pepgenome

   or use the docker container::

      docker pull quay.io/biocontainers/pepgenome:<tag>

   (see `pepgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_pepgenome| image:: https://img.shields.io/conda/dn/bioconda/pepgenome.svg?style=flat
   :alt:   (downloads)
.. |docker_pepgenome| image:: https://quay.io/repository/biocontainers/pepgenome/status
   :target: https://quay.io/repository/biocontainers/pepgenome
.. _`pepgenome/tags`: https://quay.io/repository/biocontainers/pepgenome?tab=tags






Notes
-----
PepGenome is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"PepGenome \-Xms512m \-Xmx1g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepgenome/README.html
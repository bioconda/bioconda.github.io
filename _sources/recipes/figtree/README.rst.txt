:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'figtree'
.. highlight: bash

figtree
=======

.. conda:recipe:: figtree
   :replaces_section_title:
   :noindex:

   FigTree is designed as a graphical viewer of phylogenetic trees and as a program for producing publication\-ready figures.

   :homepage: https://github.com/rambaut/figtree
   :license: GPL / GPLv2
   :recipe: /`figtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figtree/meta.yaml>`_

   


.. conda:package:: figtree

   |downloads_figtree| |docker_figtree|

   :versions:
      
      

      ``1.4.4-0``

      

   
   :depends openjdk: ``>=5``
   :depends python: 
   :depends xorg-libxtst: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install figtree

   and update with::

      conda update figtree

   or use the docker container::

      docker pull quay.io/biocontainers/figtree:<tag>

   (see `figtree/tags`_ for valid values for ``<tag>``)


.. |downloads_figtree| image:: https://img.shields.io/conda/dn/bioconda/figtree.svg?style=flat
   :target: https://anaconda.org/bioconda/figtree
   :alt:   (downloads)
.. |docker_figtree| image:: https://quay.io/repository/biocontainers/figtree/status
   :target: https://quay.io/repository/biocontainers/figtree
.. _`figtree/tags`: https://quay.io/repository/biocontainers/figtree?tab=tags






Notes
-----
FigTree is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"figtree\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"figtree \-Xms512m \-Xmx1g\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/figtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/figtree/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'indelfixer'
.. highlight: bash

indelfixer
==========

.. conda:recipe:: indelfixer
   :replaces_section_title:
   :noindex:

   A sensitive aligner for 454\, Illumina and PacBio data\, employing a full Smith\-Waterman alignment against a reference.

   :homepage: https://github.com/cbg-ethz/InDelFixer
   :license: GNU General Public License v3.0
   :recipe: /`indelfixer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/indelfixer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/indelfixer/meta.yaml>`_

   


.. conda:package:: indelfixer

   |downloads_indelfixer| |docker_indelfixer|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install indelfixer

   and update with::

      conda update indelfixer

   or use the docker container::

      docker pull quay.io/biocontainers/indelfixer:<tag>

   (see `indelfixer/tags`_ for valid values for ``<tag>``)


.. |downloads_indelfixer| image:: https://img.shields.io/conda/dn/bioconda/indelfixer.svg?style=flat
   :target: https://anaconda.org/bioconda/indelfixer
   :alt:   (downloads)
.. |docker_indelfixer| image:: https://quay.io/repository/biocontainers/indelfixer/status
   :target: https://quay.io/repository/biocontainers/indelfixer
.. _`indelfixer/tags`: https://quay.io/repository/biocontainers/indelfixer?tab=tags






Notes
-----
InDelFixer is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"InDelFixer\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"InDelFixer \-Xms512m \-Xmx1G\"


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/indelfixer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/indelfixer/README.html
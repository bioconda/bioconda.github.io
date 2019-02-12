:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbsx'
.. highlight: bash

gbsx
====

.. conda:recipe:: gbsx
   :replaces_section_title:

   Toolkit for experimental design and demultiplexing genotyping by sequencing experiments

   :homepage: https://github.com/GenomicsCoreLeuven/GBSX
   :license: GPL / GPL-3.0
   :recipe: /`gbsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0514-3`

   Genotyping By Sequencing demultipleXing toolkit \(GBSX\) is a toolkit with an
   inline barcode demultiplexer for usage in the analysis of single read or
   paired\-end genotyping by sequence \(GBS\) data\, a barcode generator\, a barcode
   discovery tool\, and a restriction enzyme predictor. GBSX can easily be
   incorperated as a preceding analysis step for already deployed SNP pipelines.



.. conda:package:: gbsx

   |downloads_gbsx| |docker_gbsx|

   :versions: 1.3-0
   
   :depends openjdk: >=6
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gbsx

   and update with::

      conda update gbsx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gbsx:<tag>

   (see `gbsx/tags`_ for valid values for ``<tag>``)


.. |downloads_gbsx| image:: https://img.shields.io/conda/dn/bioconda/gbsx.svg?style=flat
   :alt:   (downloads)
.. |docker_gbsx| image:: https://quay.io/repository/biocontainers/gbsx/status
   :target: https://quay.io/repository/biocontainers/gbsx
.. _`gbsx/tags`: https://quay.io/repository/biocontainers/gbsx?tab=tags






Notes
-----
GBSX is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"gbsx\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"gbsx \-Xms512m \-Xmx1g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbsx/README.html
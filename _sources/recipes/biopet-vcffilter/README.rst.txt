:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-vcffilter'
.. highlight: bash

biopet-vcffilter
================

.. conda:recipe:: biopet-vcffilter
   :replaces_section_title:

   This tool enables a user to filter VCF files.

   :homepage: https://github.com/biopet/vcffilter
   :license: MIT
   :recipe: /`biopet-vcffilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcffilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcffilter/meta.yaml>`_

   This tool enables a user to filter VCF files. For example on sample depth and\/or total depth. It can also be used to
   filter out the reference calls and\/or minimum number of sample passes. There is a wide set of options which one can
   use to change the filter settings.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/vcffilter


.. conda:package:: biopet-vcffilter

   |downloads_biopet-vcffilter| |docker_biopet-vcffilter|

   :versions: 0.2-0
   
   :depends openjdk: >=8,<9
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-vcffilter

   and update with::

      conda update biopet-vcffilter

   or use the docker container::

      docker pull quay.io/biocontainers/biopet-vcffilter:<tag>

   (see `biopet-vcffilter/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-vcffilter| image:: https://img.shields.io/conda/dn/bioconda/biopet-vcffilter.svg?style=flat
   :alt:   (downloads)
.. |docker_biopet-vcffilter| image:: https://quay.io/repository/biocontainers/biopet-vcffilter/status
   :target: https://quay.io/repository/biocontainers/biopet-vcffilter
.. _`biopet-vcffilter/tags`: https://quay.io/repository/biocontainers/biopet-vcffilter?tab=tags






Notes
-----
biopet\-vcffilter is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-vcffilter\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-vcffilter \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-vcffilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-vcffilter/README.html
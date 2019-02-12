:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-vcfstats'
.. highlight: bash

biopet-vcfstats
===============

.. conda:recipe:: biopet-vcfstats
   :replaces_section_title:

   Vcfstats is a tool that can generate metrics from a vcf file.

   :homepage: https://github.com/biopet/vcfstats
   :license: MIT
   :recipe: /`biopet-vcfstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcfstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcfstats/meta.yaml>`_

   Vcfstats is a tool that can generate metrics from a vcf file.

    \- General stats \(default\, can be disabled\)
    \- Genotype stats \(default\, can be disabled\)
    \- Sample compare \(default\, can be disabled\)
    \- Sample distributions \(default\, can be disabled\)
    \- Field histograms

   This tool can run locally single threaded but also on a Apache Spark cluster.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/vcfstats


.. conda:package:: biopet-vcfstats

   |downloads_biopet-vcfstats| |docker_biopet-vcfstats|

   :versions: 1.2-0, 1.1-1, 1.1-0, 1.0-1, 1.0-0
   
   :depends openjdk: >=8,<9
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biopet-vcfstats

   and update with::

      conda update biopet-vcfstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biopet-vcfstats:<tag>

   (see `biopet-vcfstats/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-vcfstats| image:: https://img.shields.io/conda/dn/bioconda/biopet-vcfstats.svg?style=flat
   :alt:   (downloads)
.. |docker_biopet-vcfstats| image:: https://quay.io/repository/biocontainers/biopet-vcfstats/status
   :target: https://quay.io/repository/biocontainers/biopet-vcfstats
.. _`biopet-vcfstats/tags`: https://quay.io/repository/biocontainers/biopet-vcfstats?tab=tags






Notes
-----
biopet\-vcfstats is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-vcfstats\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-vcfstats \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-vcfstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-vcfstats/README.html
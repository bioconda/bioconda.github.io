.. _`biopet-vcfstats`:

biopet-vcfstats
===============

|downloads|

Vcfstats is a tool that can generate metrics from a vcf file.

============= ===========
Home          https://github.com/biopet/vcfstats
Versions      1.0, 1.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcfstats



============= ===========

Vcfstats is a tool that can generate metrics from a vcf file.

\- General stats \(default\, can be disabled\)
\- Genotype stats \(default\, can be disabled\)
\- Sample compare \(default\, can be disabled\)
\- Sample distributions \(default\, can be disabled\)
\- Field histograms

This tool can run locally single threaded but also on a Apache Spark cluster.

For documentation and manuals visit our \[github.io page\]\(https\:\/\/biopet.github.io\/vcfstats\).

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-vcfstats

and update with::

   conda update biopet-vcfstats


Notes
-----
biopet\-vcfstats is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-vcfstats\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-vcfstats \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-vcfstats.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-vcfstats/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-vcfstats/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-vcfstats/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-vcfstats
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-vcfstats/status
                :target: https://quay.io/repository/biocontainers/biopet-vcfstats


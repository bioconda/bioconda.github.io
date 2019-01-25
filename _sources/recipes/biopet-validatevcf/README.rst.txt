.. _`biopet-validatevcf`:

biopet-validatevcf
==================

|downloads|

ValidateVcf validates a VCF file against a reference genomes.

============= ===========
Home          https://github.com/biopet/validatevcf
Versions      0.1
License       MIT
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/biopet-validatevcf/meta.yaml



============= ===========

ValidateVcf validates a VCF file against a reference genomes. It checks if the positions
present in the VCF are also present on the reference genoome.

For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatevcf

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install biopet-validatevcf

and update with::

   conda update biopet-validatevcf


Notes
-----
biopet\-validatevcf is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatevcf\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatevcf \-Xms512m \-Xmx1g\'. 


|docker|

A Docker container is available at https://quay.io/repository/biocontainers/biopet-validatevcf.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/biopet-validatevcf/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/biopet-validatevcf/README.html
.. |downloads| image:: https://anaconda.org/bioconda/biopet-validatevcf/badges/downloads.svg
               :target: https://anaconda.org/bioconda/biopet-validatevcf
.. |docker| image:: https://quay.io/repository/biocontainers/biopet-validatevcf/status
                :target: https://quay.io/repository/biocontainers/biopet-validatevcf


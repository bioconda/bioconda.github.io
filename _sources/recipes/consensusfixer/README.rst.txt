.. _`consensusfixer`:

consensusfixer
==============

|downloads|

Computes a consensus sequence with wobbles\, ambiguous bases\, and in\-frame insertions\, from a NGS read alignment\.

============= ===========
Home          https://github.com/cbg-ethz/ConsensusFixer
Versions      0.3.1
License       GNU General Public License v3.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consensusfixer



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install consensusfixer

and update with::

   conda update consensusfixer


Notes
-----
ConsensusFixer is Java program that comes with a custom wrapper shell script\.
This shell wrapper is called \"ConsensusFixer\" and is on \$PATH by default\. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper\. If you want to overwrite it you can
specify these values directly after your binaries\. If you have \_JAVA\_OPTIONS
set globally this will take precedence\.
For example run it with \"ConsensusFixer \-Xms512m \-Xmx1G\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/consensusfixer.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/consensusfixer/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/consensusfixer/README.html
.. |downloads| image:: https://anaconda.org/bioconda/consensusfixer/badges/downloads.svg
               :target: https://anaconda.org/bioconda/consensusfixer
.. |docker| image:: https://quay.io/repository/biocontainers/consensusfixer/status
                :target: https://quay.io/repository/biocontainers/consensusfixer


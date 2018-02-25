.. _`mobster`:

mobster
=======

|downloads|

NGS tool for detecting MEI and gene retrotransposition events in WGS and WES data\, see Thung et al\. Genome Biol\. 2014 for more information\.

======== ===========
Home     https://github.com/jyhehir/mobster
Versions 0.2.1, 0.2.2, 0.2.3.1
License  GPL3
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobster

======== ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install mobster

and update with::

   conda update mobster


Notes
-----
After installation\, mobster is available as command \`mobster\`\.
Further\, you can convert mobster output to vcf with the command \`mobster\-to\-vcf\`\.



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/mobster.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/mobster/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/mobster/README.html
.. |downloads| image:: https://anaconda.org/bioconda/mobster/badges/downloads.svg
               :target: https://anaconda.org/bioconda/mobster
.. |docker| image:: https://quay.io/repository/biocontainers/mobster/status
                :target: https://quay.io/repository/biocontainers/mobster


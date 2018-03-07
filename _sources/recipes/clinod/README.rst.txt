.. _`clinod`:

clinod
======

|downloads|

Command line NoD \(clinod\)\, for  predicting nucleolar localization sequences.

============= ===========
Home          http://www.compbio.dundee.ac.uk/nod
Versions      1.3
License       Apache License, Version 2.0 + others used internally
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinod



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install clinod

and update with::

   conda update clinod


Notes
-----
Command line NoD \(clinod\) is Java program which is packaged with a custom
wrapper shell script. This shell wrapper is called \"clinod\" and is on \$PATH
by default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want
to overwrite it you can specify these values directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"clinod \-Xms512m \-Xmx1g ...\"



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/clinod.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/clinod/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/clinod/README.html
.. |downloads| image:: https://anaconda.org/bioconda/clinod/badges/downloads.svg
               :target: https://anaconda.org/bioconda/clinod
.. |docker| image:: https://quay.io/repository/biocontainers/clinod/status
                :target: https://quay.io/repository/biocontainers/clinod


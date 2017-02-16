.. _`parafly`:

parafly
=======

|downloads|

Given a file containing a list of unix commands, multithreading is used to process the commands in parallel on a single server. Success/failure is captured, and failed commands are retained and reported.

======== ===========
Home     http://parafly.sourceforge.net/
Versions r2013_01_21
License  The Broad Institute (own license thingy)
Recipe   https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly
======== ===========

Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install parafly

and update with::

   conda update parafly



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/parafly.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/parafly/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/parafly/README.html
.. |downloads| image:: https://anaconda.org/bioconda/parafly/badges/downloads.svg
               :target: https://anaconda.org/bioconda/parafly
.. |docker| image:: https://quay.io/repository/biocontainers/parafly/status
                :target: https://quay.io/repository/biocontainers/parafly



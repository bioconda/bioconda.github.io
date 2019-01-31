.. _`cistrome-ceas`:

cistrome-ceas
=============

|downloads|

Cistrome\-CEAS \-\- Cis\-regulatory Element Annotation System

============= ===========
Home          https://bitbucket.org/cistrome/cistrome-applications-harvard/overview
Versions      1.0.2b1
License       Artistic Licence
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//cistrome-ceas/meta.yaml

Documentation http://liulab.dfci.harvard.edu/CEAS/


Development   https://bitbucket.org/cistrome/cistrome-applications-harvard


============= ===========

Tool to characterize genome\-wide protein\-DNA interaction patterns
from ChIP\-chip and ChIP\-Seq of both sharp and broad binding factors


Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install cistrome-ceas

and update with::

   conda update cistrome-ceas


Notes
-----
Installs version 1.0.2 of CEAS from cistrome \(commit id d8c0751\,
datestamp 20140929\)\, which includes ceasBW \(a version of ceas which
can handle bigWig file input from MACS2\).
This version is also patched to suppress warnings about using sqlite3
rather than MySQLdb.
The Cistrome code is at
https\:\/\/bitbucket.org\/cistrome\/cistrome\-applications\-harvard\/overview
The CEAS code is under the published\-packages\/CEAS\/ subdirectory
Cistrome data files and documentation can be found at
http\:\/\/liulab.dfci.harvard.edu\/CEAS\/index.html



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/cistrome-ceas.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/cistrome-ceas/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/cistrome-ceas/README.html
.. |downloads| image:: https://anaconda.org/bioconda/cistrome-ceas/badges/downloads.svg
               :target: https://anaconda.org/bioconda/cistrome-ceas
.. |docker| image:: https://quay.io/repository/biocontainers/cistrome-ceas/status
                :target: https://quay.io/repository/biocontainers/cistrome-ceas


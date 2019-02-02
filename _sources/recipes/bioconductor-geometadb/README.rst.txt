.. _`bioconductor-geometadb`:

bioconductor-geometadb
======================

|downloads|

The NCBI Gene Expression Omnibus \(GEO\) represents the largest public repository of microarray data. However\, finding data of interest can be challenging using current tools. GEOmetadb is an attempt to make access to the metadata associated with samples\, platforms\, and datasets much more feasible. This is accomplished by parsing all the NCBI GEO metadata into a SQLite database that can be stored and queried locally. GEOmetadb is simply a thin wrapper around the SQLite database along with associated documentation. Finally\, the SQLite database is updated regularly as new data is added to GEO and can be downloaded at will for the most up\-to\-date metadata. GEOmetadb paper\: http\:\/\/bioinformatics.oxfordjournals.org\/cgi\/content\/short\/24\/23\/2798 .

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/GEOmetadb.html
Versions      1.44.0, 1.42.0, 1.40.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-geometadb/meta.yaml



Links         biotools: :biotools:`geometadb`

============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-geometadb

and update with::

   conda update bioconductor-geometadb



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-geometadb.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-geometadb/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-geometadb/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-geometadb/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-geometadb
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-geometadb/status
                :target: https://quay.io/repository/biocontainers/bioconductor-geometadb


.. title:: Package Recipe 'bioconductor-geometadb'
.. highlight: bash


bioconductor-geometadb
======================

.. conda:recipe:: bioconductor-geometadb
   :replaces_section_title:

   The NCBI Gene Expression Omnibus \(GEO\) represents the largest public repository of microarray data. However\, finding data of interest can be challenging using current tools. GEOmetadb is an attempt to make access to the metadata associated with samples\, platforms\, and datasets much more feasible. This is accomplished by parsing all the NCBI GEO metadata into a SQLite database that can be stored and queried locally. GEOmetadb is simply a thin wrapper around the SQLite database along with associated documentation. Finally\, the SQLite database is updated regularly as new data is added to GEO and can be downloaded at will for the most up\-to\-date metadata. GEOmetadb paper\: http\:\/\/bioinformatics.oxfordjournals.org\/cgi\/content\/short\/24\/23\/2798 .

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GEOmetadb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geometadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geometadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geometadb/meta.yaml>`_
   :links: biotools: :biotools:`geometadb`

   


.. conda:package:: bioconductor-geometadb

   |downloads_bioconductor-geometadb| |docker_bioconductor-geometadb|

   :versions: 1.44.0, 1.42.0, 1.40.0

   :depends: :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-geometadb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geometadb

   and update with::

      conda update bioconductor-geometadb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-geometadb


.. |required_by_bioconductor-geometadb| conda:required_by:: bioconductor-geometadb
.. |downloads_bioconductor-geometadb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geometadb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geometadb| image:: https://quay.io/repository/biocontainers/bioconductor-geometadb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geometadb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geometadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geometadb/README.html


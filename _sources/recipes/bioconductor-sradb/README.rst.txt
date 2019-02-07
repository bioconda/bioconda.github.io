.. title:: Package Recipe 'bioconductor-sradb'
.. highlight: bash


bioconductor-sradb
==================

.. conda:recipe:: bioconductor-sradb
   :replaces_section_title:

   The Sequence Read Archive \(SRA\) is the largest public repository of sequencing data from the next generation of sequencing platforms including Roche 454 GS System\, Illumina Genome Analyzer\, Applied Biosystems SOLiD System\, Helicos Heliscope\, and others. However\, finding data of interest can be challenging using current tools. SRAdb is an attempt to make access to the metadata associated with submission\, study\, sample\, experiment and run much more feasible. This is accomplished by parsing all the NCBI SRA metadata into a SQLite database that can be stored and queried locally. Fulltext search in the package make querying metadata very flexible and powerful.  fastq and sra files can be downloaded for doing alignment locally. Beside ftp protocol\, the SRAdb has funcitons supporting fastp protocol \(ascp from Aspera Connect\) for faster downloading large data files over long distance. The SQLite database is updated regularly as new data is added to SRA and can be downloaded at will for the most up\-to\-date metadata.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SRAdb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sradb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb/meta.yaml>`_
   :links: biotools: :biotools:`sradb`

   


.. conda:package:: bioconductor-sradb

   |downloads_bioconductor-sradb| |docker_bioconductor-sradb|

   :versions: 1.44.0, 1.42.2, 1.37.0, 1.36.0, 1.32.0, 1.28.0

   :depends: :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcurl`  :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-sradb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sradb

   and update with::

      conda update bioconductor-sradb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sradb


.. |required_by_bioconductor-sradb| conda:required_by:: bioconductor-sradb
.. |downloads_bioconductor-sradb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sradb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sradb| image:: https://quay.io/repository/biocontainers/bioconductor-sradb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sradb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sradb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sradb/README.html


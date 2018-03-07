.. _`bioconductor-uniquorn`:

bioconductor-uniquorn
=====================

|downloads|

Identifies cancer cell lines with their small variant fingerprint. Cancer cell line misidentification and cross\-contamination reprents a significant challenge for cancer researchers. The identification is vital and in the frame of this package based on the locations or loci of somatic and germline mutations or variations. The input format is vcf and the files have to contain a single cancer cell line sample. The implemented method is optimized for the Next\-generation whole exome and whole genome DNA\-sequencing technology. RNA\-seq data is very likely to work as well but hasn\'t been rigiously tested yet. Panel\-seq will require manual adjustment of thresholds.

============= ===========
Home          http://bioconductor.org/packages/3.6/bioc/html/Uniquorn.html
Versions      1.6.0
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniquorn



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-uniquorn

and update with::

   conda update bioconductor-uniquorn



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-uniquorn.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-uniquorn/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-uniquorn/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-uniquorn/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-uniquorn
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-uniquorn/status
                :target: https://quay.io/repository/biocontainers/bioconductor-uniquorn


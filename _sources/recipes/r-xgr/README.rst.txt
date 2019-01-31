.. _`r-xgr`:

r-xgr
=====

|downloads|

The central goal of XGR by Fang et al. \(2016\) \<doi\:10.1186\/s13073\-016\-0384\-y\> is to provide a data interpretation system necessary to do \"big data\" science. It is designed to make a user\-defined gene or SNP list \(or genomic regions\) more interpretable by comprehensively utilising ontology annotations and interaction networks to reveal relationships and enhance opportunities for biological discovery. XGR is unique in supporting a broad range of ontologies \(including knowledge of biological and molecular functions\, pathways\, diseases and phenotypes \- in both human and mouse\) and different types of networks \(including functional\, physical and pathway interactions\). There are two core functionalities of XGR. The first is to provide basic infrastructures for easy access to built\-in ontologies and networks. The second is to support data interpretations via 1\) enrichment analysis using either built\-in or custom ontologies\, 2\) similarity analysis for calculating semantic similarity between genes \(or SNPs\) based on their ontology annotation profiles\, 3\) network analysis for identification of gene networks given a query list of \(significant\) genes\, SNPs or genomic regions\, and 4\) annotation analysis for interpreting genomic regions using co\-localised functional genomic annotations \(such as open chromatin\, epigenetic marks\, TF binding sites and genomic segments\) and using nearby gene annotations \(by ontologies\). Together with its web app\, XGR aims to provide a user\-friendly tool for exploring genomic relations at the gene\, SNP and genomic region level.

============= ===========
Home          http://XGR.r-forge.r-project.org, http://galahad.well.ox.ac.uk/XGR
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//r-xgr/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-xgr

and update with::

   conda update r-xgr



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-xgr.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-xgr/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-xgr/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-xgr/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-xgr
.. |docker| image:: https://quay.io/repository/biocontainers/r-xgr/status
                :target: https://quay.io/repository/biocontainers/r-xgr


.. _`r-dnet`:

r-dnet
======

|downloads|

The focus of the dnet by Fang and Gough \(2014\) \<doi\:10.1186\/s13073\-014\-0064\-8\> is to make sense of omics data \(such as gene expression and mutations\) from different angles including\: integration with molecular networks\, enrichments using ontologies\, and relevance to gene evolutionary ages. Integration is achieved to identify a gene subnetwork from the whole gene network whose nodes\/genes are labelled with informative data \(such as the significant levels of differential expression or survival risks\). To help make sense of identified gene networks\, enrichment analysis is also supported using a wide variety of pre\-compiled ontologies and phylostratific gene age information in major organisms including\: human\, mouse\, rat\, chicken\, C.elegans\, fruit fly\, zebrafish and arabidopsis. Add\-on functionalities are supports for calculating semantic similarity between ontology terms \(and between genes\) and for calculating network affinity based on random walk\; both can be done via high\-performance parallel computing.

============= ===========
Home          http://dnet.r-forge.r-project.org, https://github.com/hfang-bristol/dnet
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dnet



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install r-dnet

and update with::

   conda update r-dnet



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/r-dnet.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/r-dnet/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/r-dnet/README.html
.. |downloads| image:: https://anaconda.org/bioconda/r-dnet/badges/downloads.svg
               :target: https://anaconda.org/bioconda/r-dnet
.. |docker| image:: https://quay.io/repository/biocontainers/r-dnet/status
                :target: https://quay.io/repository/biocontainers/r-dnet


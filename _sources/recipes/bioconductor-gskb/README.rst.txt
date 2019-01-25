.. _`bioconductor-gskb`:

bioconductor-gskb
=================

|downloads|

Gene Set Knowledgebase \(GSKB\) is a comprehensive knowledgebase for pathway analysis in mouse. Interpretation of high\-throughput genomics data based on biological pathways constitutes a constant challenge\, partly because of the lack of supporting pathway database. We created a functional genomics knowledgebase in mouse\, which includes 33\,261 pathways and gene sets compiled from 40 sources such as Gene Ontology\, KEGG\, GeneSetDB\, PANTHER\, microRNA and transcription factor target genes\, etc.  In addition\, we also manually collected and curated 8\,747 lists of differentially expressed genes from 2\,526 published gene expression studies to enable the detection of similarity to previously reported gene expression signatures. These two types of data constitute a comprehensive Gene Set Knowledgebase \(GSKB\)\, which can be readily used by various pathway analysis software such as gene set enrichment analysis \(GSEA\). As a first step\, we gathered annotation information from 40 existing databases for mouse\-related gene sets. These gene sets are divided into 7 categories\, namely\, Gene Ontology\, Curated pathways\, Metabolic Pathways\, Transcription Factor \(TF\) and microRNA target genes\, location \(cytogenetics band\)\, and others. We used information in GeneSetDB for some of the databases. Detailed information on these 40 sources and the citations is available http\:\/\/ge\-lab.org\/gskb\/Table\%201\-sources.pdf . The gene lists from literature were retrieved manually from individual gene expression studies through a process similar to the one used to create AraPath\, a similar resource for Arabidopsis\[12\]. As most expression studies upload raw data to repositories like GEO and ArrayExpress\, we used the meta\-data in these databases to search for publications. We scanned all datasets we can found and retrieved 4\,313 potentially useful papers reporting gene expression studies in mouse. These papers were individually read by curators to identify lists of differentially expressed genes in various conditions. We compiled a total of 8\,747 lists of differently expressed genes from 2\,518 of papers. Each gene list was annotated with a unique name\, brief description\, and publication information\, similar to the protocol used in MSigDB and Arapath.  These gene lists constitute a large collection of published gene expression signatures that form a foundation for interpret new gene lists and expression profiles. More information about this data is available here http\:\/\/ge\-lab.org\/gskb\/. There is also a paper describing these data are currently in revision by Database\: The Journal of Biological Databases and Curation.

============= ===========
Home          https://bioconductor.org/packages/3.8/data/experiment/html/gskb.html
Versions      
License       Artistic-2.0
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//home/circleci/project/docs/bioconda-recipes/recipes/bioconductor-gskb/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-gskb

and update with::

   conda update bioconductor-gskb



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-gskb.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-gskb/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-gskb/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-gskb/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-gskb
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-gskb/status
                :target: https://quay.io/repository/biocontainers/bioconductor-gskb


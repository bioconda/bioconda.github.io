:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gskb'
.. highlight: bash

bioconductor-gskb
=================

.. conda:recipe:: bioconductor-gskb
   :replaces_section_title:

   Gene Set Knowledgebase \(GSKB\) is a comprehensive knowledgebase for pathway analysis in mouse. Interpretation of high\-throughput genomics data based on biological pathways constitutes a constant challenge\, partly because of the lack of supporting pathway database. We created a functional genomics knowledgebase in mouse\, which includes 33\,261 pathways and gene sets compiled from 40 sources such as Gene Ontology\, KEGG\, GeneSetDB\, PANTHER\, microRNA and transcription factor target genes\, etc.  In addition\, we also manually collected and curated 8\,747 lists of differentially expressed genes from 2\,526 published gene expression studies to enable the detection of similarity to previously reported gene expression signatures. These two types of data constitute a comprehensive Gene Set Knowledgebase \(GSKB\)\, which can be readily used by various pathway analysis software such as gene set enrichment analysis \(GSEA\). As a first step\, we gathered annotation information from 40 existing databases for mouse\-related gene sets. These gene sets are divided into 7 categories\, namely\, Gene Ontology\, Curated pathways\, Metabolic Pathways\, Transcription Factor \(TF\) and microRNA target genes\, location \(cytogenetics band\)\, and others. We used information in GeneSetDB for some of the databases. Detailed information on these 40 sources and the citations is available http\:\/\/ge\-lab.org\/gskb\/Table\%201\-sources.pdf . The gene lists from literature were retrieved manually from individual gene expression studies through a process similar to the one used to create AraPath\, a similar resource for Arabidopsis\[12\]. As most expression studies upload raw data to repositories like GEO and ArrayExpress\, we used the meta\-data in these databases to search for publications. We scanned all datasets we can found and retrieved 4\,313 potentially useful papers reporting gene expression studies in mouse. These papers were individually read by curators to identify lists of differentially expressed genes in various conditions. We compiled a total of 8\,747 lists of differently expressed genes from 2\,518 of papers. Each gene list was annotated with a unique name\, brief description\, and publication information\, similar to the protocol used in MSigDB and Arapath.  These gene lists constitute a large collection of published gene expression signatures that form a foundation for interpret new gene lists and expression profiles. More information about this data is available here http\:\/\/ge\-lab.org\/gskb\/. There is also a paper describing these data are currently in revision by Database\: The Journal of Biological Databases and Curation.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/gskb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gskb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gskb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gskb/meta.yaml>`_

   


.. conda:package:: bioconductor-gskb

   |downloads_bioconductor-gskb| |docker_bioconductor-gskb|

   :versions: 1.14.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gskb

   and update with::

      conda update bioconductor-gskb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gskb:<tag>

   (see `bioconductor-gskb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gskb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gskb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gskb| image:: https://quay.io/repository/biocontainers/bioconductor-gskb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gskb
.. _`bioconductor-gskb/tags`: https://quay.io/repository/biocontainers/bioconductor-gskb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gskb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gskb/README.html
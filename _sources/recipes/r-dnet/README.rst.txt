:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dnet'
.. highlight: bash

r-dnet
======

.. conda:recipe:: r-dnet
   :replaces_section_title:
   :noindex:

   The focus of the dnet by Fang and Gough \(2014\) \<doi\:10.1186\/s13073\-014\-0064\-8\> is to make sense of omics data \(such as gene expression and mutations\) from different angles including\: integration with molecular networks\, enrichments using ontologies\, and relevance to gene evolutionary ages. Integration is achieved to identify a gene subnetwork from the whole gene network whose nodes\/genes are labelled with informative data \(such as the significant levels of differential expression or survival risks\). To help make sense of identified gene networks\, enrichment analysis is also supported using a wide variety of pre\-compiled ontologies and phylostratific gene age information in major organisms including\: human\, mouse\, rat\, chicken\, C.elegans\, fruit fly\, zebrafish and arabidopsis. Add\-on functionalities are supports for calculating semantic similarity between ontology terms \(and between genes\) and for calculating network affinity based on random walk\; both can be done via high\-performance parallel computing.

   :homepage: http://dnet.r-forge.r-project.org, https://github.com/hfang-bristol/dnet
   :license: GPL2 / GPL-2
   :recipe: /`r-dnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dnet/meta.yaml>`_

   


.. conda:package:: r-dnet

   |downloads_r-dnet| |docker_r-dnet|

   :versions:
      
      

      ``1.1.7-3``,  ``1.1.7-2``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends bioconductor-graph: 
   :depends bioconductor-rgraphviz: 
   :depends bioconductor-suprahex: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-dnet

   and update with::

      conda update r-dnet

   or use the docker container::

      docker pull quay.io/biocontainers/r-dnet:<tag>

   (see `r-dnet/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dnet| image:: https://img.shields.io/conda/dn/bioconda/r-dnet.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dnet
   :alt:   (downloads)
.. |docker_r-dnet| image:: https://quay.io/repository/biocontainers/r-dnet/status
   :target: https://quay.io/repository/biocontainers/r-dnet
.. _`r-dnet/tags`: https://quay.io/repository/biocontainers/r-dnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dnet/README.html
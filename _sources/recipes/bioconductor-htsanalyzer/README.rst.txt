:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htsanalyzer'
.. highlight: bash

bioconductor-htsanalyzer
========================

.. conda:recipe:: bioconductor-htsanalyzer
   :replaces_section_title:

   This package provides classes and methods for gene set over\-representation\, enrichment and network analyses on high\-throughput screens. The over\-representation analysis is performed based on hypergeometric tests. The enrichment analysis is based on the GSEA algorithm \(Subramanian et al. PNAS 2005\). The network analysis identifies enriched subnetworks based on algorithms from the BioNet package \(Beisser et al.\, Bioinformatics 2010\). A pipeline is also specifically designed for cellHTS2 object to perform integrative network analyses of high\-throughput RNA interference screens. The users can build their own analysis pipeline for their own data set based on this package.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/HTSanalyzeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htsanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htsanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htsanalyzer/meta.yaml>`_

   


.. conda:package:: bioconductor-htsanalyzer

   |downloads_bioconductor-htsanalyzer| |docker_bioconductor-htsanalyzer|

   :versions: 2.34.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-bionet: >=1.42.0,<1.43.0
   :depends bioconductor-cellhts2: >=2.46.0,<2.47.0
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   :depends bioconductor-rankprod: >=3.8.0,<3.9.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htsanalyzer

   and update with::

      conda update bioconductor-htsanalyzer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-htsanalyzer:<tag>

   (see `bioconductor-htsanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-htsanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htsanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htsanalyzer
   :alt:   (downloads)
.. |docker_bioconductor-htsanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-htsanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htsanalyzer
.. _`bioconductor-htsanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-htsanalyzer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htsanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htsanalyzer/README.html
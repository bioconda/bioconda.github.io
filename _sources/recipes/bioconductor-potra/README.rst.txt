:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-potra'
.. highlight: bash

bioconductor-potra
==================

.. conda:recipe:: bioconductor-potra
   :replaces_section_title:

   PoTRA\: Pathways of Topological Rank Analysis

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/PoTRA.html
   :license: LGPL
   :recipe: /`bioconductor-potra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-potra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-potra/meta.yaml>`_

   The PoTRA analysis is based on topological ranks of genes in biological pathways. PoTRA can be used to detect pathways involved in disease \(Li\, Liu \& Dinu\, 2018\). We use PageRank to measure the relative topological ranks of genes in each biological pathway\, then select hub genes for each pathway\, and use Fishers Exact test to determine if the number of hub genes in each pathway is altered from normal to cancer \(Li\, Liu \& Dinu\, 2018\). Alternatively\, if the distribution of topological ranks of gene in a pathway is altered between normal and cancer\, this pathway might also be involved in cancer \(Li\, Liu \& Dinu\, 2018\). Hence\, we use the Kolmogorov–Smirnov test to detect pathways that have an altered distribution of topological ranks of genes between two phenotypes \(Li\, Liu \& Dinu\, 2018\). PoTRA can be used with the KEGG\, Biocarta\, Reactome\, NCI\, SMPDB and PharmGKB databases from the devel graphite library.


.. conda:package:: bioconductor-potra

   |downloads_bioconductor-potra| |docker_bioconductor-potra|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends bioconductor-graphite: >=1.32.0,<1.33.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-potra

   and update with::

      conda update bioconductor-potra

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-potra:<tag>

   (see `bioconductor-potra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-potra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-potra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-potra
   :alt:   (downloads)
.. |docker_bioconductor-potra| image:: https://quay.io/repository/biocontainers/bioconductor-potra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-potra
.. _`bioconductor-potra/tags`: https://quay.io/repository/biocontainers/bioconductor-potra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-potra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-potra/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gapgom'
.. highlight: bash

bioconductor-gapgom
===================

.. conda:recipe:: bioconductor-gapgom
   :replaces_section_title:
   :noindex:

   GAPGOM \(novel Gene Annotation Prediction and other GO Metrics\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/GAPGOM.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gapgom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gapgom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gapgom/meta.yaml>`_

   Collection of various measures and tools for lncRNA annotation prediction put inside a redistributable R package. The package contains two main algorithms\; lncRNA2GOA and TopoICSim. lncRNA2GOA tries to annotate novel genes \(in this specific case lncRNAs\) by using various correlation\/geometric scoring methods on correlated expression data. After correlating\/scoring\, the results are annotated and enriched. TopoICSim is a topologically based method\, that compares gene similarity based on the topology of the GO DAG by information content \(IC\) between GO terms.


.. conda:package:: bioconductor-gapgom

   |downloads_bioconductor-gapgom| |docker_bioconductor-gapgom|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-geoquery: ``>=2.58.0,<2.59.0``
   :depends bioconductor-go.db: ``>=3.12.1,<3.13.0``
   :depends bioconductor-gosemsim: ``>=2.16.0,<2.17.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-rbgl: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-fastmatch: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gapgom

   and update with::

      conda update bioconductor-gapgom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gapgom:<tag>

   (see `bioconductor-gapgom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gapgom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gapgom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gapgom
   :alt:   (downloads)
.. |docker_bioconductor-gapgom| image:: https://quay.io/repository/biocontainers/bioconductor-gapgom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gapgom
.. _`bioconductor-gapgom/tags`: https://quay.io/repository/biocontainers/bioconductor-gapgom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gapgom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gapgom/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inpas'
.. highlight: bash

bioconductor-inpas
==================

.. conda:recipe:: bioconductor-inpas
   :replaces_section_title:
   :noindex:

   InPAS\: a bioconductor package for the identification of novel alternative PolyAdenylation Sites \(PAS\) using RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/InPAS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-inpas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpas/meta.yaml>`_

   Alternative polyadenylation \(APA\) is one of the important post\-transcriptional regulation mechanisms which occurs in most human genes. InPAS facilitates the discovery of novel APA sites and the differential usage of APA sites from RNA\-Seq data. It leverages cleanUpdTSeq to fine tune identified APA sites by removing false sites due to internal\-priming.


.. conda:package:: bioconductor-inpas

   |downloads_bioconductor-inpas| |docker_bioconductor-inpas|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.3-0``,  ``1.14.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-bsgenome: ``>=1.56.0,<1.57.0``
   :depends bioconductor-cleanupdtseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicfeatures: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-gviz: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-preprocesscore: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-depmixs4: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inpas

   and update with::

      conda update bioconductor-inpas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inpas:<tag>

   (see `bioconductor-inpas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inpas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inpas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inpas
   :alt:   (downloads)
.. |docker_bioconductor-inpas| image:: https://quay.io/repository/biocontainers/bioconductor-inpas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inpas
.. _`bioconductor-inpas/tags`: https://quay.io/repository/biocontainers/bioconductor-inpas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inpas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inpas/README.html
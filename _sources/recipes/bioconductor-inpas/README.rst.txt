:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inpas'
.. highlight: bash

bioconductor-inpas
==================

.. conda:recipe:: bioconductor-inpas
   :replaces_section_title:

   Alternative polyadenylation \(APA\) is one of the important post\-transcriptional regulation mechanisms which occurs in most human genes. InPAS facilitates the discovery of novel APA sites from RNAseq data. It leverages cleanUpdTSeq to fine tune identified APA sites.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/InPAS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-inpas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpas/meta.yaml>`_

   


.. conda:package:: bioconductor-inpas

   |downloads_bioconductor-inpas| |docker_bioconductor-inpas|

   :versions: 1.14.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-cleanupdtseq: >=1.20.0,<1.21.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-gviz: >=1.26.0,<1.27.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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
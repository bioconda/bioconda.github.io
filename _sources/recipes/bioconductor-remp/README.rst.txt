:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-remp'
.. highlight: bash

bioconductor-remp
=================

.. conda:recipe:: bioconductor-remp
   :replaces_section_title:

   Machine learning\-based tools to predict DNA methylation of locus\-specific repetitive elements \(RE\) by learning surrounding genetic and epigenetic information. These tools provide genomewide and single\-base resolution of DNA methylation prediction on RE that are difficult to measure using array\-based or sequencing\-based platforms\, which enables epigenome\-wide association study \(EWAS\) and differentially methylated region \(DMR\) analysis on RE.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/REMP.html
   :license: GPL-3
   :recipe: /`bioconductor-remp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-remp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-remp/meta.yaml>`_

   


.. conda:package:: bioconductor-remp

   |downloads_bioconductor-remp| |docker_bioconductor-remp|

   :versions: 1.8.1-1
   
   :depends bioconductor-annotationhub: >=2.16.0,<2.17.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-bsgenome: >=1.52.0,<1.53.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: >=0.6.0,<0.7.0
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: >=0.6.0,<0.7.0
   :depends bioconductor-impute: >=1.58.0,<1.59.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-minfi: >=1.30.0,<1.31.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-kernlab: 
   :depends r-ranger: 
   :depends r-settings: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-remp

   and update with::

      conda update bioconductor-remp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-remp:<tag>

   (see `bioconductor-remp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-remp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-remp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-remp
   :alt:   (downloads)
.. |docker_bioconductor-remp| image:: https://quay.io/repository/biocontainers/bioconductor-remp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-remp
.. _`bioconductor-remp/tags`: https://quay.io/repository/biocontainers/bioconductor-remp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-remp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-remp/README.html
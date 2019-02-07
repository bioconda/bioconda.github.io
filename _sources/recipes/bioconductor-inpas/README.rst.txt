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

   :versions: 1.14.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-cleanupdtseq` >=1.20.0,<1.21.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-depmixs4`  :conda:package:`r-seqinr`  

   :required~by: |required_by_bioconductor-inpas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inpas

   and update with::

      conda update bioconductor-inpas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-inpas


.. |required_by_bioconductor-inpas| conda:required_by:: bioconductor-inpas
.. |downloads_bioconductor-inpas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inpas.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-inpas| image:: https://quay.io/repository/biocontainers/bioconductor-inpas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inpas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inpas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inpas/README.html


.. title:: Package Recipe 'bioconductor-coseq'
.. highlight: bash


bioconductor-coseq
==================

.. conda:recipe:: bioconductor-coseq
   :replaces_section_title:

   Co\-expression analysis for expression profiles arising from high\-throughput sequencing data. Feature \(e.g.\, gene\) profiles are clustered using adapted transformations and mixture models or a K\-means algorithm\, and model selection criteria \(to choose an appropriate number of clusters\) are provided.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/coseq.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-coseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq/meta.yaml>`_

   


.. conda:package:: bioconductor-coseq

   |downloads_bioconductor-coseq| |docker_bioconductor-coseq|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-htsfilter` >=1.22.0,<1.23.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-capushe`  :conda:package:`r-compositions`  :conda:package:`r-corrplot`  :conda:package:`r-e1071`  :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-htscluster` >=2.0.8 :conda:package:`r-mvtnorm`  :conda:package:`r-rmixmod`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-coseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coseq

   and update with::

      conda update bioconductor-coseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-coseq


.. |required_by_bioconductor-coseq| conda:required_by:: bioconductor-coseq
.. |downloads_bioconductor-coseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-coseq| image:: https://quay.io/repository/biocontainers/bioconductor-coseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coseq/README.html


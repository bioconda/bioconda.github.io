.. title:: Package Recipe 'bcbio-rnaseq'
.. highlight: bash


bcbio-rnaseq
============

.. conda:recipe:: bcbio-rnaseq
   :replaces_section_title:

   Report generation for bcbio\-nextgen RNA\-seq runs

   :homepage: https://github.com/roryk/bcbio.rnaseq
   :license: MIT
   :recipe: /`bcbio-rnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-rnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-rnaseq/meta.yaml>`_

   


.. conda:package:: bcbio-rnaseq

   |downloads_bcbio-rnaseq| |docker_bcbio-rnaseq|

   :versions: 1.2.0, 1.1.1, 1.0.4, 1.0.3

   :depends: :conda:package:`bioconductor-biomart`  :conda:package:`bioconductor-clusterprofiler`  :conda:package:`bioconductor-deseq2`  :conda:package:`bioconductor-vsn`  :conda:package:`java-jdk`  :conda:package:`java-jdk`  :conda:package:`r` 3.2.2* :conda:package:`r-chbutils`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-hexbin`  :conda:package:`r-knitr`  :conda:package:`r-matrixstats`  :conda:package:`r-pheatmap`  :conda:package:`r-quantreg`  :conda:package:`r-readr`  :conda:package:`r-rmarkdown`  :conda:package:`r-stringr`  :conda:package:`r-tximport`  

   :required~by: |required_by_bcbio-rnaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-rnaseq

   and update with::

      conda update bcbio-rnaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbio-rnaseq


.. |required_by_bcbio-rnaseq| conda:required_by:: bcbio-rnaseq
.. |downloads_bcbio-rnaseq| image:: https://img.shields.io/conda/dn/bioconda/bcbio-rnaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbio-rnaseq| image:: https://quay.io/repository/biocontainers/bcbio-rnaseq/status
   :target: https://quay.io/repository/biocontainers/bcbio-rnaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-rnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-rnaseq/README.html


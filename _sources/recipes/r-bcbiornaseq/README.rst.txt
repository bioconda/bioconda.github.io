.. title:: Package Recipe 'r-bcbiornaseq'
.. highlight: bash


r-bcbiornaseq
=============

.. conda:recipe:: r-bcbiornaseq
   :replaces_section_title:

   Quality control and differential expression for bcbio RNA\-seq experiments.

   :homepage: https://github.com/hbc/bcbioRNASeq
   :license: MIT
   :recipe: /`r-bcbiornaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq/meta.yaml>`_

   


.. conda:package:: r-bcbiornaseq

   |downloads_r-bcbiornaseq| |docker_r-bcbiornaseq|

   :versions: 0.2.8, 0.2.7, 0.2.4, 0.2.4a, 0.2.3a, 0.1.2

   :depends: :conda:package:`bioconductor-degreport`  :conda:package:`bioconductor-deseq2`  :conda:package:`bioconductor-edger`  :conda:package:`bioconductor-summarizedexperiment`  :conda:package:`bioconductor-tximport`  :conda:package:`bioconductor-vsn`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bcbiobase`  :conda:package:`r-ggrepel`  :conda:package:`r-pbapply`  :conda:package:`r-rmarkdown`  :conda:package:`r-tidyverse`  

   :required~by: |required_by_r-bcbiornaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiornaseq

   and update with::

      conda update r-bcbiornaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bcbiornaseq


.. |required_by_r-bcbiornaseq| conda:required_by:: r-bcbiornaseq
.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html


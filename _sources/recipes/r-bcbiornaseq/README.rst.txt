:orphan:  .. only available via index, not via toctree

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

   :versions: 0.2.9-0, 0.2.8-0, 0.2.7-0, 0.2.4-0, 0.2.4a-0, 0.2.3a-0, 0.1.2-0
   
   :depends bioconductor-degreport: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-edger: 
   :depends bioconductor-genomeinfodbdata: 
   :depends bioconductor-summarizedexperiment: 
   :depends bioconductor-tximport: 
   :depends bioconductor-vsn: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bcbiobase: 
   :depends r-ggrepel: 
   :depends r-hexbin: 
   :depends r-pbapply: 
   :depends r-rmarkdown: 
   :depends r-tidyverse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiornaseq

   and update with::

      conda update r-bcbiornaseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiornaseq:<tag>

   (see `r-bcbiornaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiornaseq
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq
.. _`r-bcbiornaseq/tags`: https://quay.io/repository/biocontainers/r-bcbiornaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html
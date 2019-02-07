.. title:: Package Recipe 'bioconductor-ebseq'
.. highlight: bash


bioconductor-ebseq
==================

.. conda:recipe:: bioconductor-ebseq
   :replaces_section_title:

   Differential Expression analysis at both gene and isoform level using RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/EBSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ebseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebseq/meta.yaml>`_
   :links: biotools: :biotools:`ebseq`, doi: :doi:`10.1093/bioinformatics/btt087`

   


.. conda:package:: bioconductor-ebseq

   |downloads_bioconductor-ebseq| |docker_bioconductor-ebseq|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-blockmodeling`  :conda:package:`r-gplots`  :conda:package:`r-testthat`  

   :required~by: |required_by_bioconductor-ebseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ebseq

   and update with::

      conda update bioconductor-ebseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ebseq


.. |required_by_bioconductor-ebseq| conda:required_by:: bioconductor-ebseq
.. |downloads_bioconductor-ebseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ebseq| image:: https://quay.io/repository/biocontainers/bioconductor-ebseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebseq/README.html


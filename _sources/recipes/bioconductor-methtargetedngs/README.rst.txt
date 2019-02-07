.. title:: Package Recipe 'bioconductor-methtargetedngs'
.. highlight: bash


bioconductor-methtargetedngs
============================

.. conda:recipe:: bioconductor-methtargetedngs
   :replaces_section_title:

   Perform step by step methylation analysis of Next Generation Sequencing data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MethTargetedNGS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methtargetedngs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methtargetedngs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methtargetedngs/meta.yaml>`_
   :links: biotools: :biotools:`methtargetedngs`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-methtargetedngs

   |downloads_bioconductor-methtargetedngs| |docker_bioconductor-methtargetedngs|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-seqinr`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-methtargetedngs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methtargetedngs

   and update with::

      conda update bioconductor-methtargetedngs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methtargetedngs


.. |required_by_bioconductor-methtargetedngs| conda:required_by:: bioconductor-methtargetedngs
.. |downloads_bioconductor-methtargetedngs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methtargetedngs.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methtargetedngs| image:: https://quay.io/repository/biocontainers/bioconductor-methtargetedngs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methtargetedngs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methtargetedngs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methtargetedngs/README.html


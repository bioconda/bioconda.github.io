.. title:: Package Recipe 'bioconductor-crisprseekplus'
.. highlight: bash


bioconductor-crisprseekplus
===========================

.. conda:recipe:: bioconductor-crisprseekplus
   :replaces_section_title:

   Bioinformatics platform containing interface to work with offTargetAnalysis and compare2Sequences in the CRISPRseek package\, and GUIDEseqAnalysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/crisprseekplus.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-crisprseekplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseekplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprseekplus/meta.yaml>`_
   :links: biotools: :biotools:`crisprseekplus`, doi: :doi:`10.1371/journal.pone.0108424`

   


.. conda:package:: bioconductor-crisprseekplus

   |downloads_bioconductor-crisprseekplus| |docker_bioconductor-crisprseekplus|

   :versions: 1.8.0, 1.6.0, 1.4.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-crisprseek` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-guideseq` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-dt`  :conda:package:`r-hash`  :conda:package:`r-shiny`  :conda:package:`r-shinyjs`  

   :required~by: |required_by_bioconductor-crisprseekplus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprseekplus

   and update with::

      conda update bioconductor-crisprseekplus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-crisprseekplus


.. |required_by_bioconductor-crisprseekplus| conda:required_by:: bioconductor-crisprseekplus
.. |downloads_bioconductor-crisprseekplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprseekplus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-crisprseekplus| image:: https://quay.io/repository/biocontainers/bioconductor-crisprseekplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprseekplus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprseekplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprseekplus/README.html


.. title:: Package Recipe 'bioconductor-traser'
.. highlight: bash


bioconductor-traser
===================

.. conda:recipe:: bioconductor-traser
   :replaces_section_title:

   traseR performs GWAS trait\-associated SNP enrichment analyses in genomic intervals using different hypothesis testing approaches\, also provides various functionalities to explore and visualize the results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/traseR.html
   :license: GPL
   :recipe: /`bioconductor-traser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traser/meta.yaml>`_
   :links: biotools: :biotools:`traser`, doi: :doi:`10.1093/bioinformatics/btv741`

   


.. conda:package:: bioconductor-traser

   |downloads_bioconductor-traser| |docker_bioconductor-traser|

   :versions: 1.12.0, 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-traser|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-traser

   and update with::

      conda update bioconductor-traser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-traser


.. |required_by_bioconductor-traser| conda:required_by:: bioconductor-traser
.. |downloads_bioconductor-traser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-traser.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-traser| image:: https://quay.io/repository/biocontainers/bioconductor-traser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-traser







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-traser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-traser/README.html


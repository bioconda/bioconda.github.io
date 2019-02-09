.. title:: Package Recipe 'bioconductor-abaenrichment'
.. highlight: bash


bioconductor-abaenrichment
==========================

.. conda:recipe:: bioconductor-abaenrichment
   :replaces_section_title:

   The package ABAEnrichment is designed to test for enrichment of user defined candidate genes in the set of expressed genes in different human brain regions. The core function \'aba\_enrich\' integrates the expression of the candidate gene set \(averaged across donors\) and the structural information of the brain using an ontology\, both provided by the Allen Brain Atlas project. \'aba\_enrich\' interfaces the ontology enrichment software FUNC to perform the statistical analyses. Additional functions provided in this package like \'get\_expression\' and \'plot\_expression\' facilitate exploring the expression data\, and besides the standard candidate vs. background gene set enrichment\, also three additional tests are implemented\, e.g. for cases when genes are ranked instead of divided into candidate and background.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ABAEnrichment.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-abaenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abaenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-abaenrichment/meta.yaml>`_
   :links: biotools: :biotools:`abaenrichment`

   


.. conda:package:: bioconductor-abaenrichment

   |downloads_bioconductor-abaenrichment| |docker_bioconductor-abaenrichment|

   :versions: 1.12.0, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-abadata` >=1.12.0,<1.13.0 :conda:package:`bioconductor-gofuncr` >=1.2.0,<1.3.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table` >=1.10.4 :conda:package:`r-gplots` >=2.14.2 :conda:package:`r-gtools` >=3.5.0 :conda:package:`r-rcpp` >=0.11.5 

   :required~by: |required_by_bioconductor-abaenrichment|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-abaenrichment

   and update with::

      conda update bioconductor-abaenrichment

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-abaenrichment


.. |required_by_bioconductor-abaenrichment| conda:required_by:: bioconductor-abaenrichment
.. |downloads_bioconductor-abaenrichment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-abaenrichment.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-abaenrichment| image:: https://quay.io/repository/biocontainers/bioconductor-abaenrichment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-abaenrichment







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-abaenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-abaenrichment/README.html


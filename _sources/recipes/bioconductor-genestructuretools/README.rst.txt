.. title:: Package Recipe 'bioconductor-genestructuretools'
.. highlight: bash


bioconductor-genestructuretools
===============================

.. conda:recipe:: bioconductor-genestructuretools
   :replaces_section_title:

   GeneStructureTools can be used to create in silico alternative splicing events\, and analyse potential effects this has on functional gene products.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GeneStructureTools.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-genestructuretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genestructuretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genestructuretools/meta.yaml>`_

   


.. conda:package:: bioconductor-genestructuretools

   |downloads_bioconductor-genestructuretools| |docker_bioconductor-genestructuretools|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome.mmusculus.ucsc.mm10` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-plyr`  :conda:package:`r-stringdist`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-genestructuretools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genestructuretools

   and update with::

      conda update bioconductor-genestructuretools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genestructuretools


.. |required_by_bioconductor-genestructuretools| conda:required_by:: bioconductor-genestructuretools
.. |downloads_bioconductor-genestructuretools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genestructuretools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genestructuretools| image:: https://quay.io/repository/biocontainers/bioconductor-genestructuretools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genestructuretools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genestructuretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genestructuretools/README.html


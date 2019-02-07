.. title:: Package Recipe 'bioconductor-mbased'
.. highlight: bash


bioconductor-mbased
===================

.. conda:recipe:: bioconductor-mbased
   :replaces_section_title:

   The package implements MBASED algorithm for detecting allele\-specific gene expression from RNA count data\, where allele counts at individual loci \(SNVs\) are integrated into a gene\-specific measure of ASE\, and utilizes simulations to appropriately assess the statistical significance of observed ASE.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MBASED.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mbased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbased/meta.yaml>`_
   :links: biotools: :biotools:`mbased`, doi: :doi:`10.1186/s13059-014-0405-3`

   


.. conda:package:: bioconductor-mbased

   |downloads_bioconductor-mbased| |docker_bioconductor-mbased|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-runit`  

   :required~by: |required_by_bioconductor-mbased|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbased

   and update with::

      conda update bioconductor-mbased

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mbased


.. |required_by_bioconductor-mbased| conda:required_by:: bioconductor-mbased
.. |downloads_bioconductor-mbased| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbased.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mbased| image:: https://quay.io/repository/biocontainers/bioconductor-mbased/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbased







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbased/README.html


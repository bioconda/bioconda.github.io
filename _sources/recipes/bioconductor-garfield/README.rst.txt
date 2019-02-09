.. title:: Package Recipe 'bioconductor-garfield'
.. highlight: bash


bioconductor-garfield
=====================

.. conda:recipe:: bioconductor-garfield
   :replaces_section_title:

   GARFIELD is a non\-parametric functional enrichment analysis approach described in the paper GARFIELD\: GWAS analysis of regulatory or functional information enrichment with LD correction. Briefly\, it is a method that leverages GWAS findings with regulatory or functional annotations \(primarily from ENCODE and Roadmap epigenomics data\) to find features relevant to a phenotype of interest. It performs greedy pruning of GWAS SNPs \(LD r2 \> 0.1\) and then annotates them based on functional information overlap. Next\, it quantifies Fold Enrichment \(FE\) at various GWAS significance cutoffs and assesses them by permutation testing\, while matching for minor allele frequency\, distance to nearest transcription start site and number of LD proxies \(r2 \> 0.8\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/garfield.html
   :license: GPL-3
   :recipe: /`bioconductor-garfield <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-garfield>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-garfield/meta.yaml>`_

   


.. conda:package:: bioconductor-garfield

   |downloads_bioconductor-garfield| |docker_bioconductor-garfield|

   :versions: 1.10.0

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-garfield|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-garfield

   and update with::

      conda update bioconductor-garfield

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-garfield


.. |required_by_bioconductor-garfield| conda:required_by:: bioconductor-garfield
.. |downloads_bioconductor-garfield| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-garfield.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-garfield| image:: https://quay.io/repository/biocontainers/bioconductor-garfield/status
   :target: https://quay.io/repository/biocontainers/bioconductor-garfield







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-garfield/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-garfield/README.html


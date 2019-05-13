:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qusage'
.. highlight: bash

bioconductor-qusage
===================

.. conda:recipe:: bioconductor-qusage
   :replaces_section_title:

   This package is an implementation the Quantitative Set Analysis for Gene Expression \(QuSAGE\) method described in \(Yaari G. et al\, Nucl Acids Res\, 2013\). This is a novel Gene Set Enrichment\-type test\, which is designed to provide a faster\, more accurate\, and easier to understand test for gene expression studies. qusage accounts for inter\-gene correlations using the Variance Inflation Factor technique proposed by Wu et al. \(Nucleic Acids Res\, 2012\). In addition\, rather than simply evaluating the deviation from a null hypothesis with a single number \(a P value\)\, qusage quantifies gene set activity with a complete probability density function \(PDF\). From this PDF\, P values and confidence intervals can be easily extracted. Preserving the PDF also allows for post\-hoc analysis \(e.g.\, pair\-wise comparisons of gene set activity\) while maintaining statistical traceability. Finally\, while qusage is compatible with individual gene statistics from existing methods \(e.g.\, LIMMA\)\, a Welch\-based method is implemented that is shown to improve specificity. For questions\, contact Chris Bolen \(cbolen1\@gmail.com\) or Steven Kleinstein \(steven.kleinstein\@yale.edu\)

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/qusage.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-qusage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qusage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qusage/meta.yaml>`_
   :links: biotools: :biotools:`qusage`

   


.. conda:package:: bioconductor-qusage

   |downloads_bioconductor-qusage| |docker_bioconductor-qusage|

   :versions: 2.16.1-0, 2.16.0-0, 2.14.0-0, 2.12.0-0, 2.10.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lsmeans: 
   :depends r-nlme: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qusage

   and update with::

      conda update bioconductor-qusage

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qusage:<tag>

   (see `bioconductor-qusage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qusage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qusage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qusage
   :alt:   (downloads)
.. |docker_bioconductor-qusage| image:: https://quay.io/repository/biocontainers/bioconductor-qusage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qusage
.. _`bioconductor-qusage/tags`: https://quay.io/repository/biocontainers/bioconductor-qusage?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qusage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qusage/README.html
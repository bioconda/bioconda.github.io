.. title:: Package Recipe 'bioconductor-signer'
.. highlight: bash


bioconductor-signer
===================

.. conda:recipe:: bioconductor-signer
   :replaces_section_title:

   The signeR package provides an empirical Bayesian approach to mutational signature discovery. It is designed to analyze single nucleotide variaton \(SNV\) counts in cancer genomes\, but can also be applied to other features as well. Functionalities to characterize signatures or genome samples according to exposure patterns are also provided.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/signeR.html
   :license: GPL-3
   :recipe: /`bioconductor-signer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer/meta.yaml>`_
   :links: biotools: :biotools:`signer`

   


.. conda:package:: bioconductor-signer

   |downloads_bioconductor-signer| |docker_bioconductor-signer|

   :versions: 1.8.0, 1.6.1, 1.4.0, 1.2.2, 1.0.1

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-class`  :conda:package:`r-nloptr`  :conda:package:`r-nmf`  :conda:package:`r-pmcmr`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo` >=0.7.100 

   :required~by: |required_by_bioconductor-signer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-signer

   and update with::

      conda update bioconductor-signer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-signer


.. |required_by_bioconductor-signer| conda:required_by:: bioconductor-signer
.. |downloads_bioconductor-signer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-signer| image:: https://quay.io/repository/biocontainers/bioconductor-signer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signer/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-signer'
.. highlight: bash

bioconductor-signer
===================

.. conda:recipe:: bioconductor-signer
   :replaces_section_title:
   :noindex:

   Empirical Bayesian approach to mutational signature discovery

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/signeR.html
   :license: GPL-3
   :recipe: /`bioconductor-signer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-signer/meta.yaml>`_
   :links: biotools: :biotools:`signer`

   The signeR package provides an empirical Bayesian approach to mutational signature discovery. It is designed to analyze single nucleotide variaton \(SNV\) counts in cancer genomes\, but can also be applied to other features as well. Functionalities to characterize signatures or genome samples according to exposure patterns are also provided.


.. conda:package:: bioconductor-signer

   |downloads_bioconductor-signer| |docker_bioconductor-signer|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-variantannotation: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-class: 
   :depends r-nloptr: 
   :depends r-nmf: 
   :depends r-pmcmr: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: ``>=0.7.100``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-signer

   and update with::

      conda update bioconductor-signer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-signer:<tag>

   (see `bioconductor-signer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-signer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-signer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-signer
   :alt:   (downloads)
.. |docker_bioconductor-signer| image:: https://quay.io/repository/biocontainers/bioconductor-signer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-signer
.. _`bioconductor-signer/tags`: https://quay.io/repository/biocontainers/bioconductor-signer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-signer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-signer/README.html
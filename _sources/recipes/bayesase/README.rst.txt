:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bayesase'
.. highlight: bash

bayesase
========

.. conda:recipe:: bayesase
   :replaces_section_title:
   :noindex:

   Bayesian analysis of allele specific expression

   :homepage: https://github.com/McIntyre-Lab/BayesASE
   :license: MIT / MIT License
   :recipe: /`bayesase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayesase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bayesase/meta.yaml>`_

   Allelic imbalance \(AI\) occurs when alleles in a diploid individual are differentially expressed and indicates cis acting regulatory variation. What is the distribution of allelic effects in a natural population\? Are all alleles the same\? Are all alleles distinct\? Tests of allelic effect are performed by crossing individuals and comparing expression between alleles directly in the F1. However\, a crossing scheme that compares alleles pairwise is a prohibitive cost for more than a handful of alleles as the number of crosses is at least \(n2\-n\)\/2 where n is the number of alleles. We show here that a testcross design followed by a hypothesis test of AI between testcrosses can be used to infer differences between non\-tester alleles\, allowing n alleles to be compared with n crosses. Using a mouse dataset where both testcrosses and direct comparisons have been performed\, we show that \~75\% of the predicted differences between non\-tester alleles are validated in a background of \~10\% differences in AI. The testing for AI involves several complex bioinformatics steps. BASE is a complete bioinformatics pipeline that incorporates state\-of\-the\-art error reduction techniques and a flexible Bayesian approach to estimating AI and formally comparing levels of AI between conditions. In the mouse data\, the direct test identifies more cis effects than the testcross. Cis\-by\-trans interactions with trans\-acting factors on the X contributing to observed cis effects in autosomal genes in the direct cross remains a possible explanation for the discrepancy.


.. conda:package:: bayesase

   |downloads_bayesase| |docker_bayesase|

   :versions:
      
      

      ``21.1.7-0``

      

   
   :depends biopython: ``>=1.70``
   :depends importlib_resources: 
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.3``
   :depends python: ``>=3.6``
   :depends r-base: 
   :depends r-here: 
   :depends r-rstan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bayesase

   and update with::

      conda update bayesase

   or use the docker container::

      docker pull quay.io/biocontainers/bayesase:<tag>

   (see `bayesase/tags`_ for valid values for ``<tag>``)


.. |downloads_bayesase| image:: https://img.shields.io/conda/dn/bioconda/bayesase.svg?style=flat
   :target: https://anaconda.org/bioconda/bayesase
   :alt:   (downloads)
.. |docker_bayesase| image:: https://quay.io/repository/biocontainers/bayesase/status
   :target: https://quay.io/repository/biocontainers/bayesase
.. _`bayesase/tags`: https://quay.io/repository/biocontainers/bayesase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bayesase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bayesase/README.html
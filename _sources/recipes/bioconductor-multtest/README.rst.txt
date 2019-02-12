.. title:: Package Recipe 'bioconductor-multtest'
.. highlight: bash


bioconductor-multtest
=====================

.. conda:recipe:: bioconductor-multtest
   :replaces_section_title:

   Non\-parametric bootstrap and permutation resampling\-based multiple testing procedures \(including empirical Bayes methods\) for controlling the family\-wise error rate \(FWER\)\, generalized family\-wise error rate \(gFWER\)\, tail probability of the proportion of false positives \(TPPFP\)\, and false discovery rate \(FDR\).  Several choices of bootstrap\-based null distribution are implemented \(centered\, centered and scaled\, quantile\-transformed\). Single\-step and step\-wise methods are available. Tests based on a variety of t\- and F\-statistics \(including t\-statistics based on regression parameters from linear and survival models as well as those based on correlation parameters\) are included.  When probing hypotheses with t\-statistics\, users may also select a potentially faster null distribution which is multivariate normal with mean zero and variance covariance matrix derived from the vector influence function.  Results are reported in terms of adjusted p\-values\, confidence regions and test statistic cutoffs. The procedures are directly applicable to identifying differentially expressed genes in DNA microarray experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/multtest.html
   :license: LGPL
   :recipe: /`bioconductor-multtest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multtest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multtest/meta.yaml>`_
   :links: biotools: :biotools:`multtest`, doi: :doi:`10.1007/0-387-29362-0_15`

   


.. conda:package:: bioconductor-multtest

   |downloads_bioconductor-multtest| |docker_bioconductor-multtest|

   :versions: 2.38.0, 2.36.0, 2.34.0, 2.32.0, 2.28.0, 2.26.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-multtest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multtest

   and update with::

      conda update bioconductor-multtest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-multtest


.. |required_by_bioconductor-multtest| conda:required_by:: bioconductor-multtest
.. |downloads_bioconductor-multtest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multtest.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-multtest| image:: https://quay.io/repository/biocontainers/bioconductor-multtest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multtest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multtest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multtest/README.html


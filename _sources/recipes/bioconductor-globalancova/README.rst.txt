.. title:: Package Recipe 'bioconductor-globalancova'
.. highlight: bash


bioconductor-globalancova
=========================

.. conda:recipe:: bioconductor-globalancova
   :replaces_section_title:

   The association between a variable of interest \(e.g. two groups\) and the global pattern of a group of variables \(e.g. a gene set\) is tested via a global F\-test. We give the following arguments in support of the GlobalAncova approach\: After appropriate normalisation\, gene\-expression\-data appear rather symmetrical and outliers are no real problem\, so least squares should be rather robust. ANCOVA with interaction yields saturated data modelling e.g. different means per group and gene. Covariate adjustment can help to correct for possible selection bias. Variance homogeneity and uncorrelated residuals cannot be expected. Application of ordinary least squares gives unbiased\, but no longer optimal estimates \(Gauss\-Markov\-Aitken\). Therefore\, using the classical F\-test is inappropriate\, due to correlation. The test statistic however mirrors deviations from the null hypothesis. In combination with a permutation approach\, empirical significance levels can be approximated. Alternatively\, an approximation yields asymptotic p\-values. The framework is generalized to groups of categorical variables or even mixed data by a likelihood ratio approach. Closed and hierarchical testing procedures are supported. This work was supported by the NGFN grant 01 GR 0459\, BMBF\, Germany and BMBF grant 01ZX1309B\, Germany.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GlobalAncova.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globalancova <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova/meta.yaml>`_
   :links: biotools: :biotools:`globalancova`, doi: :doi:`10.1093/bioinformatics/btm531`

   


.. conda:package:: bioconductor-globalancova

   |downloads_bioconductor-globalancova| |docker_bioconductor-globalancova|

   :versions: 4.0.0, 3.48.0, 3.46.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-globaltest` >=5.36.0,<5.37.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-corpcor`  :conda:package:`r-dendextend`  :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-globalancova|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-globalancova

   and update with::

      conda update bioconductor-globalancova

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-globalancova


.. |required_by_bioconductor-globalancova| conda:required_by:: bioconductor-globalancova
.. |downloads_bioconductor-globalancova| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globalancova.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-globalancova| image:: https://quay.io/repository/biocontainers/bioconductor-globalancova/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globalancova







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-globalancova/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-globalancova/README.html


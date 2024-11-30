:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globalancova'
.. highlight: bash

bioconductor-globalancova
=========================

.. conda:recipe:: bioconductor-globalancova
   :replaces_section_title:
   :noindex:

   Global test for groups of variables via model comparisons

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GlobalAncova.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globalancova <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova/meta.yaml>`_
   :links: biotools: :biotools:`globalancova`, doi: :doi:`10.1093/bioinformatics/btm531`

   The association between a variable of interest \(e.g. two groups\) and the global pattern of a group of variables \(e.g. a gene set\) is tested via a global F\-test. We give the following arguments in support of the GlobalAncova approach\: After appropriate normalisation\, gene\-expression\-data appear rather symmetrical and outliers are no real problem\, so least squares should be rather robust. ANCOVA with interaction yields saturated data modelling e.g. different means per group and gene. Covariate adjustment can help to correct for possible selection bias. Variance homogeneity and uncorrelated residuals cannot be expected. Application of ordinary least squares gives unbiased\, but no longer optimal estimates \(Gauss\-Markov\-Aitken\). Therefore\, using the classical F\-test is inappropriate\, due to correlation. The test statistic however mirrors deviations from the null hypothesis. In combination with a permutation approach\, empirical significance levels can be approximated. Alternatively\, an approximation yields asymptotic p\-values. The framework is generalized to groups of categorical variables or even mixed data by a likelihood ratio approach. Closed and hierarchical testing procedures are supported. This work was supported by the NGFN grant 01 GR 0459\, BMBF\, Germany and BMBF grant 01ZX1309B\, Germany.


.. conda:package:: bioconductor-globalancova

   |downloads_bioconductor-globalancova| |docker_bioconductor-globalancova|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.20.0-0</code>,  <code>4.18.0-0</code>,  <code>4.16.0-1</code>,  <code>4.16.0-0</code>,  <code>4.12.0-2</code>,  <code>4.12.0-1</code>,  <code>4.12.0-0</code>,  <code>4.10.0-0</code>,  <code>4.8.0-1</code>,  </span></summary>
      

      ``4.20.0-0``,  ``4.18.0-0``,  ``4.16.0-1``,  ``4.16.0-0``,  ``4.12.0-2``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.10.0-0``,  ``4.8.0-1``,  ``4.8.0-0``,  ``4.6.0-0``,  ``4.4.0-0``,  ``4.2.0-1``,  ``4.0.0-0``,  ``3.48.0-0``,  ``3.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-globaltest: ``>=5.56.0,<5.57.0``
   :depends bioconductor-globaltest: ``>=5.56.0,<5.57.0a0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-dendextend: 
   :depends r-vgam: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-globalancova

   and update with::

      mamba update bioconductor-globalancova

  To create a new environment, run::

      mamba create --name myenvname bioconductor-globalancova

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-globalancova:<tag>

   (see `bioconductor-globalancova/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-globalancova| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globalancova.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-globalancova
   :alt:   (downloads)
.. |docker_bioconductor-globalancova| image:: https://quay.io/repository/biocontainers/bioconductor-globalancova/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globalancova
.. _`bioconductor-globalancova/tags`: https://quay.io/repository/biocontainers/bioconductor-globalancova?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-globalancova";
        var versions = ["4.20.0","4.18.0","4.16.0","4.16.0","4.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-globalancova/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-globalancova/README.html
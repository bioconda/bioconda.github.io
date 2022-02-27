:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globalancova'
.. highlight: bash

bioconductor-globalancova
=========================

.. conda:recipe:: bioconductor-globalancova
   :replaces_section_title:
   :noindex:

   Global test for groups of variables via model comparisons

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GlobalAncova.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globalancova <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova/meta.yaml>`_
   :links: biotools: :biotools:`globalancova`, doi: :doi:`10.1093/bioinformatics/btm531`

   The association between a variable of interest \(e.g. two groups\) and the global pattern of a group of variables \(e.g. a gene set\) is tested via a global F\-test. We give the following arguments in support of the GlobalAncova approach\: After appropriate normalisation\, gene\-expression\-data appear rather symmetrical and outliers are no real problem\, so least squares should be rather robust. ANCOVA with interaction yields saturated data modelling e.g. different means per group and gene. Covariate adjustment can help to correct for possible selection bias. Variance homogeneity and uncorrelated residuals cannot be expected. Application of ordinary least squares gives unbiased\, but no longer optimal estimates \(Gauss\-Markov\-Aitken\). Therefore\, using the classical F\-test is inappropriate\, due to correlation. The test statistic however mirrors deviations from the null hypothesis. In combination with a permutation approach\, empirical significance levels can be approximated. Alternatively\, an approximation yields asymptotic p\-values. The framework is generalized to groups of categorical variables or even mixed data by a likelihood ratio approach. Closed and hierarchical testing procedures are supported. This work was supported by the NGFN grant 01 GR 0459\, BMBF\, Germany and BMBF grant 01ZX1309B\, Germany.


.. conda:package:: bioconductor-globalancova

   |downloads_bioconductor-globalancova| |docker_bioconductor-globalancova|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.12.0-1</code>,  <code>4.12.0-0</code>,  <code>4.10.0-0</code>,  <code>4.8.0-1</code>,  <code>4.8.0-0</code>,  <code>4.6.0-0</code>,  <code>4.4.0-0</code>,  <code>4.2.0-1</code>,  <code>4.0.0-0</code>,  </span></summary>
      

      ``4.12.0-1``,  ``4.12.0-0``,  ``4.10.0-0``,  ``4.8.0-1``,  ``4.8.0-0``,  ``4.6.0-0``,  ``4.4.0-0``,  ``4.2.0-1``,  ``4.0.0-0``,  ``3.48.0-0``,  ``3.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-globaltest: ``>=5.48.0,<5.49.0``
   :depends bioconductor-gseabase: ``>=1.56.0,<1.57.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corpcor: 
   :depends r-dendextend: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-globalancova

   and update with::

      conda update bioconductor-globalancova

   or use the docker container::

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
        var versions = ["4.12.0","4.12.0","4.10.0","4.8.0","4.8.0"];
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
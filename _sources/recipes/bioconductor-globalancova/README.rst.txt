:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globalancova'
.. highlight: bash

bioconductor-globalancova
=========================

.. conda:recipe:: bioconductor-globalancova
   :replaces_section_title:
   :noindex:

   Global test for groups of variables via model comparisons

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GlobalAncova.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globalancova <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globalancova/meta.yaml>`_
   :links: biotools: :biotools:`globalancova`, doi: :doi:`10.1093/bioinformatics/btm531`

   The association between a variable of interest \(e.g. two groups\) and the global pattern of a group of variables \(e.g. a gene set\) is tested via a global F\-test. We give the following arguments in support of the GlobalAncova approach\: After appropriate normalisation\, gene\-expression\-data appear rather symmetrical and outliers are no real problem\, so least squares should be rather robust. ANCOVA with interaction yields saturated data modelling e.g. different means per group and gene. Covariate adjustment can help to correct for possible selection bias. Variance homogeneity and uncorrelated residuals cannot be expected. Application of ordinary least squares gives unbiased\, but no longer optimal estimates \(Gauss\-Markov\-Aitken\). Therefore\, using the classical F\-test is inappropriate\, due to correlation. The test statistic however mirrors deviations from the null hypothesis. In combination with a permutation approach\, empirical significance levels can be approximated. Alternatively\, an approximation yields asymptotic p\-values. The framework is generalized to groups of categorical variables or even mixed data by a likelihood ratio approach. Closed and hierarchical testing procedures are supported. This work was supported by the NGFN grant 01 GR 0459\, BMBF\, Germany and BMBF grant 01ZX1309B\, Germany.


.. conda:package:: bioconductor-globalancova

   |downloads_bioconductor-globalancova| |docker_bioconductor-globalancova|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.28.0-0</code>,  <code>4.24.0-2</code>,  <code>4.24.0-1</code>,  <code>4.24.0-0</code>,  <code>4.20.0-0</code>,  <code>4.18.0-0</code>,  <code>4.16.0-1</code>,  <code>4.16.0-0</code>,  <code>4.12.0-2</code>,  </span></summary>
      

      ``4.28.0-0``,  ``4.24.0-2``,  ``4.24.0-1``,  ``4.24.0-0``,  ``4.20.0-0``,  ``4.18.0-0``,  ``4.16.0-1``,  ``4.16.0-0``,  ``4.12.0-2``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.10.0-0``,  ``4.8.0-1``,  ``4.8.0-0``,  ``4.6.0-0``,  ``4.4.0-0``,  ``4.2.0-1``,  ``4.0.0-0``,  ``3.48.0-0``,  ``3.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotate: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-annotate: ``>=1.88.0,<1.89.0a0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-globaltest: ``>=5.64.0,<5.65.0``
   :depends on bioconductor-globaltest: ``>=5.64.0,<5.65.0a0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corpcor: 
   :depends on r-dendextend: 
   :depends on r-vgam: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-globalancova

to add into an existing workspace instead, run::

    pixi add bioconductor-globalancova

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-globalancova

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-globalancova

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-globalancova:<tag>

(see `bioconductor-globalancova/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-globalancova| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globalancova.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-globalancova
   :alt:   (downloads)
.. |docker_bioconductor-globalancova| image:: https://quay.io/repository/biocontainers/bioconductor-globalancova/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globalancova
.. _`bioconductor-globalancova/tags`: https://quay.io/repository/biocontainers/bioconductor-globalancova?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-globalancova";
        var versions = ["4.28.0","4.24.0","4.24.0","4.24.0","4.20.0"];
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
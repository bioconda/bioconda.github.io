:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-twilight'
.. highlight: bash

bioconductor-twilight
=====================

.. conda:recipe:: bioconductor-twilight
   :replaces_section_title:
   :noindex:

   Estimation of local false discovery rate

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/twilight.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-twilight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight/meta.yaml>`_
   :links: biotools: :biotools:`twilight`, doi: :doi:`10.1093/bioinformatics/bti436`

   In a typical microarray setting with gene expression data observed under two conditions\, the local false discovery rate describes the probability that a gene is not differentially expressed between the two conditions given its corrresponding observed score or p\-value level. The resulting curve of p\-values versus local false discovery rate offers an insight into the twilight zone between clear differential and clear non\-differential gene expression. Package \'twilight\' contains two main functions\: Function twilight.pval performs a two\-condition test on differences in means for a given input matrix or expression set and computes permutation based p\-values. Function twilight performs a stochastic downhill search to estimate local false discovery rates and effect size distributions. The package further provides means to filter for permutations that describe the null distribution correctly. Using filtered permutations\, the influence of hidden confounders could be diminished.


.. conda:package:: bioconductor-twilight

   |downloads_bioconductor-twilight| |docker_bioconductor-twilight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.86.0-0</code>,  <code>1.82.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  </span></summary>
      

      ``1.86.0-0``,  ``1.82.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      

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

    pixi global install bioconductor-twilight

to add into an existing workspace instead, run::

    pixi add bioconductor-twilight

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-twilight

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-twilight

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-twilight:<tag>

(see `bioconductor-twilight/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-twilight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-twilight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-twilight
   :alt:   (downloads)
.. |docker_bioconductor-twilight| image:: https://quay.io/repository/biocontainers/bioconductor-twilight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-twilight
.. _`bioconductor-twilight/tags`: https://quay.io/repository/biocontainers/bioconductor-twilight?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-twilight";
        var versions = ["1.86.0","1.82.0","1.78.0","1.76.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-twilight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-twilight/README.html
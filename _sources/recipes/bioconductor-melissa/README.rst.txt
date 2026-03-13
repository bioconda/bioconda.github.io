:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-melissa'
.. highlight: bash

bioconductor-melissa
====================

.. conda:recipe:: bioconductor-melissa
   :replaces_section_title:
   :noindex:

   Bayesian clustering and imputationa of single cell methylomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Melissa.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-melissa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-melissa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-melissa/meta.yaml>`_

   Melissa is a Baysian probabilistic model for jointly clustering and imputing single cell methylomes. This is done by taking into account local correlations via a Generalised Linear Model approach and global similarities using a mixture modelling approach.


.. conda:package:: bioconductor-melissa

   |downloads_bioconductor-melissa| |docker_bioconductor-melissa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-bprmeth: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-matrixcalc: 
   :depends on r-mclust: 
   :depends on r-mcmcpack: 
   :depends on r-mvtnorm: 
   :depends on r-rocr: 
   :depends on r-truncnorm: 

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

    pixi global install bioconductor-melissa

to add into an existing workspace instead, run::

    pixi add bioconductor-melissa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-melissa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-melissa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-melissa:<tag>

(see `bioconductor-melissa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-melissa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-melissa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-melissa
   :alt:   (downloads)
.. |docker_bioconductor-melissa| image:: https://quay.io/repository/biocontainers/bioconductor-melissa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-melissa
.. _`bioconductor-melissa/tags`: https://quay.io/repository/biocontainers/bioconductor-melissa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-melissa";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-melissa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-melissa/README.html
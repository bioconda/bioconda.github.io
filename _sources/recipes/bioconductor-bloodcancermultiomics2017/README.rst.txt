:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bloodcancermultiomics2017'
.. highlight: bash

bioconductor-bloodcancermultiomics2017
======================================

.. conda:recipe:: bioconductor-bloodcancermultiomics2017
   :replaces_section_title:
   :noindex:

   \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al. \- experimental data and complete analysis

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/BloodCancerMultiOmics2017.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-bloodcancermultiomics2017 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodcancermultiomics2017>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodcancermultiomics2017/meta.yaml>`_

   The package contains data of the Primary Blood Cancer Encyclopedia \(PACE\) project together with a complete executable transcript of the statistical analysis and reproduces figures presented in the paper \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al.\, J. Clin. Invest. \(2018\) 128\(1\)\:427\-445. doi\:10.1172\/JCI93801.


.. conda:package:: bioconductor-bloodcancermultiomics2017

   |downloads_bioconductor-bloodcancermultiomics2017| |docker_bioconductor-bloodcancermultiomics2017|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-beeswarm: 
   :depends on r-devtools: 
   :depends on r-dplyr: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-gtable: 
   :depends on r-ipflasso: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-survival: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-bloodcancermultiomics2017

to add into an existing workspace instead, run::

    pixi add bioconductor-bloodcancermultiomics2017

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bloodcancermultiomics2017

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bloodcancermultiomics2017

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bloodcancermultiomics2017:<tag>

(see `bioconductor-bloodcancermultiomics2017/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bloodcancermultiomics2017| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bloodcancermultiomics2017.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bloodcancermultiomics2017
   :alt:   (downloads)
.. |docker_bioconductor-bloodcancermultiomics2017| image:: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017
.. _`bioconductor-bloodcancermultiomics2017/tags`: https://quay.io/repository/biocontainers/bioconductor-bloodcancermultiomics2017?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bloodcancermultiomics2017";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bloodcancermultiomics2017/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bloodcancermultiomics2017/README.html
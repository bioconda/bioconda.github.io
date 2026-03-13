:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcaspar'
.. highlight: bash

bioconductor-rcaspar
====================

.. conda:recipe:: bioconductor-rcaspar
   :replaces_section_title:
   :noindex:

   A package for survival time prediction based on a piecewise baseline hazard Cox regression model.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RCASPAR.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-rcaspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcaspar/meta.yaml>`_
   :links: biotools: :biotools:`rcaspar`, doi: :doi:`10.1038/nmeth.3252`

   The package is the R\-version of the C\-based software \\bold\{CASPAR\} \(Kaderali\,2006\: \\url\{http\:\/\/bioinformatics.oxfordjournals.org\/content\/22\/12\/1495\}\). It is meant to help predict survival times in the presence of high\-dimensional explanatory covariates. The model is a piecewise baseline hazard Cox regression model with an Lq\-norm based prior that selects for the most important regression coefficients\, and in turn the most relevant covariates for survival analysis. It was primarily tried on gene expression and aCGH data\, but can be used on any other type of high\-dimensional data and in disciplines other than biology and medicine.


.. conda:package:: bioconductor-rcaspar

   |downloads_bioconductor-rcaspar| |docker_bioconductor-rcaspar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install bioconductor-rcaspar

to add into an existing workspace instead, run::

    pixi add bioconductor-rcaspar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcaspar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcaspar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcaspar:<tag>

(see `bioconductor-rcaspar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcaspar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcaspar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcaspar
   :alt:   (downloads)
.. |docker_bioconductor-rcaspar| image:: https://quay.io/repository/biocontainers/bioconductor-rcaspar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcaspar
.. _`bioconductor-rcaspar/tags`: https://quay.io/repository/biocontainers/bioconductor-rcaspar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcaspar";
        var versions = ["1.56.0","1.52.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcaspar/README.html
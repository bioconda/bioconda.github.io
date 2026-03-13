:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-combi'
.. highlight: bash

bioconductor-combi
==================

.. conda:recipe:: bioconductor-combi
   :replaces_section_title:
   :noindex:

   Compositional omics model based visual integration

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/combi.html
   :license: GPL-2
   :recipe: /`bioconductor-combi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-combi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-combi/meta.yaml>`_

   This explorative ordination method combines quasi\-likelihood estimation\, compositional regression models and latent variable models for integrative visualization of several omics datasets. Both unconstrained and constrained integration are available. The results are shown as interpretable\, compositional multiplots.


.. conda:package:: bioconductor-combi

   |downloads_bioconductor-combi| |docker_bioconductor-combi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-alabama: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bb: 
   :depends on r-cobs: 
   :depends on r-dbi: 
   :depends on r-ggplot2: 
   :depends on r-matrix: ``>=1.6.0``
   :depends on r-nleqslv: 
   :depends on r-reshape2: 
   :depends on r-tensor: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-combi

to add into an existing workspace instead, run::

    pixi add bioconductor-combi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-combi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-combi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-combi:<tag>

(see `bioconductor-combi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-combi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-combi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-combi
   :alt:   (downloads)
.. |docker_bioconductor-combi| image:: https://quay.io/repository/biocontainers/bioconductor-combi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-combi
.. _`bioconductor-combi/tags`: https://quay.io/repository/biocontainers/bioconductor-combi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-combi";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-combi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-combi/README.html
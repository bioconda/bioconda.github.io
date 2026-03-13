:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mwastools'
.. highlight: bash

bioconductor-mwastools
======================

.. conda:recipe:: bioconductor-mwastools
   :replaces_section_title:
   :noindex:

   MWASTools\: an integrated pipeline to perform metabolome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MWASTools.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-mwastools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mwastools/meta.yaml>`_

   MWASTools provides a complete pipeline to perform metabolome\-wide association studies. Key functionalities of the package include\: quality control analysis of metabonomic data\; MWAS using different association models \(partial correlations\; generalized linear models\)\; model validation using non\-parametric bootstrapping\; visualization of MWAS results\; NMR metabolite identification using STOCSY\; and biological interpretation of MWAS results.


.. conda:package:: bioconductor-mwastools

   |downloads_bioconductor-mwastools| |docker_bioconductor-mwastools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-kegggraph: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-car: 
   :depends on r-ggplot2: 
   :depends on r-glm2: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-ppcor: 
   :depends on r-rcurl: 

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

    pixi global install bioconductor-mwastools

to add into an existing workspace instead, run::

    pixi add bioconductor-mwastools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mwastools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mwastools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mwastools:<tag>

(see `bioconductor-mwastools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mwastools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mwastools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mwastools
   :alt:   (downloads)
.. |docker_bioconductor-mwastools| image:: https://quay.io/repository/biocontainers/bioconductor-mwastools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mwastools
.. _`bioconductor-mwastools/tags`: https://quay.io/repository/biocontainers/bioconductor-mwastools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mwastools";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mwastools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mwastools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvpanelizer'
.. highlight: bash

bioconductor-cnvpanelizer
=========================

.. conda:recipe:: bioconductor-cnvpanelizer
   :replaces_section_title:
   :noindex:

   Reliable CNV detection in targeted sequencing applications

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CNVPanelizer.html
   :license: GPL-3
   :recipe: /`bioconductor-cnvpanelizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvpanelizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvpanelizer/meta.yaml>`_
   :links: biotools: :biotools:`cnvpanelizer`, doi: :doi:`10.1038/nmeth.3252`

   A method that allows for the use of a collection of non\-matched normal tissue samples. Our approach uses a non\-parametric bootstrap subsampling of the available reference samples to estimate the distribution of read counts from targeted sequencing. As inspired by random forest\, this is combined with a procedure that subsamples the amplicons associated with each of the targeted genes. The obtained information allows us to reliably classify the copy number aberrations on the gene level.


.. conda:package:: bioconductor-cnvpanelizer

   |downloads_bioconductor-cnvpanelizer| |docker_bioconductor-cnvpanelizer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-noiseq: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-openxlsx: 
   :depends on r-plyr: 
   :depends on r-reshape2: 
   :depends on r-shiny: 
   :depends on r-shinyfiles: 
   :depends on r-shinyjs: 
   :depends on r-stringr: 
   :depends on r-testthat: 

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

    pixi global install bioconductor-cnvpanelizer

to add into an existing workspace instead, run::

    pixi add bioconductor-cnvpanelizer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cnvpanelizer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cnvpanelizer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cnvpanelizer:<tag>

(see `bioconductor-cnvpanelizer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cnvpanelizer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvpanelizer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvpanelizer
   :alt:   (downloads)
.. |docker_bioconductor-cnvpanelizer| image:: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer
.. _`bioconductor-cnvpanelizer/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvpanelizer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvpanelizer";
        var versions = ["1.42.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvpanelizer/README.html
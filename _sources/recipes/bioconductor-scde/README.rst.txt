:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scde'
.. highlight: bash

bioconductor-scde
=================

.. conda:recipe:: bioconductor-scde
   :replaces_section_title:
   :noindex:

   Single Cell Differential Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scde.html
   :license: GPL-2
   :recipe: /`bioconductor-scde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scde/meta.yaml>`_
   :links: biotools: :biotools:`scde`, doi: :doi:`10.1038/nmeth.2967`

   The scde package implements a set of statistical methods for analyzing single\-cell RNA\-seq data. scde fits individual error models for single\-cell RNA\-seq measurements. These models can then be used for assessment of differential expression between groups of cells\, as well as other types of analysis. The scde package also contains the pagoda framework which applies pathway and gene set overdispersion analysis to identify and characterize putative cell subpopulations based on transcriptional signatures. The overall approach to the differential expression analysis is detailed in the following publication\: \"Bayesian approach to single\-cell differential expression analysis\" \(Kharchenko PV\, Silberstein L\, Scadden DT\, Nature Methods\, doi\: 10.1038\/nmeth.2967\). The overall approach to subpopulation identification and characterization is detailed in the following pre\-print\: \"Characterizing transcriptional heterogeneity through pathway and gene set overdispersion analysis\" \(Fan J\, Salathia N\, Liu R\, Kaeser G\, Yung Y\, Herman J\, Kaper F\, Fan JB\, Zhang K\, Chun J\, and Kharchenko PV\, Nature Methods\, doi\:10.1038\/nmeth.3734\).


.. conda:package:: bioconductor-scde

   |downloads_bioconductor-scde| |docker_bioconductor-scde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.2-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.22.0-2</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.2-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.22.0-2``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-edger: ``>=4.8.2,<4.9.0a0``
   :depends on bioconductor-pcamethods: ``>=2.2.0,<2.3.0``
   :depends on bioconductor-pcamethods: ``>=2.2.0,<2.3.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cairo: 
   :depends on r-extremes: 
   :depends on r-flexmix: 
   :depends on r-mass: 
   :depends on r-mgcv: 
   :depends on r-nnet: 
   :depends on r-quantreg: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=0.10.4``
   :depends on r-rcpparmadillo: ``>=0.5.400.2.0``
   :depends on r-rjson: 
   :depends on r-rmtstat: 
   :depends on r-rook: 

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

    pixi global install bioconductor-scde

to add into an existing workspace instead, run::

    pixi add bioconductor-scde

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scde

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scde

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scde:<tag>

(see `bioconductor-scde/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scde
   :alt:   (downloads)
.. |docker_bioconductor-scde| image:: https://quay.io/repository/biocontainers/bioconductor-scde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scde
.. _`bioconductor-scde/tags`: https://quay.io/repository/biocontainers/bioconductor-scde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scde";
        var versions = ["2.38.0","2.34.0","2.30.0","2.28.2","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scde/README.html
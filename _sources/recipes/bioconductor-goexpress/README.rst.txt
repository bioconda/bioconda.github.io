:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goexpress'
.. highlight: bash

bioconductor-goexpress
======================

.. conda:recipe:: bioconductor-goexpress
   :replaces_section_title:
   :noindex:

   Visualise microarray and RNAseq data using gene ontology annotations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GOexpress.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-goexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goexpress/meta.yaml>`_

   The package contains methods to visualise the expression profile of genes from a microarray or RNA\-seq experiment\, and offers a supervised clustering approach to identify GO terms containing genes with expression levels that best classify two or more predefined groups of samples. Annotations for the genes present in the expression dataset may be obtained from Ensembl through the biomaRt package\, if not provided by the user. The default random forest framework is used to evaluate the capacity of each gene to cluster samples according to the factor of interest. Finally\, GO terms are scored by averaging the rank \(alternatively\, score\) of their respective gene sets to cluster the samples. P\-values may be computed to assess the significance of GO term ranking. Visualisation function include gene expression profile\, gene ontology\-based heatmaps\, and hierarchical clustering of experimental samples using gene expression data.


.. conda:package:: bioconductor-goexpress

   |downloads_bioconductor-goexpress| |docker_bioconductor-goexpress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=0.9.0``
   :depends on r-gplots: ``>=2.13.0``
   :depends on r-randomforest: ``>=4.6``
   :depends on r-rcolorbrewer: ``>=1.0``
   :depends on r-rcurl: ``>=1.95``
   :depends on r-stringr: ``>=0.6.2``

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

    pixi global install bioconductor-goexpress

to add into an existing workspace instead, run::

    pixi add bioconductor-goexpress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-goexpress

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-goexpress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-goexpress:<tag>

(see `bioconductor-goexpress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-goexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-goexpress
   :alt:   (downloads)
.. |docker_bioconductor-goexpress| image:: https://quay.io/repository/biocontainers/bioconductor-goexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goexpress
.. _`bioconductor-goexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-goexpress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-goexpress";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goexpress/README.html
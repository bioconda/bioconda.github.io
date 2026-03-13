:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenomis'
.. highlight: bash

bioconductor-phenomis
=====================

.. conda:recipe:: bioconductor-phenomis
   :replaces_section_title:
   :noindex:

   Postprocessing and univariate analysis of omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/phenomis.html
   :license: CeCILL
   :recipe: /`bioconductor-phenomis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenomis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenomis/meta.yaml>`_

   The \'phenomis\' package provides methods to perform post\-processing \(i.e. quality control and normalization\) as well as univariate statistical analysis of single and multi\-omics data sets. These methods include quality control metrics\, signal drift and batch effect correction\, intensity transformation\, univariate hypothesis testing\, but also clustering \(as well as annotation of metabolomics data\). The data are handled in the standard Bioconductor formats \(i.e. SummarizedExperiment and MultiAssayExperiment for single and multi\-omics datasets\, respectively\; the alternative ExpressionSet and MultiDataSet formats are also supported for convenience\). As a result\, all methods can be readily chained as workflows. The pipeline can be further enriched by multivariate analysis and feature selection\, by using the \'ropls\' and \'biosigner\' packages\, which support the same formats. Data can be conveniently imported from and exported to text files. Although the methods were initially targeted to metabolomics data\, most of the methods can be applied to other types of omics data \(e.g.\, transcriptomics\, proteomics\).


.. conda:package:: bioconductor-phenomis

   |downloads_bioconductor-phenomis| |docker_bioconductor-phenomis|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-biodbchebi: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-multidataset: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-ropls: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-futile.logger: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-plotly: 
   :depends on r-pmcmrplus: 
   :depends on r-ranger: 
   :depends on r-rcolorbrewer: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-venndiagram: 

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

    pixi global install bioconductor-phenomis

to add into an existing workspace instead, run::

    pixi add bioconductor-phenomis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-phenomis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-phenomis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-phenomis:<tag>

(see `bioconductor-phenomis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-phenomis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenomis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenomis
   :alt:   (downloads)
.. |docker_bioconductor-phenomis| image:: https://quay.io/repository/biocontainers/bioconductor-phenomis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenomis
.. _`bioconductor-phenomis/tags`: https://quay.io/repository/biocontainers/bioconductor-phenomis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenomis";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenomis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenomis/README.html
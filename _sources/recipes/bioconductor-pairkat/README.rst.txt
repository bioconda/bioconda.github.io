:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pairkat'
.. highlight: bash

bioconductor-pairkat
====================

.. conda:recipe:: bioconductor-pairkat
   :replaces_section_title:
   :noindex:

   PaIRKAT

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pairkat.html
   :license: GPL-3
   :recipe: /`bioconductor-pairkat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairkat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pairkat/meta.yaml>`_

   PaIRKAT is model framework for assessing statistical relationships between networks of metabolites \(pathways\) and an outcome of interest \(phenotype\). PaIRKAT queries the KEGG database to determine interactions between metabolites from which network connectivity is constructed. This model framework improves testing power on high dimensional data by including graph topography in the kernel machine regression setting. Studies on high dimensional data can struggle to include the complex relationships between variables. The semi\-parametric kernel machine regression model is a powerful tool for capturing these types of relationships. They provide a framework for testing for relationships between outcomes of interest and high dimensional data such as metabolomic\, genomic\, or proteomic pathways. PaIRKAT uses known biological connections between high dimensional variables by representing them as edges of ‘graphs’ or ‘networks.’ It is common for nodes \(e.g. metabolites\) to be disconnected from all others within the graph\, which leads to meaningful decreases in testing power whether or not the graph information is included. We include a graph regularization or ‘smoothing’ approach for managing this issue.


.. conda:package:: bioconductor-pairkat

   |downloads_bioconductor-pairkat| |docker_bioconductor-pairkat|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-compquadform: 
   :depends on r-data.table: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
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

    pixi global install bioconductor-pairkat

to add into an existing workspace instead, run::

    pixi add bioconductor-pairkat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pairkat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pairkat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pairkat:<tag>

(see `bioconductor-pairkat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pairkat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pairkat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pairkat
   :alt:   (downloads)
.. |docker_bioconductor-pairkat| image:: https://quay.io/repository/biocontainers/bioconductor-pairkat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pairkat
.. _`bioconductor-pairkat/tags`: https://quay.io/repository/biocontainers/bioconductor-pairkat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pairkat";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pairkat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pairkat/README.html
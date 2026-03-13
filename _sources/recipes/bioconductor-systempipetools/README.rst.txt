:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempipetools'
.. highlight: bash

bioconductor-systempipetools
============================

.. conda:recipe:: bioconductor-systempipetools
   :replaces_section_title:
   :noindex:

   Tools for data visualization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/systemPipeTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-systempipetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempipetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempipetools/meta.yaml>`_

   systemPipeTools package extends the widely used systemPipeR \(SPR\) workflow environment with an enhanced toolkit for data visualization\, including utilities to automate the data visualizaton for analysis of differentially expressed genes \(DEGs\). systemPipeTools provides data transformation and data exploration functions via scatterplots\, hierarchical clustering heatMaps\, principal component analysis\, multidimensional scaling\, generalized principal components\, t\-Distributed Stochastic Neighbor embedding \(t\-SNE\)\, and MA and volcano plots. All these utilities can be integrated with the modular design of the systemPipeR environment that allows users to easily substitute any of these features and\/or custom with alternatives.


.. conda:package:: bioconductor-systempipetools

   |downloads_bioconductor-systempipetools| |docker_bioconductor-systempipetools|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glmpca: 
   :depends on r-magrittr: 
   :depends on r-pheatmap: 
   :depends on r-plotly: 
   :depends on r-rtsne: 
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

    pixi global install bioconductor-systempipetools

to add into an existing workspace instead, run::

    pixi add bioconductor-systempipetools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-systempipetools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-systempipetools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-systempipetools:<tag>

(see `bioconductor-systempipetools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-systempipetools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempipetools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-systempipetools
   :alt:   (downloads)
.. |docker_bioconductor-systempipetools| image:: https://quay.io/repository/biocontainers/bioconductor-systempipetools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempipetools
.. _`bioconductor-systempipetools/tags`: https://quay.io/repository/biocontainers/bioconductor-systempipetools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-systempipetools";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempipetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempipetools/README.html
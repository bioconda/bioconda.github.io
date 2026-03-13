:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corona_lineage_dynamics'
.. highlight: bash

corona_lineage_dynamics
=======================

.. conda:recipe:: corona_lineage_dynamics
   :replaces_section_title:
   :noindex:

   Analyzing and visualizing pangolin lineages of GISAID metadata.

   :homepage: https://github.com/hzi-bifo/corona_lineage_dynamics
   :license: OTHER / ASL
   :recipe: /`corona_lineage_dynamics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corona_lineage_dynamics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corona_lineage_dynamics/meta.yaml>`_

   


.. conda:package:: corona_lineage_dynamics

   |downloads_corona_lineage_dynamics| |docker_corona_lineage_dynamics|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on boost: 
   :depends on libboost: ``>=1.84.0,<1.85.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-binom: 
   :depends on r-countrycode: 
   :depends on r-d3heatmap: 
   :depends on r-devtools: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-htmltools: 
   :depends on r-htmlwidgets: 
   :depends on r-knitr: 
   :depends on r-lifecycle: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-pkgdown: 
   :depends on r-plotly: 
   :depends on r-plyr: 
   :depends on r-ragg: 
   :depends on r-rcpp: 
   :depends on r-rcurl: 
   :depends on r-readr: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-systemfonts: 
   :depends on r-tictoc: 
   :depends on r-tidyr: 
   :depends on r-withr: 
   :depends on r-xml: 
   :depends on r-xml2: 
   :depends on r-xtable: 
   :depends on ta-lib: 
   :depends on zlib: 

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

    pixi global install corona_lineage_dynamics

to add into an existing workspace instead, run::

    pixi add corona_lineage_dynamics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install corona_lineage_dynamics

Alternatively, to install into a new environment, run::

    conda create -n envname corona_lineage_dynamics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/corona_lineage_dynamics:<tag>

(see `corona_lineage_dynamics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_corona_lineage_dynamics| image:: https://img.shields.io/conda/dn/bioconda/corona_lineage_dynamics.svg?style=flat
   :target: https://anaconda.org/bioconda/corona_lineage_dynamics
   :alt:   (downloads)
.. |docker_corona_lineage_dynamics| image:: https://quay.io/repository/biocontainers/corona_lineage_dynamics/status
   :target: https://quay.io/repository/biocontainers/corona_lineage_dynamics
.. _`corona_lineage_dynamics/tags`: https://quay.io/repository/biocontainers/corona_lineage_dynamics?tab=tags


.. raw:: html

    <script>
        var package = "corona_lineage_dynamics";
        var versions = ["0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corona_lineage_dynamics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corona_lineage_dynamics/README.html
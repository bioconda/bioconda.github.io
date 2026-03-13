:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-statvisual'
.. highlight: bash

r-statvisual
============

.. conda:recipe:: r-statvisual
   :replaces_section_title:
   :noindex:

   Visualization functions in the applications of translational medicine \(TM\) and biomarker \(BM\) development to compare groups by statistically visualizing data and\/or results of analyses\, such as visualizing data by displaying in one figure different groups\' histograms\, boxplots\, densities\, scatter plots\, error\-bar plots\, or trajectory plots\, by displaying scatter plots of top principal components or dendrograms with data points colored based on group information\, or visualizing volcano plots to check the results of whole genome analyses for gene differential expression. 

   :homepage: https://CRAN.R-project.org/package=statVisual
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-statvisual <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-statvisual>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-statvisual/meta.yaml>`_

   


.. conda:package:: r-statvisual

   |downloads_r-statvisual| |docker_r-statvisual|

   :versions:
      
      

      ``1.2.1-6``,  ``1.2.1-5``,  ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.9-0``,  ``1.1.8-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-limma: 
   :depends on bioconductor-pvca: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-factoextra: 
   :depends on r-forestplot: 
   :depends on r-gbm: 
   :depends on r-ggally: 
   :depends on r-ggdendro: 
   :depends on r-ggfortify: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glmnet: 
   :depends on r-gplots: 
   :depends on r-gridextra: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-multigroup: 
   :depends on r-pheatmap: 
   :depends on r-proc: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-rpart.plot: 
   :depends on r-tibble: 
   :depends on r-tidyverse: 

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

    pixi global install r-statvisual

to add into an existing workspace instead, run::

    pixi add r-statvisual

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-statvisual

Alternatively, to install into a new environment, run::

    conda create -n envname r-statvisual

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-statvisual:<tag>

(see `r-statvisual/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-statvisual| image:: https://img.shields.io/conda/dn/bioconda/r-statvisual.svg?style=flat
   :target: https://anaconda.org/bioconda/r-statvisual
   :alt:   (downloads)
.. |docker_r-statvisual| image:: https://quay.io/repository/biocontainers/r-statvisual/status
   :target: https://quay.io/repository/biocontainers/r-statvisual
.. _`r-statvisual/tags`: https://quay.io/repository/biocontainers/r-statvisual?tab=tags


.. raw:: html

    <script>
        var package = "r-statvisual";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-statvisual/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-statvisual/README.html
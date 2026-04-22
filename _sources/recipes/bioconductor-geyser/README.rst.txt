:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geyser'
.. highlight: bash

bioconductor-geyser
===================

.. conda:recipe:: bioconductor-geyser
   :replaces_section_title:
   :noindex:

   Gene Expression displaYer of SummarizedExperiment in R

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/geyser.html
   :license: CC0
   :recipe: /`bioconductor-geyser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geyser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geyser/meta.yaml>`_

   Lightweight Expression displaYer \(plotter \/ viewer\) of SummarizedExperiment object in R. This package provides a quick and easy Shiny\-based GUI to empower a user to use a SummarizedExperiment object to view \(gene\) expression grouped from the sample metadata columns \(in the \`colData\` slot\). Feature expression can either be viewed with a box plot or a heatmap.


.. conda:package:: bioconductor-geyser

   |downloads_bioconductor-geyser| |docker_bioconductor-geyser|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bslib: ``>=0.6.0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggbeeswarm: 
   :depends on r-ggplot2: 
   :depends on r-htmltools: 
   :depends on r-magrittr: 
   :depends on r-shiny: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-geyser

to add into an existing workspace instead, run::

    pixi add bioconductor-geyser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geyser

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geyser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geyser:<tag>

(see `bioconductor-geyser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geyser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geyser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geyser
   :alt:   (downloads)
.. |docker_bioconductor-geyser| image:: https://quay.io/repository/biocontainers/bioconductor-geyser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geyser
.. _`bioconductor-geyser/tags`: https://quay.io/repository/biocontainers/bioconductor-geyser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geyser";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geyser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geyser/README.html
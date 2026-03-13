:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gatom'
.. highlight: bash

bioconductor-gatom
==================

.. conda:recipe:: bioconductor-gatom
   :replaces_section_title:
   :noindex:

   Finding an Active Metabolic Module in Atom Transition Network

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gatom.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-gatom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gatom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gatom/meta.yaml>`_

   This package implements a metabolic network analysis pipeline to identify an active metabolic module based on high throughput data. The pipeline takes as input transcriptional and\/or metabolic data and finds a metabolic subnetwork \(module\) most regulated between the two conditions of interest. The package further provides functions for module post\-processing\, annotation and visualization.


.. conda:package:: bioconductor-gatom

   |downloads_bioconductor-gatom| |docker_bioconductor-gatom|

   :versions:
      
      

      ``1.8.4-0``,  ``1.4.0-0``

      

   
   :depends on bioconductor-bionet: ``>=1.70.0,<1.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-htmltools: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-intergraph: 
   :depends on r-mwcsr: 
   :depends on r-network: 
   :depends on r-plyr: 
   :depends on r-shinycyjs: ``>=1.0.0``
   :depends on r-sna: 
   :depends on r-xml: 

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

    pixi global install bioconductor-gatom

to add into an existing workspace instead, run::

    pixi add bioconductor-gatom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gatom

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gatom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gatom:<tag>

(see `bioconductor-gatom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gatom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gatom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gatom
   :alt:   (downloads)
.. |docker_bioconductor-gatom| image:: https://quay.io/repository/biocontainers/bioconductor-gatom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gatom
.. _`bioconductor-gatom/tags`: https://quay.io/repository/biocontainers/bioconductor-gatom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gatom";
        var versions = ["1.8.4","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gatom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gatom/README.html
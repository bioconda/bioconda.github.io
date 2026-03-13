:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wpm'
.. highlight: bash

bioconductor-wpm
================

.. conda:recipe:: bioconductor-wpm
   :replaces_section_title:
   :noindex:

   Well Plate Maker

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/wpm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wpm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm/meta.yaml>`_

   The Well\-Plate Maker \(WPM\) is a shiny application deployed as an R package. Functions for a command\-line\/script use are also available. The WPM allows users to generate well plate maps to carry out their experiments while improving the handling of batch effects. In particular\, it helps controlling the \"plate effect\" thanks to its ability to randomize samples over multiple well plates. The algorithm for placing the samples is inspired by the backtracking algorithm\: the samples are placed at random while respecting specific spatial constraints.


.. conda:package:: bioconductor-wpm

   |downloads_bioconductor-wpm| |docker_bioconductor-wpm|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-config: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-golem: 
   :depends on r-logging: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-shinycustomloader: 
   :depends on r-shinydashboard: 
   :depends on r-shinywidgets: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-wpm

to add into an existing workspace instead, run::

    pixi add bioconductor-wpm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-wpm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-wpm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-wpm:<tag>

(see `bioconductor-wpm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-wpm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wpm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wpm
   :alt:   (downloads)
.. |docker_bioconductor-wpm| image:: https://quay.io/repository/biocontainers/bioconductor-wpm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wpm
.. _`bioconductor-wpm/tags`: https://quay.io/repository/biocontainers/bioconductor-wpm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wpm";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wpm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wpm/README.html
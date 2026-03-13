:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprshiny'
.. highlight: bash

bioconductor-crisprshiny
========================

.. conda:recipe:: bioconductor-crisprshiny
   :replaces_section_title:
   :noindex:

   Exploring curated CRISPR gRNAs via Shiny

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprShiny.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprshiny/meta.yaml>`_

   Provides means to interactively visualize guide RNAs \(gRNAs\) in GuideSet objects via Shiny application. This GUI can be self\-contained or as a module within a larger Shiny app. The content of the app reflects the annotations present in the passed GuideSet object\, and includes intuitive tools to examine\, filter\, and export gRNAs\, thereby making gRNA design more user\-friendly.


.. conda:package:: bioconductor-crisprshiny

   |downloads_bioconductor-crisprshiny| |docker_bioconductor-crisprshiny|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-crisprbase: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-crisprdesign: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-crisprscore: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-crisprviz: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dt: 
   :depends on r-htmlwidgets: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinyjs: 
   :depends on r-waiter: 

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

    pixi global install bioconductor-crisprshiny

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprshiny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprshiny

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprshiny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprshiny:<tag>

(see `bioconductor-crisprshiny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprshiny
   :alt:   (downloads)
.. |docker_bioconductor-crisprshiny| image:: https://quay.io/repository/biocontainers/bioconductor-crisprshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprshiny
.. _`bioconductor-crisprshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprshiny";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprshiny/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomeprofiler'
.. highlight: bash

bioconductor-microbiomeprofiler
===============================

.. conda:recipe:: bioconductor-microbiomeprofiler
   :replaces_section_title:
   :noindex:

   An R\/shiny package for microbiome functional enrichment analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MicrobiomeProfiler.html
   :license: GPL-2
   :recipe: /`bioconductor-microbiomeprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeprofiler/meta.yaml>`_

   This is an R\/shiny package to perform functional enrichment analysis for microbiome data. This package was based on clusterProfiler. Moreover\, MicrobiomeProfiler support KEGG enrichment analysis\, COG enrichment analysis\, Microbe\-Disease association enrichment analysis\, Metabo\-Pathway analysis.


.. conda:package:: bioconductor-microbiomeprofiler

   |downloads_bioconductor-microbiomeprofiler| |docker_bioconductor-microbiomeprofiler|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-config: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-golem: 
   :depends on r-gson: 
   :depends on r-htmltools: 
   :depends on r-magrittr: 
   :depends on r-shiny: ``>=1.6.0``
   :depends on r-shinycustomloader: 
   :depends on r-shinywidgets: 
   :depends on r-yulab.utils: 

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

    pixi global install bioconductor-microbiomeprofiler

to add into an existing workspace instead, run::

    pixi add bioconductor-microbiomeprofiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-microbiomeprofiler

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-microbiomeprofiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-microbiomeprofiler:<tag>

(see `bioconductor-microbiomeprofiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-microbiomeprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomeprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomeprofiler
   :alt:   (downloads)
.. |docker_bioconductor-microbiomeprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler
.. _`bioconductor-microbiomeprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomeprofiler";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomeprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomeprofiler/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplots'
.. highlight: bash

r-acidplots
===========

.. conda:recipe:: r-acidplots
   :replaces_section_title:
   :noindex:

   Functions for plotting genomic data.

   :homepage: https://r.acidgenomics.com/packages/acidplots/
   :developer docs: https://github.com/acidgenomics/r-acidplots
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplots/meta.yaml>`_

   


.. conda:package:: r-acidplots

   |downloads_r-acidplots| |docker_r-acidplots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.4-0</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.5-2</code>,  <code>0.5.5-1</code>,  </span></summary>
      

      ``0.7.4-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-2``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.4.0-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.0-0``,  ``0.2.36-0``,  ``0.2.35-0``,  ``0.2.34-0``,  ``0.2.32-0``,  ``0.2.30-0``,  ``0.2.29-0``,  ``0.2.28-0``,  ``0.2.27-0``,  ``0.2.26-1``,  ``0.2.26-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.60.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-dropletutils: ``>=1.20.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.3.0``
   :depends on r-acidexperiment: ``>=0.5.0``
   :depends on r-acidgenerics: ``>=0.7.1``
   :depends on r-acidgenomes: ``>=0.6.0``
   :depends on r-acidmarkdown: ``>=0.3.0``
   :depends on r-acidplyr: ``>=0.5.0``
   :depends on r-acidsinglecell: ``>=0.4.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-complexupset: ``>=1.3.3``
   :depends on r-ggplot2: ``>=3.4.3``
   :depends on r-ggpmisc: ``>=0.5.4``
   :depends on r-ggrepel: ``>=0.9.3``
   :depends on r-ggridges: ``>=0.5.4``
   :depends on r-goalie: ``>=0.7.1``
   :depends on r-matrix: ``>=1.6.1``
   :depends on r-matrixstats: ``>=1.0.0``
   :depends on r-patchwork: ``>=1.1.3``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-rcolorbrewer: ``>=1.1.3``
   :depends on r-rlang: ``>=1.1.1``
   :depends on r-scales: ``>=1.2.1``
   :depends on r-syntactic: ``>=0.7.0``
   :depends on r-viridis: ``>=0.6.4``

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

    pixi global install r-acidplots

to add into an existing workspace instead, run::

    pixi add r-acidplots

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-acidplots

Alternatively, to install into a new environment, run::

    conda create -n envname r-acidplots

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-acidplots:<tag>

(see `r-acidplots/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-acidplots| image:: https://img.shields.io/conda/dn/bioconda/r-acidplots.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplots
   :alt:   (downloads)
.. |docker_r-acidplots| image:: https://quay.io/repository/biocontainers/r-acidplots/status
   :target: https://quay.io/repository/biocontainers/r-acidplots
.. _`r-acidplots/tags`: https://quay.io/repository/biocontainers/r-acidplots?tab=tags


.. raw:: html

    <script>
        var package = "r-acidplots";
        var versions = ["0.7.4","0.7.3","0.7.3","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplots/README.html
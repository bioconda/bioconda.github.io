:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vplotr'
.. highlight: bash

bioconductor-vplotr
===================

.. conda:recipe:: bioconductor-vplotr
   :replaces_section_title:
   :noindex:

   Set of tools to make V\-plots and compute footprint profiles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VplotR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-vplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vplotr/meta.yaml>`_

   The pattern of digestion and protection from DNA nucleases such as DNAse I\, micrococcal nuclease\, and Tn5 transposase can be used to infer the location of associated proteins. This package contains useful functions to analyze patterns of paired\-end sequencing fragment density. VplotR facilitates the generation of V\-plots and footprint profiles over single or aggregated genomic loci of interest.


.. conda:package:: bioconductor-vplotr

   |downloads_bioconductor-vplotr| |docker_bioconductor-vplotr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-vplotr

to add into an existing workspace instead, run::

    pixi add bioconductor-vplotr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vplotr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vplotr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vplotr:<tag>

(see `bioconductor-vplotr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vplotr
   :alt:   (downloads)
.. |docker_bioconductor-vplotr| image:: https://quay.io/repository/biocontainers/bioconductor-vplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vplotr
.. _`bioconductor-vplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-vplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vplotr";
        var versions = ["1.20.0","1.16.0","1.12.1","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vplotr/README.html
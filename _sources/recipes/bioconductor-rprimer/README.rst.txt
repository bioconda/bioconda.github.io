:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rprimer'
.. highlight: bash

bioconductor-rprimer
====================

.. conda:recipe:: bioconductor-rprimer
   :replaces_section_title:
   :noindex:

   Design Degenerate Oligos from a Multiple DNA Sequence Alignment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rprimer.html
   :license: GPL-3
   :recipe: /`bioconductor-rprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprimer/meta.yaml>`_

   Functions\, workflow\, and a Shiny application for visualizing sequence conservation and designing degenerate primers\, probes\, and \(RT\)\-\(q\/d\)PCR assays from a multiple DNA sequence alignment. The results can be presented in data frame format and visualized as dashboard\-like plots. For more information\, please see the package vignette.


.. conda:package:: bioconductor-rprimer

   |downloads_bioconductor-rprimer| |docker_bioconductor-rprimer|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bslib: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-mathjaxr: 
   :depends on r-patchwork: 
   :depends on r-reshape2: 
   :depends on r-shiny: 
   :depends on r-shinycssloaders: 
   :depends on r-shinyfeedback: 

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

    pixi global install bioconductor-rprimer

to add into an existing workspace instead, run::

    pixi add bioconductor-rprimer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rprimer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rprimer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rprimer:<tag>

(see `bioconductor-rprimer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rprimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rprimer
   :alt:   (downloads)
.. |docker_bioconductor-rprimer| image:: https://quay.io/repository/biocontainers/bioconductor-rprimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rprimer
.. _`bioconductor-rprimer/tags`: https://quay.io/repository/biocontainers/bioconductor-rprimer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rprimer";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rprimer/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tricycle'
.. highlight: bash

bioconductor-tricycle
=====================

.. conda:recipe:: bioconductor-tricycle
   :replaces_section_title:
   :noindex:

   tricycle\: Transferable Representation and Inference of cell cycle

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tricycle.html
   :license: GPL-3
   :recipe: /`bioconductor-tricycle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tricycle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tricycle/meta.yaml>`_

   The package contains functions to infer and visualize cell cycle process using Single Cell RNASeq data. It exploits the idea of transfer learning\, projecting new data to the previous learned biologically interpretable space. We provide a pre\-learned cell cycle space\, which could be used to infer cell cycle time of human and mouse single cell samples. In addition\, we also offer functions to visualize cell cycle time on different embeddings and functions to build new reference.


.. conda:package:: bioconductor-tricycle

   |downloads_bioconductor-tricycle| |docker_bioconductor-tricycle|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circular: 
   :depends on r-dplyr: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-rcolorbrewer: 
   :depends on r-scattermore: 

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

    pixi global install bioconductor-tricycle

to add into an existing workspace instead, run::

    pixi add bioconductor-tricycle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tricycle

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tricycle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tricycle:<tag>

(see `bioconductor-tricycle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tricycle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tricycle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tricycle
   :alt:   (downloads)
.. |docker_bioconductor-tricycle| image:: https://quay.io/repository/biocontainers/bioconductor-tricycle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tricycle
.. _`bioconductor-tricycle/tags`: https://quay.io/repository/biocontainers/bioconductor-tricycle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tricycle";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tricycle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tricycle/README.html
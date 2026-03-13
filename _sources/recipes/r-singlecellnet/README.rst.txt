:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-singlecellnet'
.. highlight: bash

r-singlecellnet
===============

.. conda:recipe:: r-singlecellnet
   :replaces_section_title:
   :noindex:

   SingleCellNet enables the classifcation of single cell RNA\-Seq data across
   species and platforms.


   :homepage: https://github.com/pcahan1/singlecellnet
   :license: MIT / MIT
   :recipe: /`r-singlecellnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-singlecellnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-singlecellnet/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2019.06.004`

   


.. conda:package:: r-singlecellnet

   |downloads_r-singlecellnet| |docker_r-singlecellnet|

   :versions:
      
      

      ``0.4.1-6``,  ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-data.tree: 
   :depends on r-desctools: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hdf5r: 
   :depends on r-patchwork: 
   :depends on r-pheatmap: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-tidyr: 
   :depends on r-umap: 
   :depends on r-viridis: 

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

    pixi global install r-singlecellnet

to add into an existing workspace instead, run::

    pixi add r-singlecellnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-singlecellnet

Alternatively, to install into a new environment, run::

    conda create -n envname r-singlecellnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-singlecellnet:<tag>

(see `r-singlecellnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-singlecellnet| image:: https://img.shields.io/conda/dn/bioconda/r-singlecellnet.svg?style=flat
   :target: https://anaconda.org/bioconda/r-singlecellnet
   :alt:   (downloads)
.. |docker_r-singlecellnet| image:: https://quay.io/repository/biocontainers/r-singlecellnet/status
   :target: https://quay.io/repository/biocontainers/r-singlecellnet
.. _`r-singlecellnet/tags`: https://quay.io/repository/biocontainers/r-singlecellnet?tab=tags


.. raw:: html

    <script>
        var package = "r-singlecellnet";
        var versions = ["0.4.1","0.4.1","0.4.1","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-singlecellnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-singlecellnet/README.html
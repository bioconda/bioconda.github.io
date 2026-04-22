:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtreespace'
.. highlight: bash

bioconductor-ggtreespace
========================

.. conda:recipe:: bioconductor-ggtreespace
   :replaces_section_title:
   :noindex:

   Visualizing Phylomorphospaces using \'ggtree\'

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ggtreeSpace.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtreespace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreespace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreespace/meta.yaml>`_

   This package is a comprehensive visualization tool specifically designed for exploring phylomorphospace. It not only simplifies the process of generating phylomorphospace\, but also enhances it with the capability to add graphic layers to the plot with grammar of graphics to create fully annotated phylomorphospaces. It also provide some utilities to help interpret evolutionary patterns.


.. conda:package:: bioconductor-ggtreespace

   |downloads_bioconductor-ggtreespace| |docker_bioconductor-ggtreespace|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-interp: 
   :depends on r-phytools: 
   :depends on r-rlang: 
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

    pixi global install bioconductor-ggtreespace

to add into an existing workspace instead, run::

    pixi add bioconductor-ggtreespace

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ggtreespace

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ggtreespace

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ggtreespace:<tag>

(see `bioconductor-ggtreespace/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ggtreespace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtreespace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggtreespace
   :alt:   (downloads)
.. |docker_bioconductor-ggtreespace| image:: https://quay.io/repository/biocontainers/bioconductor-ggtreespace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtreespace
.. _`bioconductor-ggtreespace/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtreespace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggtreespace";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtreespace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtreespace/README.html
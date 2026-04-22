:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbn2path'
.. highlight: bash

bioconductor-cbn2path
=====================

.. conda:recipe:: bioconductor-cbn2path
   :replaces_section_title:
   :noindex:

   \"CBN2Path\: an R\/Bioconductor package for the analysis of cancer progression pathways using Conjunctive Bayesian Networks

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CBN2Path.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cbn2path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbn2path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbn2path/meta.yaml>`_

   CBN2Path package provides a unifying interface to facilitate CBN\-based quantification\, analysis and visualization of cancer progression pathways.


.. conda:package:: bioconductor-cbn2path

   |downloads_bioconductor-cbn2path| |docker_bioconductor-cbn2path|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-tcgabiolinks: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-tcgabiolinks: ``>=2.38.0,<2.39.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-coda: 
   :depends on r-cowplot: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-r6: 
   :depends on r-rlang: 
   :depends on r-tidygraph: 

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

    pixi global install bioconductor-cbn2path

to add into an existing workspace instead, run::

    pixi add bioconductor-cbn2path

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cbn2path

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cbn2path

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cbn2path:<tag>

(see `bioconductor-cbn2path/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cbn2path| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbn2path.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbn2path
   :alt:   (downloads)
.. |docker_bioconductor-cbn2path| image:: https://quay.io/repository/biocontainers/bioconductor-cbn2path/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbn2path
.. _`bioconductor-cbn2path/tags`: https://quay.io/repository/biocontainers/bioconductor-cbn2path?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbn2path";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbn2path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbn2path/README.html
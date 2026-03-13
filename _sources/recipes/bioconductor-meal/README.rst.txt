:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meal'
.. highlight: bash

bioconductor-meal
=================

.. conda:recipe:: bioconductor-meal
   :replaces_section_title:
   :noindex:

   Perform methylation analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MEAL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meal/meta.yaml>`_

   Package to integrate methylation and expression data. It can also perform methylation or expression analysis alone. Several plotting functionalities are included as well as a new region analysis based on redundancy analysis. Effect of SNPs on a region can also be estimated.


.. conda:package:: bioconductor-meal

   |downloads_bioconductor-meal| |docker_bioconductor-meal|

   :versions:
      
      

      ``1.28.0-0``,  ``1.22.0-0``,  ``1.20.3-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.15.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-gviz: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends on bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends on bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-missmethyl: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-multidataset: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-ggplot2: ``>=2.0.0``
   :depends on r-isva: 
   :depends on r-matrixstats: 
   :depends on r-permute: 
   :depends on r-smartsva: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-meal

to add into an existing workspace instead, run::

    pixi add bioconductor-meal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-meal

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-meal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-meal:<tag>

(see `bioconductor-meal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-meal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meal
   :alt:   (downloads)
.. |docker_bioconductor-meal| image:: https://quay.io/repository/biocontainers/bioconductor-meal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meal
.. _`bioconductor-meal/tags`: https://quay.io/repository/biocontainers/bioconductor-meal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meal";
        var versions = ["1.28.0","1.22.0","1.20.3","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meal/README.html
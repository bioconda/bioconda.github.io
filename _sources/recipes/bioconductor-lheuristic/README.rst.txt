:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lheuristic'
.. highlight: bash

bioconductor-lheuristic
=======================

.. conda:recipe:: bioconductor-lheuristic
   :replaces_section_title:
   :noindex:

   Detection of scatterplots with L\-shaped pattern

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Lheuristic.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lheuristic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lheuristic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lheuristic/meta.yaml>`_

   The Lheuristic package identifies scatterpots that follow and L\-shaped\, negative distribution. It can be used to identify genes regulated by methylation by integration of an expression and a methylation array. The package uses two different methods to detect expression and methyaltion L\- shapped scatterplots. The parameters can be changed to detect other scatterplot patterns.


.. conda:package:: bioconductor-lheuristic

   |downloads_bioconductor-lheuristic| |docker_bioconductor-lheuristic|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-energy: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-hmisc: 

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

    pixi global install bioconductor-lheuristic

to add into an existing workspace instead, run::

    pixi add bioconductor-lheuristic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lheuristic

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lheuristic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lheuristic:<tag>

(see `bioconductor-lheuristic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lheuristic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lheuristic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lheuristic
   :alt:   (downloads)
.. |docker_bioconductor-lheuristic| image:: https://quay.io/repository/biocontainers/bioconductor-lheuristic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lheuristic
.. _`bioconductor-lheuristic/tags`: https://quay.io/repository/biocontainers/bioconductor-lheuristic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lheuristic";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lheuristic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lheuristic/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gesper'
.. highlight: bash

bioconductor-gesper
===================

.. conda:recipe:: bioconductor-gesper
   :replaces_section_title:
   :noindex:

   Gene\-Specific Phenotype EstimatoR

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gespeR.html
   :license: GPL-3
   :recipe: /`bioconductor-gesper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gesper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gesper/meta.yaml>`_

   Estimates gene\-specific phenotypes from off\-target confounded RNAi screens. The phenotype of each siRNA is modeled based on on\-targeted and off\-targeted genes\, using a regularized linear regression model.


.. conda:package:: bioconductor-gesper

   |downloads_bioconductor-gesper| |docker_bioconductor-gesper|

   :versions:
      
      

      ``1.34.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-cellhts2: ``>=2.66.0,<2.67.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-matrix: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-gesper

to add into an existing workspace instead, run::

    pixi add bioconductor-gesper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gesper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gesper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gesper:<tag>

(see `bioconductor-gesper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gesper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gesper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gesper
   :alt:   (downloads)
.. |docker_bioconductor-gesper| image:: https://quay.io/repository/biocontainers/bioconductor-gesper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gesper
.. _`bioconductor-gesper/tags`: https://quay.io/repository/biocontainers/bioconductor-gesper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gesper";
        var versions = ["1.34.0","1.31.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gesper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gesper/README.html
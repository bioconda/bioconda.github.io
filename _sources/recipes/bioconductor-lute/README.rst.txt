:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lute'
.. highlight: bash

bioconductor-lute
=================

.. conda:recipe:: bioconductor-lute
   :replaces_section_title:
   :noindex:

   Framework for cell size scale factor normalized bulk transcriptomics deconvolution experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lute.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lute/meta.yaml>`_

   Provides a framework for adjustment on cell type size when performing bulk transcripomics deconvolution. The main framework function provides a means of reference normalization using cell size scale factors. It allows for marker selection and deconvolution using non\-negative least squares \(NNLS\) by default. The framework is extensible for other marker selection and deconvolution algorithms\, and users may reuse the generics\, methods\, and classes for these when developing new algorithms.


.. conda:package:: bioconductor-lute

   |downloads_bioconductor-lute| |docker_bioconductor-lute|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-lute

to add into an existing workspace instead, run::

    pixi add bioconductor-lute

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lute

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lute

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lute:<tag>

(see `bioconductor-lute/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lute
   :alt:   (downloads)
.. |docker_bioconductor-lute| image:: https://quay.io/repository/biocontainers/bioconductor-lute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lute
.. _`bioconductor-lute/tags`: https://quay.io/repository/biocontainers/bioconductor-lute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lute";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lute/README.html
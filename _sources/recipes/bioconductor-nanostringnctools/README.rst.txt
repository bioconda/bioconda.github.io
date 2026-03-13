:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringnctools'
.. highlight: bash

bioconductor-nanostringnctools
==============================

.. conda:recipe:: bioconductor-nanostringnctools
   :replaces_section_title:
   :noindex:

   NanoString nCounter Tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NanoStringNCTools.html
   :license: MIT
   :recipe: /`bioconductor-nanostringnctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringnctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringnctools/meta.yaml>`_

   Tools for NanoString Technologies nCounter Technology. Provides support for reading RCC files into an ExpressionSet derived object.  Also includes methods for QC and normalizaztion of NanoString data.


.. conda:package:: bioconductor-nanostringnctools

   |downloads_bioconductor-nanostringnctools| |docker_bioconductor-nanostringnctools|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggbeeswarm: 
   :depends on r-ggiraph: 
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-nanostringnctools

to add into an existing workspace instead, run::

    pixi add bioconductor-nanostringnctools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nanostringnctools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nanostringnctools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nanostringnctools:<tag>

(see `bioconductor-nanostringnctools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nanostringnctools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringnctools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringnctools
   :alt:   (downloads)
.. |docker_bioconductor-nanostringnctools| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringnctools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringnctools
.. _`bioconductor-nanostringnctools/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringnctools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanostringnctools";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringnctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringnctools/README.html
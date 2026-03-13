:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseehex'
.. highlight: bash

bioconductor-iseehex
====================

.. conda:recipe:: bioconductor-iseehex
   :replaces_section_title:
   :noindex:

   iSEE extension for summarising data points in hexagonal bins

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEhex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseehex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehex/meta.yaml>`_

   This package provides panels summarising data points in hexagonal bins for \`iSEE\`. It is part of \`iSEEu\`\, the iSEE universe of panels that extend the \`iSEE\` package.


.. conda:package:: bioconductor-iseehex

   |downloads_bioconductor-iseehex| |docker_bioconductor-iseehex|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-isee: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-hexbin: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-iseehex

to add into an existing workspace instead, run::

    pixi add bioconductor-iseehex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iseehex

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iseehex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iseehex:<tag>

(see `bioconductor-iseehex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iseehex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseehex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseehex
   :alt:   (downloads)
.. |docker_bioconductor-iseehex| image:: https://quay.io/repository/biocontainers/bioconductor-iseehex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseehex
.. _`bioconductor-iseehex/tags`: https://quay.io/repository/biocontainers/bioconductor-iseehex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseehex";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseehex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseehex/README.html
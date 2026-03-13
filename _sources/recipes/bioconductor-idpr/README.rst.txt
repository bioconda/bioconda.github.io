:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idpr'
.. highlight: bash

bioconductor-idpr
=================

.. conda:recipe:: bioconductor-idpr
   :replaces_section_title:
   :noindex:

   Profiling and Analyzing Intrinsically Disordered Proteins in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/idpr.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-idpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idpr/meta.yaml>`_

   ‘idpr’ aims to integrate tools for the computational analysis of intrinsically disordered proteins \(IDPs\) within R. This package is used to identify known characteristics of IDPs for a sequence of interest with easily reported and dynamic results. Additionally\, this package includes tools for IDP\-based sequence analysis to be used in conjunction with other R packages. Described in McFadden WM \& Yanowitz JL \(2022\). \"idpr\: A package for profiling and analyzing Intrinsically Disordered Proteins in R.\" PloS one\, 17\(4\)\, e0266929. \<https\:\/\/doi.org\/10.1371\/journal.pone.0266929\>.


.. conda:package:: bioconductor-idpr

   |downloads_bioconductor-idpr| |docker_bioconductor-idpr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.007-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=0.8.5``
   :depends on r-ggplot2: ``>=3.3.0``
   :depends on r-jsonlite: ``>=1.6.1``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-rlang: ``>=0.4.6``

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

    pixi global install bioconductor-idpr

to add into an existing workspace instead, run::

    pixi add bioconductor-idpr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-idpr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-idpr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-idpr:<tag>

(see `bioconductor-idpr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-idpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idpr
   :alt:   (downloads)
.. |docker_bioconductor-idpr| image:: https://quay.io/repository/biocontainers/bioconductor-idpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idpr
.. _`bioconductor-idpr/tags`: https://quay.io/repository/biocontainers/bioconductor-idpr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-idpr";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idpr/README.html
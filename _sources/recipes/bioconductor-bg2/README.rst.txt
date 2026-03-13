:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bg2'
.. highlight: bash

bioconductor-bg2
================

.. conda:recipe:: bioconductor-bg2
   :replaces_section_title:
   :noindex:

   Performs Bayesian GWAS analysis for non\-Gaussian data using BG2

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BG2.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bg2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bg2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bg2/meta.yaml>`_

   This package is built to perform GWAS analysis for non\-Gaussian data using BG2. The BG2 method uses penalized quasi\-likelihood along with nonlocal priors in a two step manner to identify SNPs in GWAS analysis. The research related to this package was supported in part by National Science Foundation awards DMS 1853549 and DMS 2054173.


.. conda:package:: bioconductor-bg2

   |downloads_bioconductor-bg2| |docker_bioconductor-bg2|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: ``>=6.0-86``
   :depends on r-ga: ``>=3.2``
   :depends on r-mass: ``>=7.3-58.1``
   :depends on r-matrix: ``>=1.2-18``
   :depends on r-memoise: ``>=1.1.0``

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

    pixi global install bioconductor-bg2

to add into an existing workspace instead, run::

    pixi add bioconductor-bg2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bg2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bg2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bg2:<tag>

(see `bioconductor-bg2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bg2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bg2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bg2
   :alt:   (downloads)
.. |docker_bioconductor-bg2| image:: https://quay.io/repository/biocontainers/bioconductor-bg2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bg2
.. _`bioconductor-bg2/tags`: https://quay.io/repository/biocontainers/bioconductor-bg2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bg2";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bg2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bg2/README.html
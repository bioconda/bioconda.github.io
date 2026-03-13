:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseede'
.. highlight: bash

bioconductor-iseede
===================

.. conda:recipe:: bioconductor-iseede
   :replaces_section_title:
   :noindex:

   iSEE extension for panels related to differential expression analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEde.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseede <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseede>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseede/meta.yaml>`_

   This package contains diverse functionality to extend the usage of the iSEE package\, including additional classes for the panels or modes facilitating the analysis of differential expression results. This package does not perform differential expression. Instead\, it provides methods to embed precomputed differential expression results in a SummarizedExperiment object\, in a manner that is compatible with interactive visualisation in iSEE applications.


.. conda:package:: bioconductor-iseede

   |downloads_bioconductor-iseede| |docker_bioconductor-iseede|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-isee: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
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

    pixi global install bioconductor-iseede

to add into an existing workspace instead, run::

    pixi add bioconductor-iseede

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iseede

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iseede

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iseede:<tag>

(see `bioconductor-iseede/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iseede| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseede.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseede
   :alt:   (downloads)
.. |docker_bioconductor-iseede| image:: https://quay.io/repository/biocontainers/bioconductor-iseede/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseede
.. _`bioconductor-iseede/tags`: https://quay.io/repository/biocontainers/bioconductor-iseede?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseede";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseede/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseede/README.html
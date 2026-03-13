:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qtlexperiment'
.. highlight: bash

bioconductor-qtlexperiment
==========================

.. conda:recipe:: bioconductor-qtlexperiment
   :replaces_section_title:
   :noindex:

   S4 classes for QTL summary statistics and metadata

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/QTLExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-qtlexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlexperiment/meta.yaml>`_

   QLTExperiment defines an S4 class for storing and manipulating summary statistics from QTL mapping experiments in one or more states. It is based on the \'SummarizedExperiment\' class and contains functions for creating\, merging\, and subsetting objects. \'QTLExperiment\' also stores experiment metadata and has checks in place to ensure that transformations apply correctly.


.. conda:package:: bioconductor-qtlexperiment

   |downloads_bioconductor-qtlexperiment| |docker_bioconductor-qtlexperiment|

   :versions:
      
      

      ``2.2.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-ashr: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-collapse: 
   :depends on r-dplyr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-vroom: 

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

    pixi global install bioconductor-qtlexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-qtlexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qtlexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qtlexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qtlexperiment:<tag>

(see `bioconductor-qtlexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qtlexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qtlexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qtlexperiment
   :alt:   (downloads)
.. |docker_bioconductor-qtlexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-qtlexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qtlexperiment
.. _`bioconductor-qtlexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-qtlexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qtlexperiment";
        var versions = ["2.2.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qtlexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qtlexperiment/README.html
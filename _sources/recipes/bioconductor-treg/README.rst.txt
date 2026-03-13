:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treg'
.. highlight: bash

bioconductor-treg
=================

.. conda:recipe:: bioconductor-treg
   :replaces_section_title:
   :noindex:

   Tools for finding Total RNA Expression Genes in single nucleus RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TREG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treg/meta.yaml>`_

   RNA abundance and cell size parameters could improve RNA\-seq deconvolution algorithms to more accurately estimate cell type proportions given the different cell type transcription activity levels. A Total RNA Expression Gene \(TREG\) can facilitate estimating total RNA content using single molecule fluorescent in situ hybridization \(smFISH\). We developed a data\-driven approach using a measure of expression invariance to find candidate TREGs in postmortem human brain single nucleus RNA\-seq. This R package implements the method for identifying candidate TREGs from snRNA\-seq data.


.. conda:package:: bioconductor-treg

   |downloads_bioconductor-treg| |docker_bioconductor-treg|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-rafalib: 

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

    pixi global install bioconductor-treg

to add into an existing workspace instead, run::

    pixi add bioconductor-treg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-treg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-treg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-treg:<tag>

(see `bioconductor-treg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-treg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treg
   :alt:   (downloads)
.. |docker_bioconductor-treg| image:: https://quay.io/repository/biocontainers/bioconductor-treg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treg
.. _`bioconductor-treg/tags`: https://quay.io/repository/biocontainers/bioconductor-treg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treg";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treg/README.html
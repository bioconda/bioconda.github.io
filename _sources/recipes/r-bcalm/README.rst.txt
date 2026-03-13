:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcalm'
.. highlight: bash

r-bcalm
=======

.. conda:recipe:: r-bcalm
   :replaces_section_title:
   :noindex:

   Barcode Analysis using linear models for MPRA data

   :homepage: https://github.com/kircherlab/BCalm
   :license: MIT / MIT
   :recipe: /`r-bcalm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcalm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcalm/meta.yaml>`_

   BCalm is a package that provides a modification from the mpralm package\, 
   an R package that provides tools for differential analysis in MPRA studies.
   BCalm allows users to use individual barcodes as model input. It provides 
   tools for data management\, count preprocessing\, and differential analysis 
   in massively parallel reporter assays \(MPRA\).



.. conda:package:: r-bcalm

   |downloads_r-bcalm| |docker_r-bcalm|

   :versions:
      
      

      ``0.100.0-0``,  ``0.99.0-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-delayedarray: 
   :depends on bioconductor-genomeinfodb: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-limma: 
   :depends on bioconductor-mpra: 
   :depends on bioconductor-s4vectors: 
   :depends on bioconductor-summarizedexperiment: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-scales: 
   :depends on r-statmod: 
   :depends on r-tidyr: 

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

    pixi global install r-bcalm

to add into an existing workspace instead, run::

    pixi add r-bcalm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bcalm

Alternatively, to install into a new environment, run::

    conda create -n envname r-bcalm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bcalm:<tag>

(see `r-bcalm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bcalm| image:: https://img.shields.io/conda/dn/bioconda/r-bcalm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcalm
   :alt:   (downloads)
.. |docker_r-bcalm| image:: https://quay.io/repository/biocontainers/r-bcalm/status
   :target: https://quay.io/repository/biocontainers/r-bcalm
.. _`r-bcalm/tags`: https://quay.io/repository/biocontainers/r-bcalm?tab=tags


.. raw:: html

    <script>
        var package = "r-bcalm";
        var versions = ["0.100.0","0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcalm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcalm/README.html
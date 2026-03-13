:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mgsz'
.. highlight: bash

r-mgsz
======

.. conda:recipe:: r-mgsz
   :replaces_section_title:
   :noindex:

   Performs gene set analysis based on GSZ scoring function and asymptotic p\-value. It is different from GSZ in that it implements asymptotic p\-values instead of empirical p\-values. Asymptotic p\-values are calculated by fitting suitable distribution model to the null distribution. Unlike empirical p\-values\, resolution of asymptotic p\-values are independent of the number of permutations and hence requires considerably fewer permutations. In addition\, this package allows gene set analysis with seven other popular gene set analysis methods.

   :homepage: https://CRAN.R-project.org/package=mGSZ
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-mgsz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mgsz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mgsz/meta.yaml>`_

   


.. conda:package:: r-mgsz

   |downloads_r-mgsz| |docker_r-mgsz|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-gsa: 
   :depends on r-ismev: 
   :depends on r-mass: 

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

    pixi global install r-mgsz

to add into an existing workspace instead, run::

    pixi add r-mgsz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mgsz

Alternatively, to install into a new environment, run::

    conda create -n envname r-mgsz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mgsz:<tag>

(see `r-mgsz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mgsz| image:: https://img.shields.io/conda/dn/bioconda/r-mgsz.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mgsz
   :alt:   (downloads)
.. |docker_r-mgsz| image:: https://quay.io/repository/biocontainers/r-mgsz/status
   :target: https://quay.io/repository/biocontainers/r-mgsz
.. _`r-mgsz/tags`: https://quay.io/repository/biocontainers/r-mgsz?tab=tags


.. raw:: html

    <script>
        var package = "r-mgsz";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mgsz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mgsz/README.html
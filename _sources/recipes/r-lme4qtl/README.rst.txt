:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lme4qtl'
.. highlight: bash

r-lme4qtl
=========

.. conda:recipe:: r-lme4qtl
   :replaces_section_title:
   :noindex:

   Linear mixed models \(lme4\) with flexible covariance structure for qtl and association analysis.

   :homepage: https://CRAN.R-project.org/package=lme4qtl
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-lme4qtl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lme4qtl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lme4qtl/meta.yaml>`_

   


.. conda:package:: r-lme4qtl

   |downloads_r-lme4qtl| |docker_r-lme4qtl|

   :versions:
      
      

      ``0.1.10-8``,  ``0.1.10-7``,  ``0.1.10-6``,  ``0.1.10-5``,  ``0.1.10-4``,  ``0.1.10-3``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-ggplot2: 
   :depends on r-kinship2: 
   :depends on r-lme4: 
   :depends on r-matrix: 
   :depends on r-plyr: 
   :depends on r-tibble: 

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

    pixi global install r-lme4qtl

to add into an existing workspace instead, run::

    pixi add r-lme4qtl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-lme4qtl

Alternatively, to install into a new environment, run::

    conda create -n envname r-lme4qtl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-lme4qtl:<tag>

(see `r-lme4qtl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-lme4qtl| image:: https://img.shields.io/conda/dn/bioconda/r-lme4qtl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lme4qtl
   :alt:   (downloads)
.. |docker_r-lme4qtl| image:: https://quay.io/repository/biocontainers/r-lme4qtl/status
   :target: https://quay.io/repository/biocontainers/r-lme4qtl
.. _`r-lme4qtl/tags`: https://quay.io/repository/biocontainers/r-lme4qtl?tab=tags


.. raw:: html

    <script>
        var package = "r-lme4qtl";
        var versions = ["0.1.10","0.1.10","0.1.10","0.1.10","0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lme4qtl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lme4qtl/README.html
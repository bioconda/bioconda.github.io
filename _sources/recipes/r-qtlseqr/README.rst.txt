:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qtlseqr'
.. highlight: bash

r-qtlseqr
=========

.. conda:recipe:: r-qtlseqr
   :replaces_section_title:
   :noindex:

   QTLseqr is an R package for QTL mapping using NGS Bulk Segregant Analysis.

   :homepage: https://github.com/bmansfeld/QTLseqr
   :license: GPL (>= 3)
   :recipe: /`r-qtlseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtlseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtlseqr/meta.yaml>`_

   


.. conda:package:: r-qtlseqr

   |downloads_r-qtlseqr| |docker_r-qtlseqr|

   :versions:
      
      

      ``0.7.5.2-7``,  ``0.7.5.2-6``,  ``0.7.5.2-5``,  ``0.7.5.2-4``,  ``0.7.5.2-3``,  ``0.7.5.2-2``,  ``0.7.5.2-1``,  ``0.7.5.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gtools: 
   :depends on r-locfit: 
   :depends on r-mass: 
   :depends on r-modeest: 
   :depends on r-rcpp: 
   :depends on r-readr: 
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

    pixi global install r-qtlseqr

to add into an existing workspace instead, run::

    pixi add r-qtlseqr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-qtlseqr

Alternatively, to install into a new environment, run::

    conda create -n envname r-qtlseqr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-qtlseqr:<tag>

(see `r-qtlseqr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-qtlseqr| image:: https://img.shields.io/conda/dn/bioconda/r-qtlseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qtlseqr
   :alt:   (downloads)
.. |docker_r-qtlseqr| image:: https://quay.io/repository/biocontainers/r-qtlseqr/status
   :target: https://quay.io/repository/biocontainers/r-qtlseqr
.. _`r-qtlseqr/tags`: https://quay.io/repository/biocontainers/r-qtlseqr?tab=tags


.. raw:: html

    <script>
        var package = "r-qtlseqr";
        var versions = ["0.7.5.2","0.7.5.2","0.7.5.2","0.7.5.2","0.7.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qtlseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qtlseqr/README.html
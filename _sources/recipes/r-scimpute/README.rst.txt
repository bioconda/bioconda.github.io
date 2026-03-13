:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scimpute'
.. highlight: bash

r-scimpute
==========

.. conda:recipe:: r-scimpute
   :replaces_section_title:
   :noindex:

   scImpute is accurate and robust imputation of single\-cell RNA sequencing data.

   :homepage: https://github.com/Vivianstats/scImpute
   :license: GPL / GPL
   :recipe: /`r-scimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-018-03405-7`

   


.. conda:package:: r-scimpute

   |downloads_r-scimpute| |docker_r-scimpute|

   :versions:
      
      

      ``0.0.8-6``,  ``0.0.8-5``,  ``0.0.8-4``,  ``0.0.8-3``,  ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.6-1``,  ``0.0.6-0``

      

   
   :depends on parallel: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-devtools: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-kernlab: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-penalized: 
   :depends on r-rsvd: 

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

    pixi global install r-scimpute

to add into an existing workspace instead, run::

    pixi add r-scimpute

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scimpute

Alternatively, to install into a new environment, run::

    conda create -n envname r-scimpute

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scimpute:<tag>

(see `r-scimpute/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scimpute| image:: https://img.shields.io/conda/dn/bioconda/r-scimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scimpute
   :alt:   (downloads)
.. |docker_r-scimpute| image:: https://quay.io/repository/biocontainers/r-scimpute/status
   :target: https://quay.io/repository/biocontainers/r-scimpute
.. _`r-scimpute/tags`: https://quay.io/repository/biocontainers/r-scimpute?tab=tags


.. raw:: html

    <script>
        var package = "r-scimpute";
        var versions = ["0.0.8","0.0.8","0.0.8","0.0.8","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scimpute/README.html
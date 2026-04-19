:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bayesprism'
.. highlight: bash

r-bayesprism
============

.. conda:recipe:: r-bayesprism
   :replaces_section_title:
   :noindex:

   BayesPrism\: Bayesian cell type and gene expression deconvolution

   :homepage: https://github.com/omnideconv/BayesPrism
   :license: GPL / GPL-3
   :recipe: /`r-bayesprism <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bayesprism>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bayesprism/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s43018-022-00356-3`

   


.. conda:package:: r-bayesprism

   |downloads_r-bayesprism| |docker_r-bayesprism|

   :versions:
      
      

      ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-scran: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-gplots: 
   :depends on r-knitr: 
   :depends on r-nmf: 
   :depends on r-r.utils: 
   :depends on r-snowfall: 

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

    pixi global install r-bayesprism

to add into an existing workspace instead, run::

    pixi add r-bayesprism

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bayesprism

Alternatively, to install into a new environment, run::

    conda create -n envname r-bayesprism

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bayesprism:<tag>

(see `r-bayesprism/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bayesprism| image:: https://img.shields.io/conda/dn/bioconda/r-bayesprism.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bayesprism
   :alt:   (downloads)
.. |docker_r-bayesprism| image:: https://quay.io/repository/biocontainers/r-bayesprism/status
   :target: https://quay.io/repository/biocontainers/r-bayesprism
.. _`r-bayesprism/tags`: https://quay.io/repository/biocontainers/r-bayesprism?tab=tags


.. raw:: html

    <script>
        var package = "r-bayesprism";
        var versions = ["0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bayesprism/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bayesprism/README.html
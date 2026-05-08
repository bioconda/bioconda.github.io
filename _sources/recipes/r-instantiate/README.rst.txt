:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-instantiate'
.. highlight: bash

r-instantiate
=============

.. conda:recipe:: r-instantiate
   :replaces_section_title:
   :noindex:

   Similar to \'rstantools\' for \'rstan\'\, the \'instantiate\' package builds pre\-compiled \'CmdStan\' models into CRAN\-ready statistical modeling R packages. The models compile once during installation\, the executables live inside the file systems of their respective packages\, and users have the full power and convenience of \'cmdstanr\' without any additional compilation after package installation. This approach saves time and helps R package developers migrate from \'rstan\' to the more modern \'cmdstanr\'. Packages \'rstantools\'\, \'cmdstanr\'\, \'stannis\'\, and \'stanapi\' are similar Stan clients with different objectives.

   :homepage: https://wlandau.github.io/instantiate/, https://github.com/wlandau/instantiate
   :license: MIT / MIT
   :recipe: /`r-instantiate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-instantiate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-instantiate/meta.yaml>`_

   


.. conda:package:: r-instantiate

   |downloads_r-instantiate| |docker_r-instantiate|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-callr: 
   :depends on r-fs: 
   :depends on r-rlang: 

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

    pixi global install r-instantiate

to add into an existing workspace instead, run::

    pixi add r-instantiate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-instantiate

Alternatively, to install into a new environment, run::

    conda create -n envname r-instantiate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-instantiate:<tag>

(see `r-instantiate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-instantiate| image:: https://img.shields.io/conda/dn/bioconda/r-instantiate.svg?style=flat
   :target: https://anaconda.org/bioconda/r-instantiate
   :alt:   (downloads)
.. |docker_r-instantiate| image:: https://quay.io/repository/biocontainers/r-instantiate/status
   :target: https://quay.io/repository/biocontainers/r-instantiate
.. _`r-instantiate/tags`: https://quay.io/repository/biocontainers/r-instantiate?tab=tags


.. raw:: html

    <script>
        var package = "r-instantiate";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-instantiate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-instantiate/README.html
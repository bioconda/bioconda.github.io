:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pore'
.. highlight: bash

r-pore
======

.. conda:recipe:: r-pore
   :replaces_section_title:
   :noindex:

   An R package to enable organisation and visualisation of nanopore sequencing data

   :homepage: http://sourceforge.net/projects/rpore/
   :license: BSD
   :recipe: /`r-pore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pore/meta.yaml>`_

   


.. conda:package:: r-pore

   |downloads_r-pore| |docker_r-pore|

   :versions:
      
      

      ``0.24-7``,  ``0.24-6``,  ``0.24-5``,  ``0.24-4``,  ``0.24-3``,  ``0.24-2``,  ``0.24-0``,  ``0.16-0``

      

   
   :depends on bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends on parallel: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-bit64: 
   :depends on r-data.table: 
   :depends on r-shiny: 
   :depends on r-svdialogs: 

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

    pixi global install r-pore

to add into an existing workspace instead, run::

    pixi add r-pore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pore

Alternatively, to install into a new environment, run::

    conda create -n envname r-pore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pore:<tag>

(see `r-pore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pore| image:: https://img.shields.io/conda/dn/bioconda/r-pore.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pore
   :alt:   (downloads)
.. |docker_r-pore| image:: https://quay.io/repository/biocontainers/r-pore/status
   :target: https://quay.io/repository/biocontainers/r-pore
.. _`r-pore/tags`: https://quay.io/repository/biocontainers/r-pore?tab=tags


.. raw:: html

    <script>
        var package = "r-pore";
        var versions = ["0.24","0.24","0.24","0.24","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pore/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mmcpcounter'
.. highlight: bash

r-mmcpcounter
=============

.. conda:recipe:: r-mmcpcounter
   :replaces_section_title:
   :noindex:

   Murine version of MCP\-counter\, a tool to estimate the immune and stromal composition of heterogeneous tissue\, from transcriptomic data 

   :homepage: https://github.com/cit-bioinfo/mMCP-counter
   :license: GPL / GPL-3
   :recipe: /`r-mmcpcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmcpcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mmcpcounter/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-020-00783-w`

   


.. conda:package:: r-mmcpcounter

   |downloads_r-mmcpcounter| |docker_r-mmcpcounter|

   :versions:
      
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-mmcpcounter

to add into an existing workspace instead, run::

    pixi add r-mmcpcounter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mmcpcounter

Alternatively, to install into a new environment, run::

    conda create -n envname r-mmcpcounter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mmcpcounter:<tag>

(see `r-mmcpcounter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mmcpcounter| image:: https://img.shields.io/conda/dn/bioconda/r-mmcpcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mmcpcounter
   :alt:   (downloads)
.. |docker_r-mmcpcounter| image:: https://quay.io/repository/biocontainers/r-mmcpcounter/status
   :target: https://quay.io/repository/biocontainers/r-mmcpcounter
.. _`r-mmcpcounter/tags`: https://quay.io/repository/biocontainers/r-mmcpcounter?tab=tags


.. raw:: html

    <script>
        var package = "r-mmcpcounter";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mmcpcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mmcpcounter/README.html
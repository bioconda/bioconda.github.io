:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scran-cli'
.. highlight: bash

scran-cli
=========

.. conda:recipe:: scran-cli
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the scran R package. Scran implements functions for low\-level analyses of single\-cell RNA\-seq data.Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/scran-cli
   :license: Apache / Apache 2
   :recipe: /`scran-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scran-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scran-cli/meta.yaml>`_

   


.. conda:package:: scran-cli

   |downloads_scran-cli| |docker_scran-cli|

   :versions:
      
      

      ``0.0.1-0``,  ``v0.0.1-1``,  ``v0.0.1-0``

      

   
   :depends on bioconductor-scran: ``1.12.1.*``
   :depends on dropletutils-scripts: 
   :depends on r-igraph: 
   :depends on r-optparse: 
   :depends on r-workflowscriptscommon: 

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

    pixi global install scran-cli

to add into an existing workspace instead, run::

    pixi add scran-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scran-cli

Alternatively, to install into a new environment, run::

    conda create -n envname scran-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scran-cli:<tag>

(see `scran-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scran-cli| image:: https://img.shields.io/conda/dn/bioconda/scran-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scran-cli
   :alt:   (downloads)
.. |docker_scran-cli| image:: https://quay.io/repository/biocontainers/scran-cli/status
   :target: https://quay.io/repository/biocontainers/scran-cli
.. _`scran-cli/tags`: https://quay.io/repository/biocontainers/scran-cli?tab=tags


.. raw:: html

    <script>
        var package = "scran-cli";
        var versions = ["0.0.1","v0.0.1","v0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scran-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scran-cli/README.html
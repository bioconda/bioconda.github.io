:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'garnett-cli'
.. highlight: bash

garnett-cli
===========

.. conda:recipe:: garnett-cli
   :replaces_section_title:
   :noindex:

   Collection of wrapper scripts for the Garnett scRNAseq cell type classification tool.

   :homepage: https://github.com/ebi-gene-expression-group/garnett-cli
   :license: Apache / Apache-2.0
   :recipe: /`garnett-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnett-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnett-cli/meta.yaml>`_

   


.. conda:package:: garnett-cli

   |downloads_garnett-cli| |docker_garnett-cli|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``v0.0.1-0``

      

   
   :depends on bioconductor-org.hs.eg.db: 
   :depends on bioconductor-org.mm.eg.db: 
   :depends on monocle3-cli: ``0.0.7.*``
   :depends on r-garnett: ``0.2.8.*``
   :depends on r-glmnet: ``2.0_18.*``
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

    pixi global install garnett-cli

to add into an existing workspace instead, run::

    pixi add garnett-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install garnett-cli

Alternatively, to install into a new environment, run::

    conda create -n envname garnett-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/garnett-cli:<tag>

(see `garnett-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_garnett-cli| image:: https://img.shields.io/conda/dn/bioconda/garnett-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/garnett-cli
   :alt:   (downloads)
.. |docker_garnett-cli| image:: https://quay.io/repository/biocontainers/garnett-cli/status
   :target: https://quay.io/repository/biocontainers/garnett-cli
.. _`garnett-cli/tags`: https://quay.io/repository/biocontainers/garnett-cli?tab=tags


.. raw:: html

    <script>
        var package = "garnett-cli";
        var versions = ["0.0.5","0.0.5","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/garnett-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/garnett-cli/README.html
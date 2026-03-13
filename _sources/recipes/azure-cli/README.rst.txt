:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'azure-cli'
.. highlight: bash

azure-cli
=========

.. conda:recipe:: azure-cli
   :replaces_section_title:
   :noindex:

   Microsoft Azure Cross Platform Command Line

   :homepage: https://github.com/azure/azure-xplat-cli
   :license: Apache v2.0
   :recipe: /`azure-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/azure-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/azure-cli/meta.yaml>`_

   


.. conda:package:: azure-cli

   |downloads_azure-cli| |docker_azure-cli|

   :versions:
      
      

      ``0.10.3-0``

      

   
   :depends on nodejs: 

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

    pixi global install azure-cli

to add into an existing workspace instead, run::

    pixi add azure-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install azure-cli

Alternatively, to install into a new environment, run::

    conda create -n envname azure-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/azure-cli:<tag>

(see `azure-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_azure-cli| image:: https://img.shields.io/conda/dn/bioconda/azure-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/azure-cli
   :alt:   (downloads)
.. |docker_azure-cli| image:: https://quay.io/repository/biocontainers/azure-cli/status
   :target: https://quay.io/repository/biocontainers/azure-cli
.. _`azure-cli/tags`: https://quay.io/repository/biocontainers/azure-cli?tab=tags


.. raw:: html

    <script>
        var package = "azure-cli";
        var versions = ["0.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/azure-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/azure-cli/README.html
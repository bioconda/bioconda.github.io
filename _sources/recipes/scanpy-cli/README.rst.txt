:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanpy-cli'
.. highlight: bash

scanpy-cli
==========

.. conda:recipe:: scanpy-cli
   :replaces_section_title:
   :noindex:

   CLI for Scanpy

   :homepage: https://github.com/nictru/scanpy-cli
   :license: MIT
   :recipe: /`scanpy-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanpy-cli/meta.yaml>`_

   


.. conda:package:: scanpy-cli

   |downloads_scanpy-cli| |docker_scanpy-cli|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.4-0``

      

   
   :depends on leidenalg: ``>=0.10.2``
   :depends on python: ``>=3.12``
   :depends on python-igraph: ``>=0.11.8``
   :depends on rich-click: ``>=1.8.8``
   :depends on scanpy: ``>=1.11.0``

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

    pixi global install scanpy-cli

to add into an existing workspace instead, run::

    pixi add scanpy-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scanpy-cli

Alternatively, to install into a new environment, run::

    conda create -n envname scanpy-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scanpy-cli:<tag>

(see `scanpy-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scanpy-cli| image:: https://img.shields.io/conda/dn/bioconda/scanpy-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scanpy-cli
   :alt:   (downloads)
.. |docker_scanpy-cli| image:: https://quay.io/repository/biocontainers/scanpy-cli/status
   :target: https://quay.io/repository/biocontainers/scanpy-cli
.. _`scanpy-cli/tags`: https://quay.io/repository/biocontainers/scanpy-cli?tab=tags


.. raw:: html

    <script>
        var package = "scanpy-cli";
        var versions = ["0.2.0","0.1.6","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanpy-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanpy-cli/README.html
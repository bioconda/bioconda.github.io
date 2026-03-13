:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snk-cli'
.. highlight: bash

snk-cli
=======

.. conda:recipe:: snk-cli
   :replaces_section_title:
   :noindex:

   Dynamically generate CLIs from Snakemake configuration files

   :homepage: https://github.com/wytamma/snk-cli
   :license: MIT
   :recipe: /`snk-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snk-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snk-cli/meta.yaml>`_

   


.. conda:package:: snk-cli

   |downloads_snk-cli| |docker_snk-cli|

   :versions:
      
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.2-0``

      

   
   :depends on ascii-art: ``>=5.9,<6.dev0``
   :depends on datrie: ``>=0.8.2``
   :depends on graphviz: ``>=2.38.0``
   :depends on makefun: ``>=1.15,<2.dev0``
   :depends on pulp: ``<2.8``
   :depends on python: ``>=3.8``
   :depends on rich: ``>=10.11.0``
   :depends on shellingham: ``>=1.3.0``
   :depends on snakemake-minimal: ``>=7``
   :depends on typer: ``>=0.9,<1.dev0``

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

    pixi global install snk-cli

to add into an existing workspace instead, run::

    pixi add snk-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snk-cli

Alternatively, to install into a new environment, run::

    conda create -n envname snk-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snk-cli:<tag>

(see `snk-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snk-cli| image:: https://img.shields.io/conda/dn/bioconda/snk-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/snk-cli
   :alt:   (downloads)
.. |docker_snk-cli| image:: https://quay.io/repository/biocontainers/snk-cli/status
   :target: https://quay.io/repository/biocontainers/snk-cli
.. _`snk-cli/tags`: https://quay.io/repository/biocontainers/snk-cli?tab=tags


.. raw:: html

    <script>
        var package = "snk-cli";
        var versions = ["0.7.2","0.7.1","0.7.0","0.7.0","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snk-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snk-cli/README.html
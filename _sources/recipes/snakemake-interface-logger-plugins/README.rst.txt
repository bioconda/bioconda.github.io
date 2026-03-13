:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-logger-plugins'
.. highlight: bash

snakemake-interface-logger-plugins
==================================

.. conda:recipe:: snakemake-interface-logger-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its logger plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-logger-plugins
   :license: MIT
   :recipe: /`snakemake-interface-logger-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-logger-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-logger-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-logger-plugins

   |downloads_snakemake-interface-logger-plugins| |docker_snakemake-interface-logger-plugins|

   :versions:
      
      

      ``2.0.0-0``,  ``1.2.4-0``,  ``1.2.3-0``

      

   
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on snakemake-interface-common: ``>=1.17.4,<2.0.0``

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

    pixi global install snakemake-interface-logger-plugins

to add into an existing workspace instead, run::

    pixi add snakemake-interface-logger-plugins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-interface-logger-plugins

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-interface-logger-plugins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-interface-logger-plugins:<tag>

(see `snakemake-interface-logger-plugins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-interface-logger-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-logger-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-logger-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-logger-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-logger-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-logger-plugins
.. _`snakemake-interface-logger-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-logger-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-logger-plugins";
        var versions = ["2.0.0","1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-logger-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-logger-plugins/README.html
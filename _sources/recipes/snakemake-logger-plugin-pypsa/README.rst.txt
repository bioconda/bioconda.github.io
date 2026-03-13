:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-logger-plugin-pypsa'
.. highlight: bash

snakemake-logger-plugin-pypsa
=============================

.. conda:recipe:: snakemake-logger-plugin-pypsa
   :replaces_section_title:
   :noindex:

   A PyPSA\-Eur logger plugin for Snakemake

   :homepage: https://github.com/PyPSA/snakemake-logger-plugin-pypsa
   :license: MIT
   :recipe: /`snakemake-logger-plugin-pypsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-pypsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-pypsa/meta.yaml>`_

   


.. conda:package:: snakemake-logger-plugin-pypsa

   |downloads_snakemake-logger-plugin-pypsa| |docker_snakemake-logger-plugin-pypsa|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on python: ``>=3.11``
   :depends on snakemake-interface-logger-plugins: ``>=1.2.0,<2``

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

    pixi global install snakemake-logger-plugin-pypsa

to add into an existing workspace instead, run::

    pixi add snakemake-logger-plugin-pypsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-logger-plugin-pypsa

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-logger-plugin-pypsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-logger-plugin-pypsa:<tag>

(see `snakemake-logger-plugin-pypsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-logger-plugin-pypsa| image:: https://img.shields.io/conda/dn/bioconda/snakemake-logger-plugin-pypsa.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-logger-plugin-pypsa
   :alt:   (downloads)
.. |docker_snakemake-logger-plugin-pypsa| image:: https://quay.io/repository/biocontainers/snakemake-logger-plugin-pypsa/status
   :target: https://quay.io/repository/biocontainers/snakemake-logger-plugin-pypsa
.. _`snakemake-logger-plugin-pypsa/tags`: https://quay.io/repository/biocontainers/snakemake-logger-plugin-pypsa?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-logger-plugin-pypsa";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-logger-plugin-pypsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-logger-plugin-pypsa/README.html
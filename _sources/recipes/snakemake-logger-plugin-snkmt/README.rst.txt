:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-logger-plugin-snkmt'
.. highlight: bash

snakemake-logger-plugin-snkmt
=============================

.. conda:recipe:: snakemake-logger-plugin-snkmt
   :replaces_section_title:
   :noindex:

   Snakemake logger plugin that writes logs to SQLite database.

   :homepage: https://github.com/cademirch/snakemake-logger-plugin-snkmt
   :license: MIT / MIT
   :recipe: /`snakemake-logger-plugin-snkmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-snkmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-snkmt/meta.yaml>`_

   


.. conda:package:: snakemake-logger-plugin-snkmt

   |downloads_snakemake-logger-plugin-snkmt| |docker_snakemake-logger-plugin-snkmt|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends on python: 
   :depends on snakemake-interface-logger-plugins: ``>=2.0.0,<3.0.0``
   :depends on snkmt: ``>=0.2.3,<1.0.0``
   :depends on sqlalchemy: ``>=2.0.38,<3.0.0``

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

    pixi global install snakemake-logger-plugin-snkmt

to add into an existing workspace instead, run::

    pixi add snakemake-logger-plugin-snkmt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-logger-plugin-snkmt

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-logger-plugin-snkmt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-logger-plugin-snkmt:<tag>

(see `snakemake-logger-plugin-snkmt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-logger-plugin-snkmt| image:: https://img.shields.io/conda/dn/bioconda/snakemake-logger-plugin-snkmt.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-logger-plugin-snkmt
   :alt:   (downloads)
.. |docker_snakemake-logger-plugin-snkmt| image:: https://quay.io/repository/biocontainers/snakemake-logger-plugin-snkmt/status
   :target: https://quay.io/repository/biocontainers/snakemake-logger-plugin-snkmt
.. _`snakemake-logger-plugin-snkmt/tags`: https://quay.io/repository/biocontainers/snakemake-logger-plugin-snkmt?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-logger-plugin-snkmt";
        var versions = ["0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-logger-plugin-snkmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-logger-plugin-snkmt/README.html
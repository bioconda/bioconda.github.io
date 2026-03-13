:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-googlebatch'
.. highlight: bash

snakemake-executor-plugin-googlebatch
=====================================

.. conda:recipe:: snakemake-executor-plugin-googlebatch
   :replaces_section_title:
   :noindex:

   Snakemake executor plugin for Google Batch

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-googlebatch
   :license: MIT / MIT
   :recipe: /`snakemake-executor-plugin-googlebatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-googlebatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-googlebatch/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-googlebatch

   |downloads_snakemake-executor-plugin-googlebatch| |docker_snakemake-executor-plugin-googlebatch|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends on google-api-core: ``>=2.12.0,<3.0.0``
   :depends on google-cloud-batch: ``>=0.17.1,<0.18.0``
   :depends on google-cloud-logging: ``>=3.8.0,<4.0.0``
   :depends on google-cloud-storage: ``>=2.12.0,<3.0.0``
   :depends on jinja2: ``>=3.1.2,<4.0.0``
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on requests: ``>=2.31.0,<3.0.0``
   :depends on snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends on snakemake-interface-executor-plugins: ``>=9.0.0,<10.0.0``

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

    pixi global install snakemake-executor-plugin-googlebatch

to add into an existing workspace instead, run::

    pixi add snakemake-executor-plugin-googlebatch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-executor-plugin-googlebatch

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-executor-plugin-googlebatch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-executor-plugin-googlebatch:<tag>

(see `snakemake-executor-plugin-googlebatch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-executor-plugin-googlebatch| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-googlebatch.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-googlebatch
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-googlebatch| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-googlebatch/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-googlebatch
.. _`snakemake-executor-plugin-googlebatch/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-googlebatch?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-googlebatch";
        var versions = ["0.5.1","0.5.0","0.4.0","0.3.3","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-googlebatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-googlebatch/README.html
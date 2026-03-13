:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-htcondor'
.. highlight: bash

snakemake-executor-plugin-htcondor
==================================

.. conda:recipe:: snakemake-executor-plugin-htcondor
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to a HTCondor cluster.

   :homepage: https://github.com/jannisspeer/snakemake-executor-plugin-htcondor
   :license: MIT
   :recipe: /`snakemake-executor-plugin-htcondor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-htcondor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-htcondor/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-htcondor

   |downloads_snakemake-executor-plugin-htcondor| |docker_snakemake-executor-plugin-htcondor|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends on python: ``>=3.11``
   :depends on python-htcondor: ``>=23.4.0,<24.0.0``
   :depends on snakemake-interface-common: ``>=1.17.1,<2.0.0``
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

    pixi global install snakemake-executor-plugin-htcondor

to add into an existing workspace instead, run::

    pixi add snakemake-executor-plugin-htcondor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-executor-plugin-htcondor

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-executor-plugin-htcondor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-executor-plugin-htcondor:<tag>

(see `snakemake-executor-plugin-htcondor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-executor-plugin-htcondor| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-htcondor.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-htcondor
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-htcondor| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-htcondor/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-htcondor
.. _`snakemake-executor-plugin-htcondor/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-htcondor?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-htcondor";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-htcondor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-htcondor/README.html
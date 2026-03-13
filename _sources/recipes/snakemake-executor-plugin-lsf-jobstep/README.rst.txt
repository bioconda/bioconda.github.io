:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-lsf-jobstep'
.. highlight: bash

snakemake-executor-plugin-lsf-jobstep
=====================================

.. conda:recipe:: snakemake-executor-plugin-lsf-jobstep
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for running bjobs jobs inside of LSF jobs \(meant for internal use by snakemake\-executor\-plugin\-lsf\)

   :homepage: https://github.com/BEFH/snakemake-executor-plugin-lsf-jobstep
   :license: MIT
   :recipe: /`snakemake-executor-plugin-lsf-jobstep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-lsf-jobstep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-lsf-jobstep/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-lsf-jobstep

   |downloads_snakemake-executor-plugin-lsf-jobstep| |docker_snakemake-executor-plugin-lsf-jobstep|

   :versions:
      
      

      ``0.1.10-0``

      

   
   :depends on python: ``>=3.11.0,<4.0.0``
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

    pixi global install snakemake-executor-plugin-lsf-jobstep

to add into an existing workspace instead, run::

    pixi add snakemake-executor-plugin-lsf-jobstep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snakemake-executor-plugin-lsf-jobstep

Alternatively, to install into a new environment, run::

    conda create -n envname snakemake-executor-plugin-lsf-jobstep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snakemake-executor-plugin-lsf-jobstep:<tag>

(see `snakemake-executor-plugin-lsf-jobstep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snakemake-executor-plugin-lsf-jobstep| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-lsf-jobstep.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-lsf-jobstep
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-lsf-jobstep| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-lsf-jobstep/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-lsf-jobstep
.. _`snakemake-executor-plugin-lsf-jobstep/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-lsf-jobstep?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-lsf-jobstep";
        var versions = ["0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-lsf-jobstep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-lsf-jobstep/README.html
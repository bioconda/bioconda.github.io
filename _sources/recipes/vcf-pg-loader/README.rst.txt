:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-pg-loader'
.. highlight: bash

vcf-pg-loader
=============

.. conda:recipe:: vcf-pg-loader
   :replaces_section_title:
   :noindex:

   High\-performance VCF to PostgreSQL loader with clinical\-grade compliance

   :homepage: https://github.com/Zacharyr41/vcf-pg-loader
   :documentation: https://github.com/Zacharyr41/vcf-pg-loader/tree/main/docs
   
   :license: MIT / MIT
   :recipe: /`vcf-pg-loader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-pg-loader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-pg-loader/meta.yaml>`_

   vcf\-pg\-loader is a command\-line tool for efficiently loading VCF variant data
   into PostgreSQL databases. It features streaming VCF parsing with cyvcf2\,
   variant normalization using the vt algorithm\, proper Number\=A\/R\/G field handling
   during multi\-allelic decomposition\, and binary COPY protocol via asyncpg for
   maximum insert performance.



.. conda:package:: vcf-pg-loader

   |downloads_vcf-pg-loader| |docker_vcf-pg-loader|

   :versions:
      
      

      ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.1-0``

      

   
   :depends on anyio: ``>=4.3.0``
   :depends on asyncpg: ``>=0.29.0``
   :depends on cyvcf2: ``>=0.31.0``
   :depends on docker-py: ``>=7.0.0``
   :depends on pydantic: ``>=2.6.0``
   :depends on python: ``>=3.9``
   :depends on rich: ``>=13.7.0``
   :depends on typer: ``>=0.12.0``

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

    pixi global install vcf-pg-loader

to add into an existing workspace instead, run::

    pixi add vcf-pg-loader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf-pg-loader

Alternatively, to install into a new environment, run::

    conda create -n envname vcf-pg-loader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf-pg-loader:<tag>

(see `vcf-pg-loader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf-pg-loader| image:: https://img.shields.io/conda/dn/bioconda/vcf-pg-loader.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-pg-loader
   :alt:   (downloads)
.. |docker_vcf-pg-loader| image:: https://quay.io/repository/biocontainers/vcf-pg-loader/status
   :target: https://quay.io/repository/biocontainers/vcf-pg-loader
.. _`vcf-pg-loader/tags`: https://quay.io/repository/biocontainers/vcf-pg-loader?tab=tags


.. raw:: html

    <script>
        var package = "vcf-pg-loader";
        var versions = ["0.5.4","0.5.3","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-pg-loader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-pg-loader/README.html
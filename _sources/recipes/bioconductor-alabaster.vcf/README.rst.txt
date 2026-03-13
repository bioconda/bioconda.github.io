:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.vcf'
.. highlight: bash

bioconductor-alabaster.vcf
==========================

.. conda:recipe:: bioconductor-alabaster.vcf
   :replaces_section_title:
   :noindex:

   Save and Load Variant Data to\/from File

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.vcf.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.vcf/meta.yaml>`_

   Save variant calling SummarizedExperiment to file and load them back as VCF objects. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.vcf

   |downloads_bioconductor-alabaster.vcf| |docker_bioconductor-alabaster.vcf|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-alabaster.base: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.se: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-alabaster.string: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-alabaster.vcf

to add into an existing workspace instead, run::

    pixi add bioconductor-alabaster.vcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alabaster.vcf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alabaster.vcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alabaster.vcf:<tag>

(see `bioconductor-alabaster.vcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alabaster.vcf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.vcf
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.vcf| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf
.. _`bioconductor-alabaster.vcf/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.vcf";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.vcf/README.html
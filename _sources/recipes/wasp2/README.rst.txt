:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wasp2'
.. highlight: bash

wasp2
=====

.. conda:recipe:: wasp2
   :replaces_section_title:
   :noindex:

   Allele\-specific analysis of next\-generation sequencing data with Rust acceleration

   :homepage: https://github.com/mcvickerlab/WASP2
   :documentation: https://mcvickerlab.github.io/WASP2/
   
   :license: MIT / MIT
   :recipe: /`wasp2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wasp2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wasp2/meta.yaml>`_
   :links: biotools: :biotools:`wasp2`

   WASP2 is a high\-performance tool for allele\-specific analysis of NGS data.
   It provides functionality for variant counting\, read remapping for bias
   correction\, and statistical analysis of allelic imbalance. The package
   includes a Rust extension for accelerated BAM processing.



.. conda:package:: wasp2

   |downloads_wasp2| |docker_wasp2|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends on anndata: ``>=0.8.0,<0.12.0``
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: ``>=1.21.0``
   :depends on openssl: ``>=3.5.5,<4.0a0``
   :depends on pandas: ``>=1.5.0,<3.0.0``
   :depends on polars: ``>=0.19.0``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``
   :depends on rich: ``>=13.0.0``
   :depends on samtools: ``>=1.10``
   :depends on scanpy: ``>=1.9.0``
   :depends on scipy: ``>=1.10.0``
   :depends on typer: ``>=0.12.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install wasp2

to add into an existing workspace instead, run::

    pixi add wasp2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wasp2

Alternatively, to install into a new environment, run::

    conda create -n envname wasp2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wasp2:<tag>

(see `wasp2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wasp2| image:: https://img.shields.io/conda/dn/bioconda/wasp2.svg?style=flat
   :target: https://anaconda.org/bioconda/wasp2
   :alt:   (downloads)
.. |docker_wasp2| image:: https://quay.io/repository/biocontainers/wasp2/status
   :target: https://quay.io/repository/biocontainers/wasp2
.. _`wasp2/tags`: https://quay.io/repository/biocontainers/wasp2?tab=tags


.. raw:: html

    <script>
        var package = "wasp2";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wasp2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wasp2/README.html
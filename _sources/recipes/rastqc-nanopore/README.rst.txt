:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rastqc-nanopore'
.. highlight: bash

rastqc-nanopore
===============

.. conda:recipe:: rastqc-nanopore
   :replaces_section_title:
   :noindex:

   Fast Rust\-based QC for Oxford Nanopore sequencing data \(Fast5 \+ POD5\)

   :homepage: https://github.com/Huang-lab/RastQC
   :documentation: https://github.com/Huang-lab/RastQC/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`rastqc-nanopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rastqc-nanopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rastqc-nanopore/meta.yaml>`_

   rastqc\-nanopore is the long\-read variant of RastQC. It adds Fast5 \(HDF5\)
   and POD5 \(Arrow\) readers for Oxford Nanopore data\, plus 3 long\-read
   modules \(N50\, quality\-stratified length\, homopolymer content\) on top of
   the 12 standard FastQC modules. The binary is installed as
   \`rastqc\-nanopore\` so this package can coexist with the core \`rastqc\`
   package in the same environment.



.. conda:package:: rastqc-nanopore

   |downloads_rastqc-nanopore| |docker_rastqc-nanopore|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on hdf5: ``>=1.10,<1.13``
   :depends on hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends on libarrow: ``>=22.0.0,<22.1.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install rastqc-nanopore

to add into an existing workspace instead, run::

    pixi add rastqc-nanopore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rastqc-nanopore

Alternatively, to install into a new environment, run::

    conda create -n envname rastqc-nanopore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rastqc-nanopore:<tag>

(see `rastqc-nanopore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rastqc-nanopore| image:: https://img.shields.io/conda/dn/bioconda/rastqc-nanopore.svg?style=flat
   :target: https://anaconda.org/bioconda/rastqc-nanopore
   :alt:   (downloads)
.. |docker_rastqc-nanopore| image:: https://quay.io/repository/biocontainers/rastqc-nanopore/status
   :target: https://quay.io/repository/biocontainers/rastqc-nanopore
.. _`rastqc-nanopore/tags`: https://quay.io/repository/biocontainers/rastqc-nanopore?tab=tags


.. raw:: html

    <script>
        var package = "rastqc-nanopore";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rastqc-nanopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rastqc-nanopore/README.html
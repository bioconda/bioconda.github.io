:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rastqc'
.. highlight: bash

rastqc
======

.. conda:recipe:: rastqc
   :replaces_section_title:
   :noindex:

   Fast Rust\-based quality control for high\-throughput sequencing data

   :homepage: https://github.com/Huang-lab/RastQC
   :documentation: https://github.com/Huang-lab/RastQC/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`rastqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rastqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rastqc/meta.yaml>`_

   RastQC is a drop\-in replacement for FastQC written in Rust. It implements
   all 12 FastQC modules with matching algorithms and output formats \(HTML\,
   fastqc\_data.txt\, ZIP\, native MultiQC JSON\). The streaming parallel
   pipeline runs 2\-3x faster than FastQC on real sequencing data. For Oxford
   Nanopore data \(Fast5 \+ POD5 readers and long\-read modules\)\, install the
   sibling package \`rastqc\-nanopore\`.



.. conda:package:: rastqc

   |downloads_rastqc| |docker_rastqc|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on libgcc: ``>=14``

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

    pixi global install rastqc

to add into an existing workspace instead, run::

    pixi add rastqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rastqc

Alternatively, to install into a new environment, run::

    conda create -n envname rastqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rastqc:<tag>

(see `rastqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rastqc| image:: https://img.shields.io/conda/dn/bioconda/rastqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rastqc
   :alt:   (downloads)
.. |docker_rastqc| image:: https://quay.io/repository/biocontainers/rastqc/status
   :target: https://quay.io/repository/biocontainers/rastqc
.. _`rastqc/tags`: https://quay.io/repository/biocontainers/rastqc?tab=tags


.. raw:: html

    <script>
        var package = "rastqc";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rastqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rastqc/README.html
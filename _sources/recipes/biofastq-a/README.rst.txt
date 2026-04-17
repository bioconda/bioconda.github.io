:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biofastq-a'
.. highlight: bash

biofastq-a
==========

.. conda:recipe:: biofastq-a
   :replaces_section_title:
   :noindex:

   High\-performance FASTQ\/FASTA quality analysis tool written in Rust.

   :homepage: https://github.com/DilaDeniz/BioFastq-a
   :license: MIT
   :recipe: /`biofastq-a <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofastq-a>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biofastq-a/meta.yaml>`_

   BioFastq\-A is a fast\, multi\-threaded FASTQ\/FASTA quality control tool
   written in Rust. It produces self\-contained HTML reports\, JSON output\,
   adapter trimming\, duplication estimation\, per\-tile quality\, N50\/N90\,
   k\-mer analysis\, and a real\-time terminal UI.



.. conda:package:: biofastq-a

   |downloads_biofastq-a| |docker_biofastq-a|

   :versions:
      
      

      ``2.2.0-0``

      

   

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

    pixi global install biofastq-a

to add into an existing workspace instead, run::

    pixi add biofastq-a

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biofastq-a

Alternatively, to install into a new environment, run::

    conda create -n envname biofastq-a

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biofastq-a:<tag>

(see `biofastq-a/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biofastq-a| image:: https://img.shields.io/conda/dn/bioconda/biofastq-a.svg?style=flat
   :target: https://anaconda.org/bioconda/biofastq-a
   :alt:   (downloads)
.. |docker_biofastq-a| image:: https://quay.io/repository/biocontainers/biofastq-a/status
   :target: https://quay.io/repository/biocontainers/biofastq-a
.. _`biofastq-a/tags`: https://quay.io/repository/biocontainers/biofastq-a?tab=tags


.. raw:: html

    <script>
        var package = "biofastq-a";
        var versions = ["2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biofastq-a/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biofastq-a/README.html
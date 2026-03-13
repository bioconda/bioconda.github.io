:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamrescue'
.. highlight: bash

bamrescue
=========

.. conda:recipe:: bamrescue
   :replaces_section_title:
   :noindex:

   Utility to check BAM files for corruption and repair by skipping corrupted BGZF blocks.

   :homepage: https://github.com/Arkanosis/bamrescue
   :license: ISC
   :recipe: /`bamrescue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamrescue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamrescue/meta.yaml>`_

   bamrescue is a command\-line tool that inspects Binary Alignment\/Map \(BAM\) files for corruption.
   It leverages the BGZF structure \(concatenated gzip blocks\) to skip over corrupted sections using CRC32 checksums\,
   rescuing as much valid data as possible.



.. conda:package:: bamrescue

   |downloads_bamrescue| |docker_bamrescue|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``

      

   

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

    pixi global install bamrescue

to add into an existing workspace instead, run::

    pixi add bamrescue

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bamrescue

Alternatively, to install into a new environment, run::

    conda create -n envname bamrescue

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bamrescue:<tag>

(see `bamrescue/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bamrescue| image:: https://img.shields.io/conda/dn/bioconda/bamrescue.svg?style=flat
   :target: https://anaconda.org/bioconda/bamrescue
   :alt:   (downloads)
.. |docker_bamrescue| image:: https://quay.io/repository/biocontainers/bamrescue/status
   :target: https://quay.io/repository/biocontainers/bamrescue
.. _`bamrescue/tags`: https://quay.io/repository/biocontainers/bamrescue?tab=tags


.. raw:: html

    <script>
        var package = "bamrescue";
        var versions = ["0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamrescue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamrescue/README.html
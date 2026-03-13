:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zna'
.. highlight: bash

zna
===

.. conda:recipe:: zna
   :replaces_section_title:
   :noindex:

   High\-performance binary format for compressed nucleic acid sequences

   :homepage: https://github.com/mkiyer/zna
   :documentation: https://github.com/mkiyer/zna/blob/main/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`zna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zna/meta.yaml>`_

   ZNA \(Compressed Z\-Nucleic N\-Acid A\) is a specialized binary format for 
   storing DNA\/RNA sequences with exceptional compression and I\/O speed.

   Features\:
   \- 135 MB\/s roundtrip throughput \(9.5x faster than Python baseline\)
   \- 2.8\+ GB\/s encoding\/decoding for long reads
   \- 3.7\-4.0x compression ratio with Zstd
   \- C\+\+ acceleration with pure Python fallback
   \- Block\-based architecture for memory efficiency
   \- Supports single\-end\, paired\-end\, and interleaved reads
   \- Supports strand\-specific protocols



.. conda:package:: zna

   |downloads_zna| |docker_zna|

   :versions:
      
      

      ``0.1.8-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on zstandard: 

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

    pixi global install zna

to add into an existing workspace instead, run::

    pixi add zna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zna

Alternatively, to install into a new environment, run::

    conda create -n envname zna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zna:<tag>

(see `zna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zna| image:: https://img.shields.io/conda/dn/bioconda/zna.svg?style=flat
   :target: https://anaconda.org/bioconda/zna
   :alt:   (downloads)
.. |docker_zna| image:: https://quay.io/repository/biocontainers/zna/status
   :target: https://quay.io/repository/biocontainers/zna
.. _`zna/tags`: https://quay.io/repository/biocontainers/zna?tab=tags


.. raw:: html

    <script>
        var package = "zna";
        var versions = ["0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zna/README.html
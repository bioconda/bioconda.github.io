:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plassembler'
.. highlight: bash

plassembler
===========

.. conda:recipe:: plassembler
   :replaces_section_title:
   :noindex:

   Quickly and accurately assemble plasmids in hybrid sequenced bacterial isolates.

   :homepage: https://github.com/gbouras13/plassembler
   :documentation: https://plassembler.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`plassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plassembler/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad409`, biotools: :biotools:`plassembler`

   


.. conda:package:: plassembler

   |downloads_plassembler| |docker_plassembler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.2-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.2-1</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alive-progress: ``>=3.0.1``
   :depends on biopython: ``>=1.76``
   :depends on canu: ``>=2.2``
   :depends on chopper: ``>=0.5.0``
   :depends on click: ``>=8.0.0``
   :depends on dnaapler: ``>=0.4.0``
   :depends on fastp: ``>=0.24.2``
   :depends on flye: ``>=2.9``
   :depends on loguru: ``>=0.5.3``
   :depends on mash: ``>=2.2``
   :depends on minimap2: ``>=2.11``
   :depends on pandas: ``>=1.4.2``
   :depends on pysam: ``>=0.16.0``
   :depends on python: ``>=3.8,<3.14``
   :depends on pyyaml: ``>=6.0``
   :depends on raven-assembler: ``>=1.8``
   :depends on requests: ``>=2.25.1``
   :depends on samtools: ``>=0.15.0``
   :depends on unicycler: ``>=0.4.8``

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

    pixi global install plassembler

to add into an existing workspace instead, run::

    pixi add plassembler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plassembler

Alternatively, to install into a new environment, run::

    conda create -n envname plassembler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plassembler:<tag>

(see `plassembler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plassembler| image:: https://img.shields.io/conda/dn/bioconda/plassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/plassembler
   :alt:   (downloads)
.. |docker_plassembler| image:: https://quay.io/repository/biocontainers/plassembler/status
   :target: https://quay.io/repository/biocontainers/plassembler
.. _`plassembler/tags`: https://quay.io/repository/biocontainers/plassembler?tab=tags


.. raw:: html

    <script>
        var package = "plassembler";
        var versions = ["1.8.2","1.8.1","1.8.0","1.7.1","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plassembler/README.html
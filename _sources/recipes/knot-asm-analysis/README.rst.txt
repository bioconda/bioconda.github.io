:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knot-asm-analysis'
.. highlight: bash

knot-asm-analysis
=================

.. conda:recipe:: knot-asm-analysis
   :replaces_section_title:
   :noindex:

   KNOT\: Knowledge Network Overlap exTraction is a tool for the investigation of fragmented long read assemblies.

   :homepage: https://github.com/natir/knot
   :license: MIT / MIT
   :recipe: /`knot-asm-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot-asm-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot-asm-analysis/meta.yaml>`_

   


.. conda:package:: knot-asm-analysis

   |downloads_knot-asm-analysis| |docker_knot-asm-analysis|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends on biopython: ``>=1.72``
   :depends on fpa: ``>=0.5``
   :depends on gfapy: ``>=1.0.0``
   :depends on jinja2: ``>=2.10``
   :depends on minimap2: 
   :depends on networkx: ``>=2.2``
   :depends on python: ``>=3``
   :depends on snakemake: ``>=5.3``
   :depends on yacrd: ``>=0.6``

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

    pixi global install knot-asm-analysis

to add into an existing workspace instead, run::

    pixi add knot-asm-analysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install knot-asm-analysis

Alternatively, to install into a new environment, run::

    conda create -n envname knot-asm-analysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/knot-asm-analysis:<tag>

(see `knot-asm-analysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_knot-asm-analysis| image:: https://img.shields.io/conda/dn/bioconda/knot-asm-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/knot-asm-analysis
   :alt:   (downloads)
.. |docker_knot-asm-analysis| image:: https://quay.io/repository/biocontainers/knot-asm-analysis/status
   :target: https://quay.io/repository/biocontainers/knot-asm-analysis
.. _`knot-asm-analysis/tags`: https://quay.io/repository/biocontainers/knot-asm-analysis?tab=tags


.. raw:: html

    <script>
        var package = "knot-asm-analysis";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knot-asm-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knot-asm-analysis/README.html
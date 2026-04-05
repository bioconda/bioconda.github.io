:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cactus-gfa-tools'
.. highlight: bash

cactus-gfa-tools
================

.. conda:recipe:: cactus-gfa-tools
   :replaces_section_title:
   :noindex:

   Command\-line utilitites required for the Cactus Pangenome Pipeline.

   :homepage: https://github.com/ComparativeGenomicsToolkit/cactus-gfa-tools
   :documentation: https://github.com/ComparativeGenomicsToolkit/cactus-gfa-tools/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`cactus-gfa-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus-gfa-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cactus-gfa-tools/meta.yaml>`_

   


.. conda:package:: cactus-gfa-tools

   |downloads_cactus-gfa-tools| |docker_cactus-gfa-tools|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``

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

    pixi global install cactus-gfa-tools

to add into an existing workspace instead, run::

    pixi add cactus-gfa-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cactus-gfa-tools

Alternatively, to install into a new environment, run::

    conda create -n envname cactus-gfa-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cactus-gfa-tools:<tag>

(see `cactus-gfa-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cactus-gfa-tools| image:: https://img.shields.io/conda/dn/bioconda/cactus-gfa-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cactus-gfa-tools
   :alt:   (downloads)
.. |docker_cactus-gfa-tools| image:: https://quay.io/repository/biocontainers/cactus-gfa-tools/status
   :target: https://quay.io/repository/biocontainers/cactus-gfa-tools
.. _`cactus-gfa-tools/tags`: https://quay.io/repository/biocontainers/cactus-gfa-tools?tab=tags


.. raw:: html

    <script>
        var package = "cactus-gfa-tools";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cactus-gfa-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cactus-gfa-tools/README.html
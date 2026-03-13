:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porechop_abi'
.. highlight: bash

porechop_abi
============

.. conda:recipe:: porechop_abi
   :replaces_section_title:
   :noindex:

   Adapter inferrence and removal of Oxford Nanopore reads.

   :homepage: https://github.com/bonsai-team/Porechop_ABI
   :documentation: https://github.com/bonsai-team/Porechop_ABI/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`porechop_abi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop_abi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop_abi/meta.yaml>`_
   :links: biotools: :biotools:`porechop_abi`

   


.. conda:package:: porechop_abi

   |downloads_porechop_abi| |docker_porechop_abi|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0post1-0``,  ``0.5.0-5``,  ``0.5.0-4``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on networkx: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install porechop_abi

to add into an existing workspace instead, run::

    pixi add porechop_abi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install porechop_abi

Alternatively, to install into a new environment, run::

    conda create -n envname porechop_abi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/porechop_abi:<tag>

(see `porechop_abi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_porechop_abi| image:: https://img.shields.io/conda/dn/bioconda/porechop_abi.svg?style=flat
   :target: https://anaconda.org/bioconda/porechop_abi
   :alt:   (downloads)
.. |docker_porechop_abi| image:: https://quay.io/repository/biocontainers/porechop_abi/status
   :target: https://quay.io/repository/biocontainers/porechop_abi
.. _`porechop_abi/tags`: https://quay.io/repository/biocontainers/porechop_abi?tab=tags


.. raw:: html

    <script>
        var package = "porechop_abi";
        var versions = ["0.5.1","0.5.0post1","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porechop_abi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porechop_abi/README.html
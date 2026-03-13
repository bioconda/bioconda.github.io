:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapsplice'
.. highlight: bash

mapsplice
=========

.. conda:recipe:: mapsplice
   :replaces_section_title:
   :noindex:

   MapSplice is a software for mapping RNA\-seq data to reference genome for splice junction discovery that depends only on reference genome\, and not on any further annotations.

   :homepage: http://www.netlab.uky.edu/p/bioinfo/MapSplice2
   :developer docs: https://github.com/davidroberson/MapSplice2
   :license: Custom
   :recipe: /`mapsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsplice/meta.yaml>`_
   :links: biotools: :biotools:`mapsplice`

   


.. conda:package:: mapsplice

   |downloads_mapsplice| |docker_mapsplice|

   :versions:
      
      

      ``2.2.1-2``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install mapsplice

to add into an existing workspace instead, run::

    pixi add mapsplice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mapsplice

Alternatively, to install into a new environment, run::

    conda create -n envname mapsplice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mapsplice:<tag>

(see `mapsplice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mapsplice| image:: https://img.shields.io/conda/dn/bioconda/mapsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/mapsplice
   :alt:   (downloads)
.. |docker_mapsplice| image:: https://quay.io/repository/biocontainers/mapsplice/status
   :target: https://quay.io/repository/biocontainers/mapsplice
.. _`mapsplice/tags`: https://quay.io/repository/biocontainers/mapsplice?tab=tags


.. raw:: html

    <script>
        var package = "mapsplice";
        var versions = ["2.2.1","2.2.1","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapsplice/README.html
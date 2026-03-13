:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strobemap'
.. highlight: bash

strobemap
=========

.. conda:recipe:: strobemap
   :replaces_section_title:
   :noindex:

   Efficient string matching using strobemers

   :homepage: https://github.com/ksahlin/strobemers
   :license: GPL-3.0 License
   :recipe: /`strobemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobemap/meta.yaml>`_

   


.. conda:package:: strobemap

   |downloads_strobemap| |docker_strobemap|

   :versions:
      
      

      ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on _openmp_mutex: ``* *_llvm``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on llvm-openmp: ``>=19.1.5``
   :depends on python: ``>=3.9``

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

    pixi global install strobemap

to add into an existing workspace instead, run::

    pixi add strobemap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strobemap

Alternatively, to install into a new environment, run::

    conda create -n envname strobemap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strobemap:<tag>

(see `strobemap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strobemap| image:: https://img.shields.io/conda/dn/bioconda/strobemap.svg?style=flat
   :target: https://anaconda.org/bioconda/strobemap
   :alt:   (downloads)
.. |docker_strobemap| image:: https://quay.io/repository/biocontainers/strobemap/status
   :target: https://quay.io/repository/biocontainers/strobemap
.. _`strobemap/tags`: https://quay.io/repository/biocontainers/strobemap?tab=tags


.. raw:: html

    <script>
        var package = "strobemap";
        var versions = ["0.0.2","0.0.2","0.0.2","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strobemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strobemap/README.html
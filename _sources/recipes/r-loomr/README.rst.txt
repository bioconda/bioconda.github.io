:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-loomr'
.. highlight: bash

r-loomr
=======

.. conda:recipe:: r-loomr
   :replaces_section_title:
   :noindex:

   An interface for the single\-cell RNAseq\-oriented loom format. Loom files are an HDF5\-based
   format for storing and interacting with large single\-cell RNAseq datasets. loomR
   provides an interface for working with loom files in a loom\-specific way\; we provide
   routines for validating loom files\, iterating with chunks through data within the
   loom file\, and provide a platform for other packages to build support for loom files.


   :homepage: https://github.com/mojaveazure/loomR
   :license: GPL3 / GPL-3
   :recipe: /`r-loomr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loomr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loomr/meta.yaml>`_

   


.. conda:package:: r-loomr

   |downloads_r-loomr| |docker_r-loomr|

   :versions:
      
      

      ``0.2.0_beta-6``,  ``0.2.0_beta-5``,  ``0.2.0_beta-4``,  ``0.2.0_beta-3``,  ``0.2.0_beta-2``,  ``0.2.0_beta-1``,  ``0.2.0_beta-0``

      

   
   :depends on hdf5: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-hdf5r: 
   :depends on r-iterators: 
   :depends on r-itertools: 
   :depends on r-matrix: 
   :depends on r-r6: 

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

    pixi global install r-loomr

to add into an existing workspace instead, run::

    pixi add r-loomr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-loomr

Alternatively, to install into a new environment, run::

    conda create -n envname r-loomr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-loomr:<tag>

(see `r-loomr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-loomr| image:: https://img.shields.io/conda/dn/bioconda/r-loomr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-loomr
   :alt:   (downloads)
.. |docker_r-loomr| image:: https://quay.io/repository/biocontainers/r-loomr/status
   :target: https://quay.io/repository/biocontainers/r-loomr
.. _`r-loomr/tags`: https://quay.io/repository/biocontainers/r-loomr?tab=tags


.. raw:: html

    <script>
        var package = "r-loomr";
        var versions = ["0.2.0_beta","0.2.0_beta","0.2.0_beta","0.2.0_beta","0.2.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-loomr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-loomr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dechat'
.. highlight: bash

dechat
======

.. conda:recipe:: dechat
   :replaces_section_title:
   :noindex:

   Repeat and haplotype aware error correction in nanopore sequencing reads with Dechat

   :homepage: https://github.com/LuoGroup2023/DeChat
   :license: MIT / MIT
   :recipe: /`dechat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dechat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dechat/meta.yaml>`_

   


.. conda:package:: dechat

   |downloads_dechat| |docker_dechat|

   :versions:
      
      

      ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on boost-cpp: ``1.67.0``
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libcxx: ``>=18``
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libzlib: ``>=1.2.13,<2.0a0``

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

    pixi global install dechat

to add into an existing workspace instead, run::

    pixi add dechat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dechat

Alternatively, to install into a new environment, run::

    conda create -n envname dechat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dechat:<tag>

(see `dechat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dechat| image:: https://img.shields.io/conda/dn/bioconda/dechat.svg?style=flat
   :target: https://anaconda.org/bioconda/dechat
   :alt:   (downloads)
.. |docker_dechat| image:: https://quay.io/repository/biocontainers/dechat/status
   :target: https://quay.io/repository/biocontainers/dechat
.. _`dechat/tags`: https://quay.io/repository/biocontainers/dechat?tab=tags


.. raw:: html

    <script>
        var package = "dechat";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dechat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dechat/README.html
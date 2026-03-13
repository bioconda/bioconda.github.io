:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seidr'
.. highlight: bash

seidr
=====

.. conda:recipe:: seidr
   :replaces_section_title:
   :noindex:

   Community gene network inference and exploration toolkit

   :homepage: https://github.com/bschiffthaler/seidr
   :license: GPL-2.0-or-later
   :recipe: /`seidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seidr/meta.yaml>`_

   


.. conda:package:: seidr

   |downloads_seidr| |docker_seidr|

   :versions:
      
      

      ``0.14.2-1``,  ``0.14.2-0``

      

   
   :depends on armadillo: ``* *openblas*``
   :depends on boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends on coin-or-clp: ``>=1.17,<1.18.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=10.4.0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.12,<1.3.0a0``
   :depends on mpich: ``>=4.0,<4.1.0a0``
   :depends on tbb: ``>=2021.6.0``
   :depends on zlib: ``>=1.2.12,<1.3.0a0``

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

    pixi global install seidr

to add into an existing workspace instead, run::

    pixi add seidr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seidr

Alternatively, to install into a new environment, run::

    conda create -n envname seidr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seidr:<tag>

(see `seidr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seidr| image:: https://img.shields.io/conda/dn/bioconda/seidr.svg?style=flat
   :target: https://anaconda.org/bioconda/seidr
   :alt:   (downloads)
.. |docker_seidr| image:: https://quay.io/repository/biocontainers/seidr/status
   :target: https://quay.io/repository/biocontainers/seidr
.. _`seidr/tags`: https://quay.io/repository/biocontainers/seidr?tab=tags


.. raw:: html

    <script>
        var package = "seidr";
        var versions = ["0.14.2","0.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seidr/README.html
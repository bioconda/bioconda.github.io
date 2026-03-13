:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_mpi'
.. highlight: bash

gromacs_mpi
===========

.. conda:recipe:: gromacs_mpi/2021
   :replaces_section_title:
   :noindex:

   GROMACS is a versatile package to perform molecular dynamics.

   :homepage: http://www.gromacs.org/
   :license: LGPL-2.1-or-later
   :recipe: /`gromacs_mpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mpi>`_/`2021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mpi/2021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mpi/2021/meta.yaml>`_
   :links: biotools: :biotools:`gromacs`, doi: :doi:`10.5281/zenodo.2564764`, doi: :doi:`10.5281/zenodo.2564761`, doi: :doi:`10.1016/j.softx.2015.06.001`, rrid: :rrid:`SCR_014565`, usegalaxy-eu: :usegalaxy-eu:`gmx_sim`

   


.. conda:package:: gromacs_mpi

   |downloads_gromacs_mpi| |docker_gromacs_mpi|

   :versions:
      
      

      ``2021.1-0``,  ``2021-1``,  ``2021-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.3.9,<4.0a0``
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libhwloc: ``2.*``
   :depends on libhwloc: ``>=2.4.1,<2.4.2.0a0``
   :depends on libstdcxx-ng: ``>=9.3.0``
   :depends on mpich: ``>=3.4.1,<4.0a0``
   :depends on ocl-icd: ``>=2.3.0,<3.0a0``

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

    pixi global install gromacs_mpi

to add into an existing workspace instead, run::

    pixi add gromacs_mpi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gromacs_mpi

Alternatively, to install into a new environment, run::

    conda create -n envname gromacs_mpi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gromacs_mpi:<tag>

(see `gromacs_mpi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gromacs_mpi| image:: https://img.shields.io/conda/dn/bioconda/gromacs_mpi.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_mpi
   :alt:   (downloads)
.. |docker_gromacs_mpi| image:: https://quay.io/repository/biocontainers/gromacs_mpi/status
   :target: https://quay.io/repository/biocontainers/gromacs_mpi
.. _`gromacs_mpi/tags`: https://quay.io/repository/biocontainers/gromacs_mpi?tab=tags


.. raw:: html

    <script>
        var package = "gromacs_mpi";
        var versions = ["2021.1","2021","2021"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_mpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_mpi/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gromacs_mddb'
.. highlight: bash

gromacs_mddb
============

.. conda:recipe:: gromacs_mddb
   :replaces_section_title:
   :noindex:

   GROMACS is a versatile package to perform molecular dynamics.

   :homepage: https://www.gromacs.org/
   :documentation: https://manual.gromacs.org/
   
   :developer docs: https://gitlab.com/gromacs/gromacs/-/tree/pj_mddb_json_proto-2025
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`gromacs_mddb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mddb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gromacs_mddb/meta.yaml>`_

   Development version of GROMACS in colaboration to MDDB to add the
   possibility to export tpr to json.

   GROMACS is a versatile package to perform molecular dynamics\, i.e.
   simulate the Newtonian equations of motion for systems with hundreds
   to millions of particles. It is primarily designed for biochemical
   molecules like proteins\, lipids and nucleic acids that have a lot of
   complicated bonded interactions\, but since GROMACS is extremely fast
   at calculating the nonbonded interactions \(that usually dominate
   simulations\) many groups are also using it for research on
   non\-biological systems\, e.g. polymers.



.. conda:package:: gromacs_mddb

   |downloads_gromacs_mddb| |docker_gromacs_mddb|

   :versions:
      
      

      ``2025.3-3``,  ``2025.3-2``,  ``2025.3-1``,  ``2025.3-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fftw: ``>=3.3.10,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on libhwloc: ``<2.12.2``
   :depends on libhwloc: ``>=2.12.1,<2.12.2.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on ocl-icd: ``>=2.3.3,<3.0a0``

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

    pixi global install gromacs_mddb

to add into an existing workspace instead, run::

    pixi add gromacs_mddb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gromacs_mddb

Alternatively, to install into a new environment, run::

    conda create -n envname gromacs_mddb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gromacs_mddb:<tag>

(see `gromacs_mddb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gromacs_mddb| image:: https://img.shields.io/conda/dn/bioconda/gromacs_mddb.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_mddb
   :alt:   (downloads)
.. |docker_gromacs_mddb| image:: https://quay.io/repository/biocontainers/gromacs_mddb/status
   :target: https://quay.io/repository/biocontainers/gromacs_mddb
.. _`gromacs_mddb/tags`: https://quay.io/repository/biocontainers/gromacs_mddb?tab=tags


.. raw:: html

    <script>
        var package = "gromacs_mddb";
        var versions = ["2025.3","2025.3","2025.3","2025.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gromacs_mddb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gromacs_mddb/README.html
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
      
      

      ``2025.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libhwloc: ``2.*``
   :depends libhwloc: ``>=2.12.1,<2.12.2.0a0``
   :depends libstdcxx: ``>=13``
   :depends ocl-icd: ``>=2.3.3,<3.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install gromacs_mddb

   and update with::

      mamba update gromacs_mddb

  To create a new environment, run::

      mamba create --name myenvname gromacs_mddb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gromacs_mddb:<tag>

   (see `gromacs_mddb/tags`_ for valid values for ``<tag>``)


.. |downloads_gromacs_mddb| image:: https://img.shields.io/conda/dn/bioconda/gromacs_mddb.svg?style=flat
   :target: https://anaconda.org/bioconda/gromacs_mddb
   :alt:   (downloads)
.. |docker_gromacs_mddb| image:: https://quay.io/repository/biocontainers/gromacs_mddb/status
   :target: https://quay.io/repository/biocontainers/gromacs_mddb
.. _`gromacs_mddb/tags`: https://quay.io/repository/biocontainers/gromacs_mddb?tab=tags


.. raw:: html

    <script>
        var package = "gromacs_mddb";
        var versions = ["2025.3"];
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
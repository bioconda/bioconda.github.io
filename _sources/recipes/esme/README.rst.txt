:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esme_mvapich__ofi'
.. highlight: bash

esme_mvapich__ofi
=================

.. conda:recipe:: esme
   :replaces_section_title:
   :noindex:

   Earth System Modelling Environment \(ESME\) \- A bundle for scientific computing packages for climate modelling with MPI support.

   :homepage: https://github.com/j34ni/bioconda-recipes
   :license: BSD / BSD-3-Clause
   :recipe: /`esme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esme/meta.yaml>`_

   ESME \(Earth System Modelling Environment\) is a package designed to facilitate the installation and management of various scientific computing libraries with support for multiple MPI implementations \(namely MPIch\, OpenMPI\, MVApich and ParaStationMPI\). This bundle currently includes\:
   \- PnetCDF\: Version 1.14.1
   \- HDF5\: Version 1.14.6
   \- netCDF\_C\: Version 4.9.3
   \- netCDF\_Fortran\: Version 4.6.2
   \- ParallelIO\: Version 2.6.6 
   \- ESMF\: Version 8.8.1
   \- OSU\_Micro\_Benchmarks\: Version 7.5.1



.. conda:package:: esme_esmf_mvapich__ofi

   |downloads_esme_esmf_mvapich__ofi| |docker_esme_esmf_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_esmf_mvapich__ofi

   and update with::

      mamba update esme_esmf_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_esmf_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_esmf_mvapich__ofi:<tag>

   (see `esme_esmf_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_esmf_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_esmf_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_esmf_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_esmf_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_esmf_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_esmf_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>


.. conda:package:: esme_hdf5_mvapich__ofi

   |downloads_esme_hdf5_mvapich__ofi| |docker_esme_hdf5_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_hdf5_mvapich__ofi

   and update with::

      mamba update esme_hdf5_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_hdf5_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_hdf5_mvapich__ofi:<tag>

   (see `esme_hdf5_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_hdf5_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_hdf5_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_hdf5_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_hdf5_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_hdf5_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_hdf5_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>


.. conda:package:: esme_mvapich__ofi

   |downloads_esme_mvapich__ofi| |docker_esme_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_mvapich__ofi

   and update with::

      mamba update esme_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_mvapich__ofi:<tag>

   (see `esme_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>


.. conda:package:: esme_netcdf-c_mvapich__ofi

   |downloads_esme_netcdf-c_mvapich__ofi| |docker_esme_netcdf-c_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_netcdf-c_mvapich__ofi

   and update with::

      mamba update esme_netcdf-c_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_netcdf-c_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_netcdf-c_mvapich__ofi:<tag>

   (see `esme_netcdf-c_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_netcdf-c_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_netcdf-c_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_netcdf-c_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_netcdf-c_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_netcdf-c_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_netcdf-c_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>


.. conda:package:: esme_netcdf-fortran_mvapich__ofi

   |downloads_esme_netcdf-fortran_mvapich__ofi| |docker_esme_netcdf-fortran_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_netcdf-fortran_mvapich__ofi

   and update with::

      mamba update esme_netcdf-fortran_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_netcdf-fortran_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_netcdf-fortran_mvapich__ofi:<tag>

   (see `esme_netcdf-fortran_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_netcdf-fortran_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_netcdf-fortran_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_netcdf-fortran_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_netcdf-fortran_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_netcdf-fortran_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_netcdf-fortran_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>


.. conda:package:: esme_pio_mvapich__ofi

   |downloads_esme_pio_mvapich__ofi| |docker_esme_pio_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_pio_mvapich__ofi

   and update with::

      mamba update esme_pio_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_pio_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_pio_mvapich__ofi:<tag>

   (see `esme_pio_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_pio_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_pio_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_pio_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_pio_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_pio_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_pio_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>


.. conda:package:: esme_pnetcdf_mvapich__ofi

   |downloads_esme_pnetcdf_mvapich__ofi| |docker_esme_pnetcdf_mvapich__ofi|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install esme_pnetcdf_mvapich__ofi

   and update with::

      mamba update esme_pnetcdf_mvapich__ofi

  To create a new environment, run::

      mamba create --name myenvname esme_pnetcdf_mvapich__ofi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_pnetcdf_mvapich__ofi:<tag>

   (see `esme_pnetcdf_mvapich__ofi/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_pnetcdf_mvapich__ofi| image:: https://img.shields.io/conda/dn/bioconda/esme_pnetcdf_mvapich__ofi.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_pnetcdf_mvapich__ofi
   :alt:   (downloads)
.. |docker_esme_pnetcdf_mvapich__ofi| image:: https://quay.io/repository/biocontainers/esme_mvapich__ofi/status
   :target: https://quay.io/repository/biocontainers/esme_mvapich__ofi
.. _`esme_pnetcdf_mvapich__ofi/tags`: https://quay.io/repository/biocontainers/esme_pnetcdf_mvapich__ofi?tab=tags


.. raw:: html

    <script>
        var package = "esme_mvapich__ofi";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esme_mvapich__ofi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esme_mvapich__ofi/README.html
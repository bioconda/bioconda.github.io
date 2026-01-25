:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esme_'
.. highlight: bash

esme_
=====

.. conda:recipe:: esme
   :replaces_section_title:
   :noindex:

   Earth System Modelling Environment \(ESME\) \- A bundle for scientific computing packages for climate modelling with MPI support.

   :homepage: https://github.com/j34ni/bioconda-recipes
   :license: BSD / BSD-3-Clause
   :recipe: /`esme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esme/meta.yaml>`_

   ESME \(Earth System Modelling Environment\) is a package designed to facilitate the installation and management of various scientific computing libraries with support for multiple MPI implementations \(namely MPIch\, OpenMPI\, MVApich and ParaStationMPI\). 
   This bundle currently includes\:
   \- PnetCDF\: Version 1.14.1
   \- HDF5\: Version 2.0.0
   \- netCDF\_C\: Version 4.9.3
   \- netCDF\_Fortran\: Version 4.6.2
   \- ParallelIO\: Version 2.6.6 
   \- ESMF\: Version 8.9.0
   \- OSU\_Micro\_Benchmarks\: Version 8.0b2
   \- VFD\_GDS\: Version 1.0.2 \(only for the MVAPIch version with CUDA\)



.. conda:package:: esme_

   |downloads_esme_| |docker_esme_|

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

      mamba install esme_

   and update with::

      mamba update esme_

  To create a new environment, run::

      mamba create --name myenvname esme_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_:<tag>

   (see `esme_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_| image:: https://img.shields.io/conda/dn/bioconda/esme_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_
   :alt:   (downloads)
.. |docker_esme_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_/tags`: https://quay.io/repository/biocontainers/esme_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_esmf_

   |downloads_esme_esmf_| |docker_esme_esmf_|

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

      mamba install esme_esmf_

   and update with::

      mamba update esme_esmf_

  To create a new environment, run::

      mamba create --name myenvname esme_esmf_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_esmf_:<tag>

   (see `esme_esmf_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_esmf_| image:: https://img.shields.io/conda/dn/bioconda/esme_esmf_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_esmf_
   :alt:   (downloads)
.. |docker_esme_esmf_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_esmf_/tags`: https://quay.io/repository/biocontainers/esme_esmf_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_hdf5_

   |downloads_esme_hdf5_| |docker_esme_hdf5_|

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

      mamba install esme_hdf5_

   and update with::

      mamba update esme_hdf5_

  To create a new environment, run::

      mamba create --name myenvname esme_hdf5_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_hdf5_:<tag>

   (see `esme_hdf5_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_hdf5_| image:: https://img.shields.io/conda/dn/bioconda/esme_hdf5_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_hdf5_
   :alt:   (downloads)
.. |docker_esme_hdf5_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_hdf5_/tags`: https://quay.io/repository/biocontainers/esme_hdf5_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_netcdf-c_

   |downloads_esme_netcdf-c_| |docker_esme_netcdf-c_|

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

      mamba install esme_netcdf-c_

   and update with::

      mamba update esme_netcdf-c_

  To create a new environment, run::

      mamba create --name myenvname esme_netcdf-c_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_netcdf-c_:<tag>

   (see `esme_netcdf-c_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_netcdf-c_| image:: https://img.shields.io/conda/dn/bioconda/esme_netcdf-c_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_netcdf-c_
   :alt:   (downloads)
.. |docker_esme_netcdf-c_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_netcdf-c_/tags`: https://quay.io/repository/biocontainers/esme_netcdf-c_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_netcdf-fortran_

   |downloads_esme_netcdf-fortran_| |docker_esme_netcdf-fortran_|

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

      mamba install esme_netcdf-fortran_

   and update with::

      mamba update esme_netcdf-fortran_

  To create a new environment, run::

      mamba create --name myenvname esme_netcdf-fortran_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_netcdf-fortran_:<tag>

   (see `esme_netcdf-fortran_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_netcdf-fortran_| image:: https://img.shields.io/conda/dn/bioconda/esme_netcdf-fortran_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_netcdf-fortran_
   :alt:   (downloads)
.. |docker_esme_netcdf-fortran_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_netcdf-fortran_/tags`: https://quay.io/repository/biocontainers/esme_netcdf-fortran_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_omb_

   |downloads_esme_omb_| |docker_esme_omb_|

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

      mamba install esme_omb_

   and update with::

      mamba update esme_omb_

  To create a new environment, run::

      mamba create --name myenvname esme_omb_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_omb_:<tag>

   (see `esme_omb_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_omb_| image:: https://img.shields.io/conda/dn/bioconda/esme_omb_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_omb_
   :alt:   (downloads)
.. |docker_esme_omb_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_omb_/tags`: https://quay.io/repository/biocontainers/esme_omb_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_pio_

   |downloads_esme_pio_| |docker_esme_pio_|

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

      mamba install esme_pio_

   and update with::

      mamba update esme_pio_

  To create a new environment, run::

      mamba create --name myenvname esme_pio_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_pio_:<tag>

   (see `esme_pio_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_pio_| image:: https://img.shields.io/conda/dn/bioconda/esme_pio_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_pio_
   :alt:   (downloads)
.. |docker_esme_pio_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_pio_/tags`: https://quay.io/repository/biocontainers/esme_pio_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>


.. conda:package:: esme_pnetcdf_

   |downloads_esme_pnetcdf_| |docker_esme_pnetcdf_|

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

      mamba install esme_pnetcdf_

   and update with::

      mamba update esme_pnetcdf_

  To create a new environment, run::

      mamba create --name myenvname esme_pnetcdf_

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/esme_pnetcdf_:<tag>

   (see `esme_pnetcdf_/tags`_ for valid values for ``<tag>``)


.. |downloads_esme_pnetcdf_| image:: https://img.shields.io/conda/dn/bioconda/esme_pnetcdf_.svg?style=flat
   :target: https://anaconda.org/bioconda/esme_pnetcdf_
   :alt:   (downloads)
.. |docker_esme_pnetcdf_| image:: https://quay.io/repository/biocontainers/esme_/status
   :target: https://quay.io/repository/biocontainers/esme_
.. _`esme_pnetcdf_/tags`: https://quay.io/repository/biocontainers/esme_pnetcdf_?tab=tags


.. raw:: html

    <script>
        var package = "esme_";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esme_/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esme_/README.html
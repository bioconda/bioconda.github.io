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

    pixi global install esme_

to add into an existing workspace instead, run::

    pixi add esme_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_:<tag>

(see `esme_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_esmf_

to add into an existing workspace instead, run::

    pixi add esme_esmf_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_esmf_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_esmf_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_esmf_:<tag>

(see `esme_esmf_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_hdf5_

to add into an existing workspace instead, run::

    pixi add esme_hdf5_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_hdf5_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_hdf5_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_hdf5_:<tag>

(see `esme_hdf5_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_netcdf-c_

to add into an existing workspace instead, run::

    pixi add esme_netcdf-c_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_netcdf-c_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_netcdf-c_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_netcdf-c_:<tag>

(see `esme_netcdf-c_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_netcdf-fortran_

to add into an existing workspace instead, run::

    pixi add esme_netcdf-fortran_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_netcdf-fortran_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_netcdf-fortran_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_netcdf-fortran_:<tag>

(see `esme_netcdf-fortran_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_omb_

to add into an existing workspace instead, run::

    pixi add esme_omb_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_omb_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_omb_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_omb_:<tag>

(see `esme_omb_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_pio_

to add into an existing workspace instead, run::

    pixi add esme_pio_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_pio_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_pio_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_pio_:<tag>

(see `esme_pio_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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

    pixi global install esme_pnetcdf_

to add into an existing workspace instead, run::

    pixi add esme_pnetcdf_

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install esme_pnetcdf_

Alternatively, to install into a new environment, run::

    conda create -n envname esme_pnetcdf_

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/esme_pnetcdf_:<tag>

(see `esme_pnetcdf_/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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
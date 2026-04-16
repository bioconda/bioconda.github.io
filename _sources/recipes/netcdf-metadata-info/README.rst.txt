:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'netcdf-metadata-info'
.. highlight: bash

netcdf-metadata-info
====================

.. conda:recipe:: netcdf-metadata-info
   :replaces_section_title:
   :noindex:

   Metadata information from netcdf file for Galaxy use.

   :homepage: https://github.com/Alanamosse/Netcdf-Metadata-Info/
   :license: GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
   :recipe: /`netcdf-metadata-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netcdf-metadata-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netcdf-metadata-info/meta.yaml>`_

   


.. conda:package:: netcdf-metadata-info

   |downloads_netcdf-metadata-info| |docker_netcdf-metadata-info|

   :versions:
      
      

      ``1.1.6-7``,  ``1.1.6-6``,  ``1.1.6-5``,  ``1.1.6-4``,  ``1.1.6-3``,  ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libnetcdf: ``4.4.*``
   :depends on libnetcdf: ``>=4.4.1.1,<5.0a0``

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

    pixi global install netcdf-metadata-info

to add into an existing workspace instead, run::

    pixi add netcdf-metadata-info

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install netcdf-metadata-info

Alternatively, to install into a new environment, run::

    conda create -n envname netcdf-metadata-info

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/netcdf-metadata-info:<tag>

(see `netcdf-metadata-info/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_netcdf-metadata-info| image:: https://img.shields.io/conda/dn/bioconda/netcdf-metadata-info.svg?style=flat
   :target: https://anaconda.org/bioconda/netcdf-metadata-info
   :alt:   (downloads)
.. |docker_netcdf-metadata-info| image:: https://quay.io/repository/biocontainers/netcdf-metadata-info/status
   :target: https://quay.io/repository/biocontainers/netcdf-metadata-info
.. _`netcdf-metadata-info/tags`: https://quay.io/repository/biocontainers/netcdf-metadata-info?tab=tags


.. raw:: html

    <script>
        var package = "netcdf-metadata-info";
        var versions = ["1.1.6","1.1.6","1.1.6","1.1.6","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netcdf-metadata-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netcdf-metadata-info/README.html
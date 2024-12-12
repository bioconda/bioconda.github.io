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

      

   
   :depends libgcc: ``>=13``
   :depends libnetcdf: ``4.4.*``
   :depends libnetcdf: ``>=4.4.1.1,<5.0a0``
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

      mamba install netcdf-metadata-info

   and update with::

      mamba update netcdf-metadata-info

  To create a new environment, run::

      mamba create --name myenvname netcdf-metadata-info

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/netcdf-metadata-info:<tag>

   (see `netcdf-metadata-info/tags`_ for valid values for ``<tag>``)


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
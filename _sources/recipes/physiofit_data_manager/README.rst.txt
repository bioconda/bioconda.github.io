:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physiofit_data_manager'
.. highlight: bash

physiofit_data_manager
======================

.. conda:recipe:: physiofit_data_manager
   :replaces_section_title:
   :noindex:

   Handle data input management for physiofit4galaxy

   :homepage: https://github.com/llegregam/PhysioFit_Data_Manager
   :license: GPL-3.0
   :recipe: /`physiofit_data_manager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit_data_manager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit_data_manager/meta.yaml>`_

   


.. conda:package:: physiofit_data_manager

   |downloads_physiofit_data_manager| |docker_physiofit_data_manager|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends pandas: ``>=1.5.0``
   :depends python: ``>=3.8``
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

      mamba install physiofit_data_manager

   and update with::

      mamba update physiofit_data_manager

  To create a new environment, run::

      mamba create --name myenvname physiofit_data_manager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/physiofit_data_manager:<tag>

   (see `physiofit_data_manager/tags`_ for valid values for ``<tag>``)


.. |downloads_physiofit_data_manager| image:: https://img.shields.io/conda/dn/bioconda/physiofit_data_manager.svg?style=flat
   :target: https://anaconda.org/bioconda/physiofit_data_manager
   :alt:   (downloads)
.. |docker_physiofit_data_manager| image:: https://quay.io/repository/biocontainers/physiofit_data_manager/status
   :target: https://quay.io/repository/biocontainers/physiofit_data_manager
.. _`physiofit_data_manager/tags`: https://quay.io/repository/biocontainers/physiofit_data_manager?tab=tags


.. raw:: html

    <script>
        var package = "physiofit_data_manager";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physiofit_data_manager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physiofit_data_manager/README.html
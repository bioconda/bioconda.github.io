:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-job-config-init'
.. highlight: bash

galaxy-job-config-init
======================

.. conda:recipe:: galaxy-job-config-init
   :replaces_section_title:
   :noindex:

   Galaxy configuration.

   :homepage: https://github.com/galaxyproject/galaxy-job-config-init
   :license: MIT / MIT
   :recipe: /`galaxy-job-config-init <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-config-init>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-config-init/meta.yaml>`_

   


.. conda:package:: galaxy-job-config-init

   |downloads_galaxy-job-config-init| |docker_galaxy-job-config-init|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends jinja2: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends typing_extensions: 
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

      mamba install galaxy-job-config-init

   and update with::

      mamba update galaxy-job-config-init

  To create a new environment, run::

      mamba create --name myenvname galaxy-job-config-init

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-job-config-init:<tag>

   (see `galaxy-job-config-init/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-job-config-init| image:: https://img.shields.io/conda/dn/bioconda/galaxy-job-config-init.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-job-config-init
   :alt:   (downloads)
.. |docker_galaxy-job-config-init| image:: https://quay.io/repository/biocontainers/galaxy-job-config-init/status
   :target: https://quay.io/repository/biocontainers/galaxy-job-config-init
.. _`galaxy-job-config-init/tags`: https://quay.io/repository/biocontainers/galaxy-job-config-init?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-job-config-init";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-job-config-init/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-job-config-init/README.html
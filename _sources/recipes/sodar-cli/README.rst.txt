:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sodar-cli'
.. highlight: bash

sodar-cli
=========

.. conda:recipe:: sodar-cli
   :replaces_section_title:
   :noindex:

   Command line interface to SODAR via REST API

   :homepage: https://github.com/bihealth/sodar-cli
   :license: MIT / MIT
   :recipe: /`sodar-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sodar-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sodar-cli/meta.yaml>`_

   


.. conda:package:: sodar-cli

   |downloads_sodar-cli| |docker_sodar-cli|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends attrs: 
   :depends cattrs: 
   :depends logzero: 
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends python-levenshtein: 
   :depends requests: 
   :depends simplejson: 
   :depends tabulate: 
   :depends toml: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sodar-cli

   and update with::

      mamba update sodar-cli

  To create a new environment, run::

      mamba create --name myenvname sodar-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sodar-cli:<tag>

   (see `sodar-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_sodar-cli| image:: https://img.shields.io/conda/dn/bioconda/sodar-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/sodar-cli
   :alt:   (downloads)
.. |docker_sodar-cli| image:: https://quay.io/repository/biocontainers/sodar-cli/status
   :target: https://quay.io/repository/biocontainers/sodar-cli
.. _`sodar-cli/tags`: https://quay.io/repository/biocontainers/sodar-cli?tab=tags


.. raw:: html

    <script>
        var package = "sodar-cli";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sodar-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sodar-cli/README.html
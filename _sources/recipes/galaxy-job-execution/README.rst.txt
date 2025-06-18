:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-job-execution'
.. highlight: bash

galaxy-job-execution
====================

.. conda:recipe:: galaxy-job-execution
   :replaces_section_title:
   :noindex:

   Galaxy job execution runtime utilities.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-job-execution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-execution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-job-execution/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-job-execution

   |downloads_galaxy-job-execution| |docker_galaxy-job-execution|

   :versions:
      
      

      ``24.2.4-0``

      

   
   :depends galaxy-data: ``>=24.2``
   :depends galaxy-files: ``>=24.2``
   :depends galaxy-objectstore: ``>=24.2``
   :depends galaxy-tool-util: ``>=24.2``
   :depends galaxy-util: ``>=24.2``
   :depends markupsafe: 
   :depends python: ``>=3.8``
   :depends sqlalchemy: ``>=2.0,<2.1``
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

      mamba install galaxy-job-execution

   and update with::

      mamba update galaxy-job-execution

  To create a new environment, run::

      mamba create --name myenvname galaxy-job-execution

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-job-execution:<tag>

   (see `galaxy-job-execution/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-job-execution| image:: https://img.shields.io/conda/dn/bioconda/galaxy-job-execution.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-job-execution
   :alt:   (downloads)
.. |docker_galaxy-job-execution| image:: https://quay.io/repository/biocontainers/galaxy-job-execution/status
   :target: https://quay.io/repository/biocontainers/galaxy-job-execution
.. _`galaxy-job-execution/tags`: https://quay.io/repository/biocontainers/galaxy-job-execution?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-job-execution";
        var versions = ["24.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-job-execution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-job-execution/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-workflow-executor'
.. highlight: bash

galaxy-workflow-executor
========================

.. conda:recipe:: galaxy-workflow-executor
   :replaces_section_title:
   :noindex:

   Execute workflows on Galaxy through the CLI

   :homepage: https://github.com/ebi-gene-expression-group/galaxy-workflow-executor
   :license: Apache / Apache-2.0
   :recipe: /`galaxy-workflow-executor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-workflow-executor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-workflow-executor/meta.yaml>`_

   


.. conda:package:: galaxy-workflow-executor

   |downloads_galaxy-workflow-executor| |docker_galaxy-workflow-executor|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends bioblend: ``0.13.0``
   :depends python: 
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

      mamba install galaxy-workflow-executor

   and update with::

      mamba update galaxy-workflow-executor

  To create a new environment, run::

      mamba create --name myenvname galaxy-workflow-executor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-workflow-executor:<tag>

   (see `galaxy-workflow-executor/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-workflow-executor| image:: https://img.shields.io/conda/dn/bioconda/galaxy-workflow-executor.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-workflow-executor
   :alt:   (downloads)
.. |docker_galaxy-workflow-executor| image:: https://quay.io/repository/biocontainers/galaxy-workflow-executor/status
   :target: https://quay.io/repository/biocontainers/galaxy-workflow-executor
.. _`galaxy-workflow-executor/tags`: https://quay.io/repository/biocontainers/galaxy-workflow-executor?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-workflow-executor";
        var versions = ["0.2.6","0.2.4","0.2.3","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-workflow-executor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-workflow-executor/README.html
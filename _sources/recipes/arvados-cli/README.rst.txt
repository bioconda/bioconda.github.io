:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-cli'
.. highlight: bash

arvados-cli
===========

.. conda:recipe:: arvados-cli
   :replaces_section_title:
   :noindex:

   Command line interface to Arvados\, a free and open source platform for big data science

   :homepage: http://doc.arvados.org/sdk/cli/index.html
   :license: Apache v2
   :recipe: /`arvados-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cli/meta.yaml>`_

   


.. conda:package:: arvados-cli

   |downloads_arvados-cli| |docker_arvados-cli|

   :versions:
      
      

      ``0.1.20151207150126-0``

      

   
   :depends curl: 
   :depends ruby: 
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

      mamba install arvados-cli

   and update with::

      mamba update arvados-cli

  To create a new environment, run::

      mamba create --name myenvname arvados-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arvados-cli:<tag>

   (see `arvados-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_arvados-cli| image:: https://img.shields.io/conda/dn/bioconda/arvados-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-cli
   :alt:   (downloads)
.. |docker_arvados-cli| image:: https://quay.io/repository/biocontainers/arvados-cli/status
   :target: https://quay.io/repository/biocontainers/arvados-cli
.. _`arvados-cli/tags`: https://quay.io/repository/biocontainers/arvados-cli?tab=tags


.. raw:: html

    <script>
        var package = "arvados-cli";
        var versions = ["0.1.20151207150126"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-cli/README.html
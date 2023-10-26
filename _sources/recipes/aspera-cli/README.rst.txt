:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aspera-cli'
.. highlight: bash

aspera-cli
==========

.. conda:recipe:: aspera-cli
   :replaces_section_title:
   :noindex:

   Command Line Interface for IBM Aspera products

   :homepage: https://github.com/IBM/aspera-cli
   :license: Apache-2.0
   :recipe: /`aspera-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aspera-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aspera-cli/meta.yaml>`_

   


.. conda:package:: aspera-cli

   |downloads_aspera-cli| |docker_aspera-cli|

   :versions:
      
      

      ``4.14.0-1``,  ``4.14.0-0``

      

   
   :depends ruby: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install aspera-cli

   and update with::

      mamba update aspera-cli

  To create a new environment, run::

      mamba create --name myenvname aspera-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aspera-cli:<tag>

   (see `aspera-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_aspera-cli| image:: https://img.shields.io/conda/dn/bioconda/aspera-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/aspera-cli
   :alt:   (downloads)
.. |docker_aspera-cli| image:: https://quay.io/repository/biocontainers/aspera-cli/status
   :target: https://quay.io/repository/biocontainers/aspera-cli
.. _`aspera-cli/tags`: https://quay.io/repository/biocontainers/aspera-cli?tab=tags


.. raw:: html

    <script>
        var package = "aspera-cli";
        var versions = ["4.14.0","4.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aspera-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aspera-cli/README.html
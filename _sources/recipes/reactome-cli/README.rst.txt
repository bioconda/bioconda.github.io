:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reactome-cli'
.. highlight: bash

reactome-cli
============

.. conda:recipe:: reactome-cli
   :replaces_section_title:
   :noindex:

   Reactome CLI bioconda

   :homepage: https://github.com/reactome/reactome_galaxy
   :license: Apache-2.0
   :recipe: /`reactome-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reactome-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reactome-cli/meta.yaml>`_

   


.. conda:package:: reactome-cli

   |downloads_reactome-cli| |docker_reactome-cli|

   :versions:
      
      

      ``0.0.0-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install reactome-cli

   and update with::

      mamba update reactome-cli

  To create a new environment, run::

      mamba create --name myenvname reactome-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reactome-cli:<tag>

   (see `reactome-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_reactome-cli| image:: https://img.shields.io/conda/dn/bioconda/reactome-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/reactome-cli
   :alt:   (downloads)
.. |docker_reactome-cli| image:: https://quay.io/repository/biocontainers/reactome-cli/status
   :target: https://quay.io/repository/biocontainers/reactome-cli
.. _`reactome-cli/tags`: https://quay.io/repository/biocontainers/reactome-cli?tab=tags


.. raw:: html

    <script>
        var package = "reactome-cli";
        var versions = ["0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reactome-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reactome-cli/README.html
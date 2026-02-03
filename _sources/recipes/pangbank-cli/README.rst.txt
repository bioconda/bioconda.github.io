:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangbank-cli'
.. highlight: bash

pangbank-cli
============

.. conda:recipe:: pangbank-cli
   :replaces_section_title:
   :noindex:

   Command\-line tool for retrieving pangenomes using the PanGBank API.

   :homepage: https://github.com/labgem/pangbank-cli
   :license: CECILL-2.1
   :recipe: /`pangbank-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangbank-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangbank-cli/meta.yaml>`_

   


.. conda:package:: pangbank-cli

   |downloads_pangbank-cli| |docker_pangbank-cli|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends mash: ``>=2.3,<3.0.0``
   :depends pandas: ``>=2.0.0,<3.0.0``
   :depends pangbank-api: ``>=0.1.1``
   :depends pydantic: ``>=2.10.0,<3.0.0``
   :depends python: ``>=3.10,<3.14``
   :depends requests: ``>=2.32.3``
   :depends rich: ``>=10.0.0``
   :depends typer: ``>=0.15.1``
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

      mamba install pangbank-cli

   and update with::

      mamba update pangbank-cli

  To create a new environment, run::

      mamba create --name myenvname pangbank-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangbank-cli:<tag>

   (see `pangbank-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_pangbank-cli| image:: https://img.shields.io/conda/dn/bioconda/pangbank-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/pangbank-cli
   :alt:   (downloads)
.. |docker_pangbank-cli| image:: https://quay.io/repository/biocontainers/pangbank-cli/status
   :target: https://quay.io/repository/biocontainers/pangbank-cli
.. _`pangbank-cli/tags`: https://quay.io/repository/biocontainers/pangbank-cli?tab=tags


.. raw:: html

    <script>
        var package = "pangbank-cli";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangbank-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangbank-cli/README.html
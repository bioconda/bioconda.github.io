:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argparse-tui'
.. highlight: bash

argparse-tui
============

.. conda:recipe:: argparse-tui
   :replaces_section_title:
   :noindex:

   Present your Argparse CLI as a Textual UI \(TUI\).

   :homepage: https://github.com/fresh2dev/argparse-tui
   :documentation: https://github.com/fresh2dev/argparse-tui/blob/0.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`argparse-tui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse-tui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse-tui/meta.yaml>`_

   


.. conda:package:: argparse-tui

   |downloads_argparse-tui| |docker_argparse-tui|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends python: ``>=3.9``
   :depends textual: ``>=0.61.0,<1``
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

      mamba install argparse-tui

   and update with::

      mamba update argparse-tui

  To create a new environment, run::

      mamba create --name myenvname argparse-tui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/argparse-tui:<tag>

   (see `argparse-tui/tags`_ for valid values for ``<tag>``)


.. |downloads_argparse-tui| image:: https://img.shields.io/conda/dn/bioconda/argparse-tui.svg?style=flat
   :target: https://anaconda.org/bioconda/argparse-tui
   :alt:   (downloads)
.. |docker_argparse-tui| image:: https://quay.io/repository/biocontainers/argparse-tui/status
   :target: https://quay.io/repository/biocontainers/argparse-tui
.. _`argparse-tui/tags`: https://quay.io/repository/biocontainers/argparse-tui?tab=tags


.. raw:: html

    <script>
        var package = "argparse-tui";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argparse-tui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argparse-tui/README.html
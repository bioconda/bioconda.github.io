:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snk-cli'
.. highlight: bash

snk-cli
=======

.. conda:recipe:: snk-cli
   :replaces_section_title:
   :noindex:

   Dynamically generate CLIs from Snakemake configuration files

   :homepage: https://github.com/wytamma/snk-cli
   :license: MIT
   :recipe: /`snk-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snk-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snk-cli/meta.yaml>`_

   


.. conda:package:: snk-cli

   |downloads_snk-cli| |docker_snk-cli|

   :versions:
      
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.2-0``

      

   
   :depends ascii-art: ``>=5.9,<6.dev0``
   :depends datrie: ``>=0.8.2``
   :depends graphviz: ``>=2.38.0``
   :depends makefun: ``>=1.15,<2.dev0``
   :depends pulp: ``<2.8``
   :depends python: ``>=3.8``
   :depends rich: ``>=10.11.0``
   :depends shellingham: ``>=1.3.0``
   :depends snakemake-minimal: ``>=7``
   :depends typer: ``>=0.9,<1.dev0``
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

      mamba install snk-cli

   and update with::

      mamba update snk-cli

  To create a new environment, run::

      mamba create --name myenvname snk-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snk-cli:<tag>

   (see `snk-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_snk-cli| image:: https://img.shields.io/conda/dn/bioconda/snk-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/snk-cli
   :alt:   (downloads)
.. |docker_snk-cli| image:: https://quay.io/repository/biocontainers/snk-cli/status
   :target: https://quay.io/repository/biocontainers/snk-cli
.. _`snk-cli/tags`: https://quay.io/repository/biocontainers/snk-cli?tab=tags


.. raw:: html

    <script>
        var package = "snk-cli";
        var versions = ["0.7.0","0.7.0","0.5.5","0.5.4","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snk-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snk-cli/README.html
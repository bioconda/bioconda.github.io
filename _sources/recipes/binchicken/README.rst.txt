:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binchicken'
.. highlight: bash

binchicken
==========

.. conda:recipe:: binchicken
   :replaces_section_title:
   :noindex:

   Targeted recovery of low abundance metagenome assembled genomes through intelligent coassembly

   :homepage: https://github.com/aroneys/binchicken
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`binchicken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binchicken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binchicken/meta.yaml>`_

   


.. conda:package:: binchicken

   |downloads_binchicken| |docker_binchicken|

   :versions:
      
      

      ``0.11.0-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.0-0``

      

   
   :depends bird_tool_utils_python: ``0.4.*``
   :depends extern: ``0.4.*``
   :depends mamba: ``1.4.*``
   :depends networkx: ``3.1.*``
   :depends parallel: ``20230522.*``
   :depends pigz: ``2.3.*``
   :depends polars: ``0.20.*``
   :depends pyarrow: ``12.0.*``
   :depends pyopenssl: ``>22.1.0``
   :depends python: ``3.10.*``
   :depends ruamel.yaml: ``0.17.*``
   :depends snakemake: ``7.32.*``
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

      mamba install binchicken

   and update with::

      mamba update binchicken

  To create a new environment, run::

      mamba create --name myenvname binchicken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binchicken:<tag>

   (see `binchicken/tags`_ for valid values for ``<tag>``)


.. |downloads_binchicken| image:: https://img.shields.io/conda/dn/bioconda/binchicken.svg?style=flat
   :target: https://anaconda.org/bioconda/binchicken
   :alt:   (downloads)
.. |docker_binchicken| image:: https://quay.io/repository/biocontainers/binchicken/status
   :target: https://quay.io/repository/biocontainers/binchicken
.. _`binchicken/tags`: https://quay.io/repository/biocontainers/binchicken?tab=tags


.. raw:: html

    <script>
        var package = "binchicken";
        var versions = ["0.11.0","0.10.5","0.10.4","0.10.3","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binchicken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binchicken/README.html
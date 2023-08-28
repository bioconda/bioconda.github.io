:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anansnake'
.. highlight: bash

anansnake
=========

.. conda:recipe:: anansnake
   :replaces_section_title:
   :noindex:

   Automated ANANSE analysis with seq2science \& snakemake\!

   :homepage: https://github.com/vanheeringen-lab/anansnake
   :license: Apache-2.0
   :recipe: /`anansnake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anansnake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anansnake/meta.yaml>`_
   :links: biotools: :biotools:`ananse`

   


.. conda:package:: anansnake

   |downloads_anansnake| |docker_anansnake|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends python: ``3.8.*``
   :depends seq2science: ``0.9.7.*``
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

      mamba install anansnake

   and update with::

      mamba update anansnake

  To create a new environment, run::

      mamba create --name myenvname anansnake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anansnake:<tag>

   (see `anansnake/tags`_ for valid values for ``<tag>``)


.. |downloads_anansnake| image:: https://img.shields.io/conda/dn/bioconda/anansnake.svg?style=flat
   :target: https://anaconda.org/bioconda/anansnake
   :alt:   (downloads)
.. |docker_anansnake| image:: https://quay.io/repository/biocontainers/anansnake/status
   :target: https://quay.io/repository/biocontainers/anansnake
.. _`anansnake/tags`: https://quay.io/repository/biocontainers/anansnake?tab=tags


.. raw:: html

    <script>
        var package = "anansnake";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anansnake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anansnake/README.html
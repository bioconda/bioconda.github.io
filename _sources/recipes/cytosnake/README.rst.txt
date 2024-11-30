:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cytosnake'
.. highlight: bash

cytosnake
=========

.. conda:recipe:: cytosnake
   :replaces_section_title:
   :noindex:

   Orchestrating high\-dimensional cell morphology data processing pipelines

   :homepage: https://github.com/WayScience/CytoSnake
   :documentation: https://cytosnake.readthedocs.io/
   
   :license: CC-BY-4.0
   :recipe: /`cytosnake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytosnake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cytosnake/meta.yaml>`_

   


.. conda:package:: cytosnake

   |downloads_cytosnake| |docker_cytosnake|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends mamba: ``>=1.5.0``
   :depends numpy: ``>=1.20``
   :depends pip: 
   :depends pytest: ``>=7.0``
   :depends python: ``3.10.*``
   :depends pyyaml: ``>=6.0.0``
   :depends snakemake: ``>=7.32``
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

      mamba install cytosnake

   and update with::

      mamba update cytosnake

  To create a new environment, run::

      mamba create --name myenvname cytosnake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cytosnake:<tag>

   (see `cytosnake/tags`_ for valid values for ``<tag>``)


.. |downloads_cytosnake| image:: https://img.shields.io/conda/dn/bioconda/cytosnake.svg?style=flat
   :target: https://anaconda.org/bioconda/cytosnake
   :alt:   (downloads)
.. |docker_cytosnake| image:: https://quay.io/repository/biocontainers/cytosnake/status
   :target: https://quay.io/repository/biocontainers/cytosnake
.. _`cytosnake/tags`: https://quay.io/repository/biocontainers/cytosnake?tab=tags


.. raw:: html

    <script>
        var package = "cytosnake";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cytosnake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cytosnake/README.html
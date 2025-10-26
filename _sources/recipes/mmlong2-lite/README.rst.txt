:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmlong2-lite'
.. highlight: bash

mmlong2-lite
============

.. conda:recipe:: mmlong2-lite
   :replaces_section_title:
   :noindex:

   Lightweight workflow for microbial genome recovery using either Nanopore or PacBio HiFi reads

   :homepage: https://github.com/Serka-M/mmlong2-lite
   :license: GPL-3.0-only
   :recipe: /`mmlong2-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmlong2-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmlong2-lite/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.15782630`

   


.. conda:package:: mmlong2-lite

   |downloads_mmlong2-lite| |docker_mmlong2-lite|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends pigz: 
   :depends pv: 
   :depends rsync: 
   :depends singularity: ``3.8.6.*``
   :depends snakemake: ``9.9.0.*``
   :depends tar: 
   :depends zenodo_get: 
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

      mamba install mmlong2-lite

   and update with::

      mamba update mmlong2-lite

  To create a new environment, run::

      mamba create --name myenvname mmlong2-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmlong2-lite:<tag>

   (see `mmlong2-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_mmlong2-lite| image:: https://img.shields.io/conda/dn/bioconda/mmlong2-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/mmlong2-lite
   :alt:   (downloads)
.. |docker_mmlong2-lite| image:: https://quay.io/repository/biocontainers/mmlong2-lite/status
   :target: https://quay.io/repository/biocontainers/mmlong2-lite
.. _`mmlong2-lite/tags`: https://quay.io/repository/biocontainers/mmlong2-lite?tab=tags


.. raw:: html

    <script>
        var package = "mmlong2-lite";
        var versions = ["1.2.1","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmlong2-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmlong2-lite/README.html
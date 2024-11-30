:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont_vbz_hdf_plugin'
.. highlight: bash

ont_vbz_hdf_plugin
==================

.. conda:recipe:: ont_vbz_hdf_plugin
   :replaces_section_title:
   :noindex:

   VBZ compression plugin for nanopore signal data

   :homepage: https://github.com/nanoporetech
   :license: MOZILLA / MPL-2
   :recipe: /`ont_vbz_hdf_plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont_vbz_hdf_plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont_vbz_hdf_plugin/meta.yaml>`_

   


.. conda:package:: ont_vbz_hdf_plugin

   |downloads_ont_vbz_hdf_plugin| |docker_ont_vbz_hdf_plugin|

   :versions:
      
      

      ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends zstd: ``>=1.5.6,<1.6.0a0``
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

      mamba install ont_vbz_hdf_plugin

   and update with::

      mamba update ont_vbz_hdf_plugin

  To create a new environment, run::

      mamba create --name myenvname ont_vbz_hdf_plugin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ont_vbz_hdf_plugin:<tag>

   (see `ont_vbz_hdf_plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_ont_vbz_hdf_plugin| image:: https://img.shields.io/conda/dn/bioconda/ont_vbz_hdf_plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/ont_vbz_hdf_plugin
   :alt:   (downloads)
.. |docker_ont_vbz_hdf_plugin| image:: https://quay.io/repository/biocontainers/ont_vbz_hdf_plugin/status
   :target: https://quay.io/repository/biocontainers/ont_vbz_hdf_plugin
.. _`ont_vbz_hdf_plugin/tags`: https://quay.io/repository/biocontainers/ont_vbz_hdf_plugin?tab=tags


.. raw:: html

    <script>
        var package = "ont_vbz_hdf_plugin";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont_vbz_hdf_plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont_vbz_hdf_plugin/README.html
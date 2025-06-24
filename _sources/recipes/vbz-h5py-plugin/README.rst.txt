:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vbz-h5py-plugin'
.. highlight: bash

vbz-h5py-plugin
===============

.. conda:recipe:: vbz-h5py-plugin
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies VBZ HDF plugin for h5py.

   :homepage: https://github.com/nanoporetech/vbz-h5py-plugin
   :license: MPL-2.0
   :recipe: /`vbz-h5py-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vbz-h5py-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vbz-h5py-plugin/meta.yaml>`_

   


.. conda:package:: vbz-h5py-plugin

   |downloads_vbz-h5py-plugin| |docker_vbz-h5py-plugin|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends h5py: 
   :depends python: ``>=3.7``
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

      mamba install vbz-h5py-plugin

   and update with::

      mamba update vbz-h5py-plugin

  To create a new environment, run::

      mamba create --name myenvname vbz-h5py-plugin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vbz-h5py-plugin:<tag>

   (see `vbz-h5py-plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_vbz-h5py-plugin| image:: https://img.shields.io/conda/dn/bioconda/vbz-h5py-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/vbz-h5py-plugin
   :alt:   (downloads)
.. |docker_vbz-h5py-plugin| image:: https://quay.io/repository/biocontainers/vbz-h5py-plugin/status
   :target: https://quay.io/repository/biocontainers/vbz-h5py-plugin
.. _`vbz-h5py-plugin/tags`: https://quay.io/repository/biocontainers/vbz-h5py-plugin?tab=tags


.. raw:: html

    <script>
        var package = "vbz-h5py-plugin";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vbz-h5py-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vbz-h5py-plugin/README.html
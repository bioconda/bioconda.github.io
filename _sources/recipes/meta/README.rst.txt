:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta'
.. highlight: bash

meta
====

.. conda:recipe:: meta
   :replaces_section_title:
   :noindex:

   Medial Tractography Analysis \(MeTA\)

   :homepage: https://github.com/bagari/meta
   :documentation: https://github.com/bagari/meta/wiki
   
   :license: BSD-3-Clause
   :recipe: /`meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta/meta.yaml>`_

   MeTA is a workflow implemented to minimize microstructural heterogeneity in diffusion MRI \(dMRI\) metrics by extracting and parcellating the core volume along the bundle length in the voxel\-space directly while effectively preserving bundle shape and efficiently capturing the regional variation within and along white matter \(WM\) bundles.



.. conda:package:: meta

   |downloads_meta| |docker_meta|

   :versions:
      
      

      

      

   
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

      mamba install meta

   and update with::

      mamba update meta

  To create a new environment, run::

      mamba create --name myenvname meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meta:<tag>

   (see `meta/tags`_ for valid values for ``<tag>``)


.. |downloads_meta| image:: https://img.shields.io/conda/dn/bioconda/meta.svg?style=flat
   :target: https://anaconda.org/bioconda/meta
   :alt:   (downloads)
.. |docker_meta| image:: https://quay.io/repository/biocontainers/meta/status
   :target: https://quay.io/repository/biocontainers/meta
.. _`meta/tags`: https://quay.io/repository/biocontainers/meta?tab=tags


.. raw:: html

    <script>
        var package = "meta";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta/README.html
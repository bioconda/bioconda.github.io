:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfs'
.. highlight: bash

sfs
===

.. conda:recipe:: sfs
   :replaces_section_title:
   :noindex:

   CLI tool for site frequency spectra.

   :homepage: https://github.com/malthesr/sfs
   :license: MIT
   :recipe: /`sfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs/meta.yaml>`_

   A Rust CLI tool for creating and working with the site frequency spectra. 



.. conda:package:: sfs

   |downloads_sfs| |docker_sfs|

   :versions:
      
      

      ``0.1.0-0``

      

   
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

      mamba install sfs

   and update with::

      mamba update sfs

  To create a new environment, run::

      mamba create --name myenvname sfs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sfs:<tag>

   (see `sfs/tags`_ for valid values for ``<tag>``)


.. |downloads_sfs| image:: https://img.shields.io/conda/dn/bioconda/sfs.svg?style=flat
   :target: https://anaconda.org/bioconda/sfs
   :alt:   (downloads)
.. |docker_sfs| image:: https://quay.io/repository/biocontainers/sfs/status
   :target: https://quay.io/repository/biocontainers/sfs
.. _`sfs/tags`: https://quay.io/repository/biocontainers/sfs?tab=tags


.. raw:: html

    <script>
        var package = "sfs";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfs/README.html
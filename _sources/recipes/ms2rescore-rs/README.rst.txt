:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2rescore-rs'
.. highlight: bash

ms2rescore-rs
=============

.. conda:recipe:: ms2rescore-rs
   :replaces_section_title:
   :noindex:

   Rust functionality for the MS²Rescore package

   :homepage: https://github.com/compomics/ms2rescore-rs
   :license: Apache-2.0
   :recipe: /`ms2rescore-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2rescore-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2rescore-rs/meta.yaml>`_

   


.. conda:package:: ms2rescore-rs

   |downloads_ms2rescore-rs| |docker_ms2rescore-rs|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install ms2rescore-rs

   and update with::

      mamba update ms2rescore-rs

  To create a new environment, run::

      mamba create --name myenvname ms2rescore-rs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ms2rescore-rs:<tag>

   (see `ms2rescore-rs/tags`_ for valid values for ``<tag>``)


.. |downloads_ms2rescore-rs| image:: https://img.shields.io/conda/dn/bioconda/ms2rescore-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2rescore-rs
   :alt:   (downloads)
.. |docker_ms2rescore-rs| image:: https://quay.io/repository/biocontainers/ms2rescore-rs/status
   :target: https://quay.io/repository/biocontainers/ms2rescore-rs
.. _`ms2rescore-rs/tags`: https://quay.io/repository/biocontainers/ms2rescore-rs?tab=tags


.. raw:: html

    <script>
        var package = "ms2rescore-rs";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2rescore-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2rescore-rs/README.html
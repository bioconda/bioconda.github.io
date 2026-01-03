:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxalign-rs'
.. highlight: bash

maxalign-rs
===========

.. conda:recipe:: maxalign-rs
   :replaces_section_title:
   :noindex:

   A Rust reimplementation of the MaxAlign algorithm for optimizing multiple
   sequence alignments by maximizing the alignment area


   :homepage: https://github.com/apcamargo/maxalign-rs
   :license: GPL-3.0-only
   :recipe: /`maxalign-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxalign-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxalign-rs/meta.yaml>`_

   


.. conda:package:: maxalign-rs

   |downloads_maxalign-rs| |docker_maxalign-rs|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install maxalign-rs

   and update with::

      mamba update maxalign-rs

  To create a new environment, run::

      mamba create --name myenvname maxalign-rs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maxalign-rs:<tag>

   (see `maxalign-rs/tags`_ for valid values for ``<tag>``)


.. |downloads_maxalign-rs| image:: https://img.shields.io/conda/dn/bioconda/maxalign-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/maxalign-rs
   :alt:   (downloads)
.. |docker_maxalign-rs| image:: https://quay.io/repository/biocontainers/maxalign-rs/status
   :target: https://quay.io/repository/biocontainers/maxalign-rs
.. _`maxalign-rs/tags`: https://quay.io/repository/biocontainers/maxalign-rs?tab=tags


.. raw:: html

    <script>
        var package = "maxalign-rs";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxalign-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxalign-rs/README.html
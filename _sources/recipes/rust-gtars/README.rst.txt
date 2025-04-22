:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-gtars'
.. highlight: bash

rust-gtars
==========

.. conda:recipe:: rust-gtars
   :replaces_section_title:
   :noindex:

   Performance\-critical tools to manipulate\, analyze\, and process genomic interval data.

   :homepage: https://github.com/databio/gtars
   :documentation: https://docs.rs/crate/gtars/0.2.6
   
   :license: BSD / BSD-2-Clause
   :recipe: /`rust-gtars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-gtars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-gtars/meta.yaml>`_

   


.. conda:package:: rust-gtars

   |downloads_rust-gtars| |docker_rust-gtars|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends openssl: ``>=3.5.0,<4.0a0``
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

      mamba install rust-gtars

   and update with::

      mamba update rust-gtars

  To create a new environment, run::

      mamba create --name myenvname rust-gtars

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rust-gtars:<tag>

   (see `rust-gtars/tags`_ for valid values for ``<tag>``)


.. |downloads_rust-gtars| image:: https://img.shields.io/conda/dn/bioconda/rust-gtars.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-gtars
   :alt:   (downloads)
.. |docker_rust-gtars| image:: https://quay.io/repository/biocontainers/rust-gtars/status
   :target: https://quay.io/repository/biocontainers/rust-gtars
.. _`rust-gtars/tags`: https://quay.io/repository/biocontainers/rust-gtars?tab=tags


.. raw:: html

    <script>
        var package = "rust-gtars";
        var versions = ["0.2.6","0.2.5","0.2.4","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-gtars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-gtars/README.html
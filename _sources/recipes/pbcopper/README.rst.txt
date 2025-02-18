:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcopper'
.. highlight: bash

pbcopper
========

.. conda:recipe:: pbcopper
   :replaces_section_title:
   :noindex:

   Core C\+\+ library for data structures\, algorithms\, and utilities

   :homepage: https://github.com/PacificBiosciences/pbcopper
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcopper/meta.yaml>`_

   


.. conda:package:: pbcopper

   |downloads_pbcopper| |docker_pbcopper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-3</code>,  <code>2.3.0-2</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.9.5-1``,  ``1.9.5-0``,  ``1.9.3-0``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pbcopper

   and update with::

      mamba update pbcopper

  To create a new environment, run::

      mamba create --name myenvname pbcopper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbcopper:<tag>

   (see `pbcopper/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcopper| image:: https://img.shields.io/conda/dn/bioconda/pbcopper.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcopper
   :alt:   (downloads)
.. |docker_pbcopper| image:: https://quay.io/repository/biocontainers/pbcopper/status
   :target: https://quay.io/repository/biocontainers/pbcopper
.. _`pbcopper/tags`: https://quay.io/repository/biocontainers/pbcopper?tab=tags


.. raw:: html

    <script>
        var package = "pbcopper";
        var versions = ["2.3.0","2.3.0","2.3.0","2.3.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcopper/README.html
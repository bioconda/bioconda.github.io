:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdm'
.. highlight: bash

sdm
===

.. conda:recipe:: sdm
   :replaces_section_title:
   :noindex:

   sdm \- simple demultiplex tool for FASTQ demultiplexing and dereplication

   :homepage: https://github.com/hildebra/sdm/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`sdm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdm/meta.yaml>`_

   


.. conda:package:: sdm

   |downloads_sdm| |docker_sdm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18-0</code>,  <code>2.17-1</code>,  <code>2.17-0</code>,  <code>2.14-0</code>,  <code>2.13-0</code>,  <code>2.11-0</code>,  <code>2.10-0</code>,  <code>2.09-0</code>,  <code>2.08-2</code>,  </span></summary>
      

      ``2.18-0``,  ``2.17-1``,  ``2.17-0``,  ``2.14-0``,  ``2.13-0``,  ``2.11-0``,  ``2.10-0``,  ``2.09-0``,  ``2.08-2``,  ``2.08-1``,  ``2.08-0``,  ``2.06-0``,  ``2.05-0``,  ``2.02-1``,  ``2.02-0``,  ``1.94-1``,  ``1.94-0``,  ``1.93-0``,  ``1.92-0``,  ``1.90-0``,  ``1.89-0``,  ``1.87-0``,  ``1.86-0``,  ``1.85-0``,  ``1.84.1-0``,  ``1.84-0``,  ``1.83post0-0``,  ``1.83-0``,  ``1.73-2``,  ``1.73-1``,  ``1.73-0``,  ``1.47-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install sdm

   and update with::

      mamba update sdm

  To create a new environment, run::

      mamba create --name myenvname sdm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sdm:<tag>

   (see `sdm/tags`_ for valid values for ``<tag>``)


.. |downloads_sdm| image:: https://img.shields.io/conda/dn/bioconda/sdm.svg?style=flat
   :target: https://anaconda.org/bioconda/sdm
   :alt:   (downloads)
.. |docker_sdm| image:: https://quay.io/repository/biocontainers/sdm/status
   :target: https://quay.io/repository/biocontainers/sdm
.. _`sdm/tags`: https://quay.io/repository/biocontainers/sdm?tab=tags


.. raw:: html

    <script>
        var package = "sdm";
        var versions = ["2.18","2.17","2.17","2.14","2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdm/README.html
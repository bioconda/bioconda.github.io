:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mztosqlite'
.. highlight: bash

mztosqlite
==========

.. conda:recipe:: mztosqlite
   :replaces_section_title:
   :noindex:

   Convert proteomics data files into a SQLite database.

   :homepage: https://github.com/galaxyproteomics/mzToSQLite
   :license: GPL, Version 2.0
   :recipe: /`mztosqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mztosqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mztosqlite/meta.yaml>`_

   


.. conda:package:: mztosqlite

   |downloads_mztosqlite| |docker_mztosqlite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.0.4-3</code>,  <code>2.0.4-2</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.2-0</code>,  <code>2.0.0-1</code>,  </span></summary>
      

      ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.2-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-6``,  ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install mztosqlite

   and update with::

      mamba update mztosqlite

  To create a new environment, run::

      mamba create --name myenvname mztosqlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mztosqlite:<tag>

   (see `mztosqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_mztosqlite| image:: https://img.shields.io/conda/dn/bioconda/mztosqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/mztosqlite
   :alt:   (downloads)
.. |docker_mztosqlite| image:: https://quay.io/repository/biocontainers/mztosqlite/status
   :target: https://quay.io/repository/biocontainers/mztosqlite
.. _`mztosqlite/tags`: https://quay.io/repository/biocontainers/mztosqlite?tab=tags


.. raw:: html

    <script>
        var package = "mztosqlite";
        var versions = ["2.1.1","2.1.1","2.1.1","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mztosqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mztosqlite/README.html
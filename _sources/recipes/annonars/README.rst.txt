:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annonars'
.. highlight: bash

annonars
========

.. conda:recipe:: annonars
   :replaces_section_title:
   :noindex:

   Genome annotation based on Rust and RocksDB.

   :homepage: https://github.com/bihealth/annonars
   :license: Apache-2.0
   :recipe: /`annonars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars/meta.yaml>`_

   


.. conda:package:: annonars

   |downloads_annonars| |docker_annonars|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.31.1-0</code>,  <code>0.31.0-0</code>,  <code>0.30.1-0</code>,  <code>0.30.0-0</code>,  <code>0.29.4-0</code>,  <code>0.29.3-0</code>,  <code>0.29.2-0</code>,  <code>0.29.1-0</code>,  <code>0.29.0-0</code>,  </span></summary>
      

      ``0.31.1-0``,  ``0.31.0-0``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.4-0``,  ``0.29.3-0``,  ``0.29.2-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.1-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.5-0``,  ``0.24.4-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.24.0-0``,  ``0.23.1-0``,  ``0.22.0-0``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.1-0``,  ``0.13.0-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.4-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.44.2,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.2.0,<4.0a0``
   :depends sqlite: 
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

      mamba install annonars

   and update with::

      mamba update annonars

  To create a new environment, run::

      mamba create --name myenvname annonars

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/annonars:<tag>

   (see `annonars/tags`_ for valid values for ``<tag>``)


.. |downloads_annonars| image:: https://img.shields.io/conda/dn/bioconda/annonars.svg?style=flat
   :target: https://anaconda.org/bioconda/annonars
   :alt:   (downloads)
.. |docker_annonars| image:: https://quay.io/repository/biocontainers/annonars/status
   :target: https://quay.io/repository/biocontainers/annonars
.. _`annonars/tags`: https://quay.io/repository/biocontainers/annonars?tab=tags


.. raw:: html

    <script>
        var package = "annonars";
        var versions = ["0.31.1","0.31.0","0.30.1","0.30.0","0.29.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annonars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annonars/README.html
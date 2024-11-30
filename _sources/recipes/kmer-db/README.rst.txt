:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-db'
.. highlight: bash

kmer-db
=======

.. conda:recipe:: kmer-db
   :replaces_section_title:
   :noindex:

   Kmer\-db is a fast and memory\-efficient tool for estimating evolutionary distances.

   :homepage: https://github.com/refresh-bio/kmer-db
   :license: GPL / GPL-3
   :recipe: /`kmer-db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-db/meta.yaml>`_

   


.. conda:package:: kmer-db

   |downloads_kmer-db| |docker_kmer-db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.5-0</code>,  <code>2.2.2-0</code>,  <code>1.11.1-2</code>,  <code>1.11.1-1</code>,  <code>1.11.1-0</code>,  <code>1.9.4-1</code>,  <code>1.9.4-0</code>,  <code>1.9.2-1</code>,  <code>1.9.2-0</code>,  </span></summary>
      

      ``2.2.5-0``,  ``2.2.2-0``,  ``1.11.1-2``,  ``1.11.1-1``,  ``1.11.1-0``,  ``1.9.4-1``,  ``1.9.4-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.7.6-1``,  ``1.7.6-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install kmer-db

   and update with::

      mamba update kmer-db

  To create a new environment, run::

      mamba create --name myenvname kmer-db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmer-db:<tag>

   (see `kmer-db/tags`_ for valid values for ``<tag>``)


.. |downloads_kmer-db| image:: https://img.shields.io/conda/dn/bioconda/kmer-db.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-db
   :alt:   (downloads)
.. |docker_kmer-db| image:: https://quay.io/repository/biocontainers/kmer-db/status
   :target: https://quay.io/repository/biocontainers/kmer-db
.. _`kmer-db/tags`: https://quay.io/repository/biocontainers/kmer-db?tab=tags


.. raw:: html

    <script>
        var package = "kmer-db";
        var versions = ["2.2.5","2.2.2","1.11.1","1.11.1","1.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-db/README.html
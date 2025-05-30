:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decipher'
.. highlight: bash

bioconductor-decipher
=====================

.. conda:recipe:: bioconductor-decipher
   :replaces_section_title:
   :noindex:

   Tools for curating\, analyzing\, and manipulating biological sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DECIPHER.html
   :license: GPL-3
   :recipe: /`bioconductor-decipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decipher/meta.yaml>`_
   :links: biotools: :biotools:`DECIPHER`

   A toolset for deciphering and managing biological sequences.


.. conda:package:: bioconductor-decipher

   |downloads_bioconductor-decipher| |docker_bioconductor-decipher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.22.0-2</code>,  <code>2.22.0-1</code>,  </span></summary>
      

      ``3.2.0-1``,  ``3.2.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.22.0-2``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.1-0``,  ``2.6.0-1``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
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

      mamba install bioconductor-decipher

   and update with::

      mamba update bioconductor-decipher

  To create a new environment, run::

      mamba create --name myenvname bioconductor-decipher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decipher:<tag>

   (see `bioconductor-decipher/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decipher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decipher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decipher
   :alt:   (downloads)
.. |docker_bioconductor-decipher| image:: https://quay.io/repository/biocontainers/bioconductor-decipher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decipher
.. _`bioconductor-decipher/tags`: https://quay.io/repository/biocontainers/bioconductor-decipher?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decipher";
        var versions = ["3.2.0","3.2.0","2.30.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decipher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decipher/README.html
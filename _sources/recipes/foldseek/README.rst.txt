:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldseek'
.. highlight: bash

foldseek
========

.. conda:recipe:: foldseek
   :replaces_section_title:
   :noindex:

   Foldseek\: fast and accurate protein structure search

   :homepage: https://github.com/steineggerlab/foldseek
   :license: GPL / GPL-3
   :recipe: /`foldseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldseek/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01773-0`, doi: :doi:`10.1038/s41586-023-06510-w`, doi: :doi:`10.1101/2024.04.14.589414`, biotools: :biotools:`foldseek`

   


.. conda:package:: foldseek

   |downloads_foldseek| |docker_foldseek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>10.941cd33-1</code>,  <code>10.941cd33-0</code>,  <code>9.427df8a-2</code>,  <code>9.427df8a-1</code>,  <code>9.427df8a-0</code>,  <code>8.ef4e960-1</code>,  <code>8.ef4e960-0</code>,  <code>7.04e0ec8-0</code>,  <code>6.29e2557-2</code>,  </span></summary>
      

      ``10.941cd33-1``,  ``10.941cd33-0``,  ``9.427df8a-2``,  ``9.427df8a-1``,  ``9.427df8a-0``,  ``8.ef4e960-1``,  ``8.ef4e960-0``,  ``7.04e0ec8-0``,  ``6.29e2557-2``,  ``6.29e2557-1``,  ``6.29e2557-0``,  ``5.53465f0-0``,  ``4.645b789-0``,  ``3.915ef7d-1``,  ``3.915ef7d-0``,  ``2.8bd520-1``,  ``2.8bd520-0``,  ``1.3c64211-1``,  ``1.3c64211-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends aria2: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install foldseek

   and update with::

      mamba update foldseek

  To create a new environment, run::

      mamba create --name myenvname foldseek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/foldseek:<tag>

   (see `foldseek/tags`_ for valid values for ``<tag>``)


.. |downloads_foldseek| image:: https://img.shields.io/conda/dn/bioconda/foldseek.svg?style=flat
   :target: https://anaconda.org/bioconda/foldseek
   :alt:   (downloads)
.. |docker_foldseek| image:: https://quay.io/repository/biocontainers/foldseek/status
   :target: https://quay.io/repository/biocontainers/foldseek
.. _`foldseek/tags`: https://quay.io/repository/biocontainers/foldseek?tab=tags


.. raw:: html

    <script>
        var package = "foldseek";
        var versions = ["10.941cd33","10.941cd33","9.427df8a","9.427df8a","9.427df8a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldseek/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonomy'
.. highlight: bash

taxonomy
========

.. conda:recipe:: taxonomy
   :replaces_section_title:
   :noindex:

   Python and Rust library for loading\, saving\, and manipulating taxonomic trees.

   :homepage: https://github.com/onecodex/taxonomy
   :documentation: https://docs.rs/crate/taxonomy/latest
   
   :license: MIT / MIT
   :recipe: /`taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy/meta.yaml>`_

   


.. conda:package:: taxonomy

   |downloads_taxonomy| |docker_taxonomy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.1-0</code>,  <code>0.10.0-3</code>,  <code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``0.10.1-0``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install taxonomy

   and update with::

      mamba update taxonomy

  To create a new environment, run::

      mamba create --name myenvname taxonomy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxonomy:<tag>

   (see `taxonomy/tags`_ for valid values for ``<tag>``)


.. |downloads_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonomy
   :alt:   (downloads)
.. |docker_taxonomy| image:: https://quay.io/repository/biocontainers/taxonomy/status
   :target: https://quay.io/repository/biocontainers/taxonomy
.. _`taxonomy/tags`: https://quay.io/repository/biocontainers/taxonomy?tab=tags


.. raw:: html

    <script>
        var package = "taxonomy";
        var versions = ["0.10.1","0.10.0","0.10.0","0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonomy/README.html
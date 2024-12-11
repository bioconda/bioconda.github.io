:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spoa'
.. highlight: bash

spoa
====

.. conda:recipe:: spoa
   :replaces_section_title:
   :noindex:

   SIMD partial order alignment tool\/library.

   :homepage: https://github.com/rvaser/spoa
   :documentation: https://github.com/rvaser/spoa/blob/4.1.4/README.md
   
   :license: MIT / MIT
   :recipe: /`spoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spoa/meta.yaml>`_
   :links: biotools: :biotools:`spoa`, doi: :doi:`10.1101/gr.214270.116`

   


.. conda:package:: spoa

   |downloads_spoa| |docker_spoa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.4-3</code>,  <code>4.1.4-2</code>,  <code>4.1.4-1</code>,  <code>4.1.4-0</code>,  <code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.8-0</code>,  </span></summary>
      

      ``4.1.4-3``,  ``4.1.4-2``,  ``4.1.4-1``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.8-0``,  ``4.0.7-5``,  ``4.0.7-4``,  ``4.0.7-3``,  ``4.0.7-2``,  ``4.0.7-1``,  ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.3-0``,  ``4.0.0-0``,  ``3.4.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install spoa

   and update with::

      mamba update spoa

  To create a new environment, run::

      mamba create --name myenvname spoa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spoa:<tag>

   (see `spoa/tags`_ for valid values for ``<tag>``)


.. |downloads_spoa| image:: https://img.shields.io/conda/dn/bioconda/spoa.svg?style=flat
   :target: https://anaconda.org/bioconda/spoa
   :alt:   (downloads)
.. |docker_spoa| image:: https://quay.io/repository/biocontainers/spoa/status
   :target: https://quay.io/repository/biocontainers/spoa
.. _`spoa/tags`: https://quay.io/repository/biocontainers/spoa?tab=tags


.. raw:: html

    <script>
        var package = "spoa";
        var versions = ["4.1.4","4.1.4","4.1.4","4.1.4","4.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spoa/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libcifpp'
.. highlight: bash

libcifpp
========

.. conda:recipe:: libcifpp
   :replaces_section_title:
   :noindex:

   Library containing code to manipulate mmCIF and PDB files.

   :homepage: https://github.com/PDB-REDO/libcifpp
   :documentation: https://pdb-redo.github.io/libcifpp
   
   :license: BSD / BSD-2-Clause
   :recipe: /`libcifpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcifpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libcifpp/meta.yaml>`_

   


.. conda:package:: libcifpp

   |downloads_libcifpp| |docker_libcifpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.0.1-0</code>,  <code>8.0.0-1</code>,  <code>8.0.0-0</code>,  <code>7.0.9-0</code>,  <code>7.0.8-1</code>,  <code>7.0.8-0</code>,  <code>7.0.7-0</code>,  <code>7.0.6-0</code>,  <code>7.0.5-0</code>,  </span></summary>
      

      ``8.0.1-0``,  ``8.0.0-1``,  ``8.0.0-0``,  ``7.0.9-0``,  ``7.0.8-1``,  ``7.0.8-0``,  ``7.0.7-0``,  ``7.0.6-0``,  ``7.0.5-0``,  ``7.0.4-1``,  ``7.0.4-0``,  ``7.0.3-0``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.2.2-0``,  ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.1-0``,  ``4.0.0-0``,  ``3.0.3-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends eigen: 
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

      mamba install libcifpp

   and update with::

      mamba update libcifpp

  To create a new environment, run::

      mamba create --name myenvname libcifpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libcifpp:<tag>

   (see `libcifpp/tags`_ for valid values for ``<tag>``)


.. |downloads_libcifpp| image:: https://img.shields.io/conda/dn/bioconda/libcifpp.svg?style=flat
   :target: https://anaconda.org/bioconda/libcifpp
   :alt:   (downloads)
.. |docker_libcifpp| image:: https://quay.io/repository/biocontainers/libcifpp/status
   :target: https://quay.io/repository/biocontainers/libcifpp
.. _`libcifpp/tags`: https://quay.io/repository/biocontainers/libcifpp?tab=tags


.. raw:: html

    <script>
        var package = "libcifpp";
        var versions = ["8.0.1","8.0.0","8.0.0","7.0.9","7.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libcifpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libcifpp/README.html
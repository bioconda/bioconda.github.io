:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'f5c'
.. highlight: bash

f5c
===

.. conda:recipe:: f5c
   :replaces_section_title:
   :noindex:

   An optimised re\-implementation of the call\-methylation and eventalign modules in Nanopolish.

   :homepage: https://github.com/hasindu2008/f5c
   :license: MIT
   :recipe: /`f5c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/f5c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/f5c/meta.yaml>`_

   


.. conda:package:: f5c

   |downloads_f5c| |docker_f5c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5-2</code>,  <code>1.5-1</code>,  <code>1.5-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-0</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  </span></summary>
      

      ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.9-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-0``,  ``0.6-8``,  ``0.6-7``,  ``0.6-6``,  ``0.6-5``,  ``0.6-4``,  ``0.6-3``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.14.3,<1.14.4.0a0``
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

      mamba install f5c

   and update with::

      mamba update f5c

  To create a new environment, run::

      mamba create --name myenvname f5c

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/f5c:<tag>

   (see `f5c/tags`_ for valid values for ``<tag>``)


.. |downloads_f5c| image:: https://img.shields.io/conda/dn/bioconda/f5c.svg?style=flat
   :target: https://anaconda.org/bioconda/f5c
   :alt:   (downloads)
.. |docker_f5c| image:: https://quay.io/repository/biocontainers/f5c/status
   :target: https://quay.io/repository/biocontainers/f5c
.. _`f5c/tags`: https://quay.io/repository/biocontainers/f5c?tab=tags


.. raw:: html

    <script>
        var package = "f5c";
        var versions = ["1.5","1.5","1.5","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/f5c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/f5c/README.html
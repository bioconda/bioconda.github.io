:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lca'
.. highlight: bash

lca
===

.. conda:recipe:: lca
   :replaces_section_title:
   :noindex:

   LCA \- Lowest Common Ancestor calculation tool

   :homepage: https://github.com/hildebra/LCA/
   :license: GPL-3.0-only
   :recipe: /`lca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lca/meta.yaml>`_

   


.. conda:package:: lca

   |downloads_lca| |docker_lca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.25-0</code>,  <code>0.24-2</code>,  <code>0.24-1</code>,  <code>0.24-0</code>,  <code>0.23-1</code>,  <code>0.23-0</code>,  <code>0.22-0</code>,  <code>0.21-1</code>,  <code>0.21-0</code>,  </span></summary>
      

      ``0.25-0``,  ``0.24-2``,  ``0.24-1``,  ``0.24-0``,  ``0.23-1``,  ``0.23-0``,  ``0.22-0``,  ``0.21-1``,  ``0.21-0``,  ``0.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install lca

   and update with::

      mamba update lca

  To create a new environment, run::

      mamba create --name myenvname lca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lca:<tag>

   (see `lca/tags`_ for valid values for ``<tag>``)


.. |downloads_lca| image:: https://img.shields.io/conda/dn/bioconda/lca.svg?style=flat
   :target: https://anaconda.org/bioconda/lca
   :alt:   (downloads)
.. |docker_lca| image:: https://quay.io/repository/biocontainers/lca/status
   :target: https://quay.io/repository/biocontainers/lca
.. _`lca/tags`: https://quay.io/repository/biocontainers/lca?tab=tags


.. raw:: html

    <script>
        var package = "lca";
        var versions = ["0.25","0.24","0.24","0.24","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lca/README.html
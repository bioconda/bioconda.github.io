:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'veryfasttree'
.. highlight: bash

veryfasttree
============

.. conda:recipe:: veryfasttree
   :replaces_section_title:
   :noindex:

   VeryFastTree \-\- speeding up the estimation of phylogenies for large alignments through parallelization and vectorization strategies.

   :homepage: https://github.com/citiususc/veryfasttree
   :documentation: https://github.com/citiususc/veryfasttree/blob/v4.0.4/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`veryfasttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/veryfasttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/veryfasttree/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa582`, doi: :doi:`10.1093/gigascience/giae055`, biotools: :biotools:`veryfasttree`

   VeryFastTree is a highly\-tuned implementation of the FastTree\-2 tool that takes advantage of parallelization and vectorization strategies 
   to speed up the inference of phylogenies for huge alignments.



.. conda:package:: veryfasttree

   |downloads_veryfasttree| |docker_veryfasttree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.4-1</code>,  <code>4.0.4-0</code>,  <code>4.0.03-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0-0</code>,  <code>3.2.1-2</code>,  <code>3.2.1-1</code>,  <code>3.2.1-0</code>,  </span></summary>
      

      ``4.0.4-1``,  ``4.0.4-0``,  ``4.0.03-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0-0``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
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

      mamba install veryfasttree

   and update with::

      mamba update veryfasttree

  To create a new environment, run::

      mamba create --name myenvname veryfasttree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/veryfasttree:<tag>

   (see `veryfasttree/tags`_ for valid values for ``<tag>``)


.. |downloads_veryfasttree| image:: https://img.shields.io/conda/dn/bioconda/veryfasttree.svg?style=flat
   :target: https://anaconda.org/bioconda/veryfasttree
   :alt:   (downloads)
.. |docker_veryfasttree| image:: https://quay.io/repository/biocontainers/veryfasttree/status
   :target: https://quay.io/repository/biocontainers/veryfasttree
.. _`veryfasttree/tags`: https://quay.io/repository/biocontainers/veryfasttree?tab=tags


.. raw:: html

    <script>
        var package = "veryfasttree";
        var versions = ["4.0.4","4.0.4","4.0.03","4.0.2","4.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/veryfasttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/veryfasttree/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecolitk'
.. highlight: bash

bioconductor-ecolitk
====================

.. conda:recipe:: bioconductor-ecolitk
   :replaces_section_title:
   :noindex:

   Meta\-data and tools for E. coli

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ecolitk.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ecolitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolitk/meta.yaml>`_

   Meta\-data and tools to work with E. coli. The tools are mostly plotting functions to work with circular genomes. They can used with other genomes\/plasmids.


.. conda:package:: bioconductor-ecolitk

   |downloads_bioconductor-ecolitk| |docker_bioconductor-ecolitk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-ecolitk

   and update with::

      mamba update bioconductor-ecolitk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ecolitk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecolitk:<tag>

   (see `bioconductor-ecolitk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecolitk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecolitk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecolitk
   :alt:   (downloads)
.. |docker_bioconductor-ecolitk| image:: https://quay.io/repository/biocontainers/bioconductor-ecolitk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecolitk
.. _`bioconductor-ecolitk/tags`: https://quay.io/repository/biocontainers/bioconductor-ecolitk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ecolitk";
        var versions = ["1.74.0","1.72.0","1.70.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecolitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecolitk/README.html
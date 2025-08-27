:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chopsticks'
.. highlight: bash

bioconductor-chopsticks
=======================

.. conda:recipe:: bioconductor-chopsticks
   :replaces_section_title:
   :noindex:

   The \'snp.matrix\' and \'X.snp.matrix\' Classes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/chopsticks.html
   :license: GPL-3
   :recipe: /`bioconductor-chopsticks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chopsticks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chopsticks/meta.yaml>`_
   :links: biotools: :biotools:`chopsticks`, doi: :doi:`10.1038/nmeth.3252`

   Implements classes and methods for large\-scale SNP association studies


.. conda:package:: bioconductor-chopsticks

   |downloads_bioconductor-chopsticks| |docker_bioconductor-chopsticks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.60.0-2</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.60.0-2``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-survival: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-chopsticks

   and update with::

      mamba update bioconductor-chopsticks

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chopsticks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chopsticks:<tag>

   (see `bioconductor-chopsticks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chopsticks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chopsticks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chopsticks
   :alt:   (downloads)
.. |docker_bioconductor-chopsticks| image:: https://quay.io/repository/biocontainers/bioconductor-chopsticks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chopsticks
.. _`bioconductor-chopsticks/tags`: https://quay.io/repository/biocontainers/bioconductor-chopsticks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chopsticks";
        var versions = ["1.72.0","1.68.0","1.68.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chopsticks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chopsticks/README.html
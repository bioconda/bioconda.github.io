:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphat'
.. highlight: bash

bioconductor-graphat
====================

.. conda:recipe:: bioconductor-graphat
   :replaces_section_title:
   :noindex:

   Graph Theoretic Association Tests

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GraphAT.html
   :license: LGPL
   :recipe: /`bioconductor-graphat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphat/meta.yaml>`_
   :links: biotools: :biotools:`graphat`, doi: :doi:`10.1093/bioinformatics/bth405`

   Functions and data used in Balasubramanian\, et al. \(2004\)


.. conda:package:: bioconductor-graphat

   |downloads_bioconductor-graphat| |docker_bioconductor-graphat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mcmcpack: 
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

      mamba install bioconductor-graphat

   and update with::

      mamba update bioconductor-graphat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-graphat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graphat:<tag>

   (see `bioconductor-graphat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graphat
   :alt:   (downloads)
.. |docker_bioconductor-graphat| image:: https://quay.io/repository/biocontainers/bioconductor-graphat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphat
.. _`bioconductor-graphat/tags`: https://quay.io/repository/biocontainers/bioconductor-graphat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graphat";
        var versions = ["1.78.0","1.74.0","1.72.0","1.70.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphat/README.html
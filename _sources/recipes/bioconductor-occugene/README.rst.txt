:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-occugene'
.. highlight: bash

bioconductor-occugene
=====================

.. conda:recipe:: bioconductor-occugene
   :replaces_section_title:
   :noindex:

   Functions for Multinomial Occupancy Distribution

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/occugene.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-occugene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-occugene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-occugene/meta.yaml>`_
   :links: biotools: :biotools:`occugene`, doi: :doi:`10.1007/978-1-59745-321-9_22`

   Statistical tools for building random mutagenesis libraries for prokaryotes. The package has functions for handling the occupancy distribution for a multinomial and for estimating the number of essential genes in random transposon mutagenesis libraries.


.. conda:package:: bioconductor-occugene

   |downloads_bioconductor-occugene| |docker_bioconductor-occugene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-occugene

   and update with::

      mamba update bioconductor-occugene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-occugene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-occugene:<tag>

   (see `bioconductor-occugene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-occugene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-occugene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-occugene
   :alt:   (downloads)
.. |docker_bioconductor-occugene| image:: https://quay.io/repository/biocontainers/bioconductor-occugene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-occugene
.. _`bioconductor-occugene/tags`: https://quay.io/repository/biocontainers/bioconductor-occugene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-occugene";
        var versions = ["1.60.0","1.58.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-occugene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-occugene/README.html
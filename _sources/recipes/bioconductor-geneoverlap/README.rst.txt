:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneoverlap'
.. highlight: bash

bioconductor-geneoverlap
========================

.. conda:recipe:: bioconductor-geneoverlap
   :replaces_section_title:
   :noindex:

   Test and visualize gene overlaps

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeneOverlap.html
   :license: GPL-3
   :recipe: /`bioconductor-geneoverlap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneoverlap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneoverlap/meta.yaml>`_
   :links: biotools: :biotools:`geneoverlap`, doi: :doi:`10.1167/iovs.16-20618`

   Test two sets of gene lists and visualize the results.


.. conda:package:: bioconductor-geneoverlap

   |downloads_bioconductor-geneoverlap| |docker_bioconductor-geneoverlap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.23.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.23.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-geneoverlap

   and update with::

      mamba update bioconductor-geneoverlap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneoverlap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneoverlap:<tag>

   (see `bioconductor-geneoverlap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneoverlap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneoverlap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneoverlap
   :alt:   (downloads)
.. |docker_bioconductor-geneoverlap| image:: https://quay.io/repository/biocontainers/bioconductor-geneoverlap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneoverlap
.. _`bioconductor-geneoverlap/tags`: https://quay.io/repository/biocontainers/bioconductor-geneoverlap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneoverlap";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneoverlap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneoverlap/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-category'
.. highlight: bash

bioconductor-category
=====================

.. conda:recipe:: bioconductor-category
   :replaces_section_title:
   :noindex:

   Category Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Category.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-category <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-category>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-category/meta.yaml>`_
   :links: biotools: :biotools:`category`, doi: :doi:`10.1038/nmeth.3252`

   A collection of tools for performing category \(gene set enrichment\) analysis.


.. conda:package:: bioconductor-category

   |downloads_bioconductor-category| |docker_bioconductor-category|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.68.0-0</code>,  <code>2.66.0-0</code>,  <code>2.64.0-0</code>,  <code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  </span></summary>
      

      ``2.68.0-0``,  ``2.66.0-0``,  ``2.64.0-0``,  ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.1-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-matrix: 
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

      mamba install bioconductor-category

   and update with::

      mamba update bioconductor-category

  To create a new environment, run::

      mamba create --name myenvname bioconductor-category

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-category:<tag>

   (see `bioconductor-category/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-category| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-category.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-category
   :alt:   (downloads)
.. |docker_bioconductor-category| image:: https://quay.io/repository/biocontainers/bioconductor-category/status
   :target: https://quay.io/repository/biocontainers/bioconductor-category
.. _`bioconductor-category/tags`: https://quay.io/repository/biocontainers/bioconductor-category?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-category";
        var versions = ["2.68.0","2.66.0","2.64.0","2.60.0","2.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-category/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-category/README.html
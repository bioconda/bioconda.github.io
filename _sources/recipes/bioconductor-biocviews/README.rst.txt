:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocviews'
.. highlight: bash

bioconductor-biocviews
======================

.. conda:recipe:: bioconductor-biocviews
   :replaces_section_title:
   :noindex:

   Categorized views of R package repositories

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biocViews.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocviews <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocviews>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocviews/meta.yaml>`_
   :links: biotools: :biotools:`biocviews`, doi: :doi:`10.1038/nmeth.3252`

   Infrastructure to support \'views\' used to classify Bioconductor packages. \'biocViews\' are directed acyclic graphs of terms from a controlled vocabulary. There are three major classifications\, corresponding to \'software\'\, \'annotation\'\, and \'experiment data\' packages.


.. conda:package:: bioconductor-biocviews

   |downloads_bioconductor-biocviews| |docker_bioconductor-biocviews|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.1-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.1-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.1-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.1-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.2-0``,  ``1.50.9-0``,  ``1.48.3-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-rcurl: 
   :depends r-runit: 
   :depends r-xml: 
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

      mamba install bioconductor-biocviews

   and update with::

      mamba update bioconductor-biocviews

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocviews

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocviews:<tag>

   (see `bioconductor-biocviews/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocviews| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocviews.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocviews
   :alt:   (downloads)
.. |docker_bioconductor-biocviews| image:: https://quay.io/repository/biocontainers/bioconductor-biocviews/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocviews
.. _`bioconductor-biocviews/tags`: https://quay.io/repository/biocontainers/bioconductor-biocviews?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocviews";
        var versions = ["1.74.0","1.70.0","1.68.1","1.66.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocviews/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocviews/README.html
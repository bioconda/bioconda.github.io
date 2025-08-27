:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bags'
.. highlight: bash

bioconductor-bags
=================

.. conda:recipe:: bioconductor-bags
   :replaces_section_title:
   :noindex:

   A Bayesian Approach for Geneset Selection

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BAGS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bags <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bags>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bags/meta.yaml>`_

   R package providing functions to perform geneset significance analysis over simple cross\-sectional data between 2 and 5 phenotypes of interest.


.. conda:package:: bioconductor-bags

   |downloads_bioconductor-bags| |docker_bioconductor-bags|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.46.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.34.0-2</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  </span></summary>
      

      ``2.46.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.34.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-2``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.0-1``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-breastcancervdx: ``>=1.44.0,<1.45.0``
   :depends bioconductor-breastcancervdx: ``>=1.44.0,<1.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-bags

   and update with::

      mamba update bioconductor-bags

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bags

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bags:<tag>

   (see `bioconductor-bags/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bags| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bags.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bags
   :alt:   (downloads)
.. |docker_bioconductor-bags| image:: https://quay.io/repository/biocontainers/bioconductor-bags/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bags
.. _`bioconductor-bags/tags`: https://quay.io/repository/biocontainers/bioconductor-bags?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bags";
        var versions = ["2.46.0","2.42.0","2.40.0","2.38.0","2.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bags/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bags/README.html
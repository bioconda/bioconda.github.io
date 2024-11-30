:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-categorycompare'
.. highlight: bash

bioconductor-categorycompare
============================

.. conda:recipe:: bioconductor-categorycompare
   :replaces_section_title:
   :noindex:

   Meta\-analysis of high\-throughput experiments using feature annotations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/categoryCompare.html
   :license: GPL-2
   :recipe: /`bioconductor-categorycompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-categorycompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-categorycompare/meta.yaml>`_

   Calculates significant annotations \(categories\) in each of two \(or more\) feature \(i.e. gene\) lists\, determines the overlap between the annotations\, and returns graphical and tabular data about the significant annotations and which combinations of feature lists the annotations were found to be significant. Interactive exploration is facilitated through the use of RCytoscape \(heavily suggested\).


.. conda:package:: bioconductor-categorycompare

   |downloads_bioconductor-categorycompare| |docker_bioconductor-categorycompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-category: ``>=2.68.0,<2.69.0``
   :depends bioconductor-gostats: ``>=2.68.0,<2.69.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-rcy3: ``>=2.22.0,<2.23.0``
   :depends cytoscape: ``>=3.6.1``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorspace: 
   :depends r-hwriter: 
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

      mamba install bioconductor-categorycompare

   and update with::

      mamba update bioconductor-categorycompare

  To create a new environment, run::

      mamba create --name myenvname bioconductor-categorycompare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-categorycompare:<tag>

   (see `bioconductor-categorycompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-categorycompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-categorycompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-categorycompare
   :alt:   (downloads)
.. |docker_bioconductor-categorycompare| image:: https://quay.io/repository/biocontainers/bioconductor-categorycompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-categorycompare
.. _`bioconductor-categorycompare/tags`: https://quay.io/repository/biocontainers/bioconductor-categorycompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-categorycompare";
        var versions = ["1.46.0","1.44.0","1.42.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-categorycompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-categorycompare/README.html
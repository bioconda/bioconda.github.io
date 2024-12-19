:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-paircompviz'
.. highlight: bash

bioconductor-paircompviz
========================

.. conda:recipe:: bioconductor-paircompviz
   :replaces_section_title:
   :noindex:

   Multiple comparison test visualization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/paircompviz.html
   :license: GPL (>=3.0)
   :recipe: /`bioconductor-paircompviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paircompviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-paircompviz/meta.yaml>`_
   :links: biotools: :biotools:`paircompviz`, doi: :doi:`10.1038/nmeth.3252`

   This package provides visualization of the results from the multiple \(i.e. pairwise\) comparison tests such as pairwise.t.test\, pairwise.prop.test or pairwise.wilcox.test. The groups being compared are visualized as nodes in Hasse diagram. Such approach enables very clear and vivid depiction of which group is significantly greater than which others\, especially if comparing a large number of groups.


.. conda:package:: bioconductor-paircompviz

   |downloads_bioconductor-paircompviz| |docker_bioconductor-paircompviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
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

      mamba install bioconductor-paircompviz

   and update with::

      mamba update bioconductor-paircompviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-paircompviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-paircompviz:<tag>

   (see `bioconductor-paircompviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-paircompviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-paircompviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-paircompviz
   :alt:   (downloads)
.. |docker_bioconductor-paircompviz| image:: https://quay.io/repository/biocontainers/bioconductor-paircompviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-paircompviz
.. _`bioconductor-paircompviz/tags`: https://quay.io/repository/biocontainers/bioconductor-paircompviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-paircompviz";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-paircompviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-paircompviz/README.html
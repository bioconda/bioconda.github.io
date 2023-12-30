:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowclust'
.. highlight: bash

bioconductor-flowclust
======================

.. conda:recipe:: bioconductor-flowclust
   :replaces_section_title:
   :noindex:

   Clustering for Flow Cytometry

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowClust.html
   :license: MIT
   :recipe: /`bioconductor-flowclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclust/meta.yaml>`_

   Robust model\-based clustering using a t\-mixture model with Box\-Cox transformation. Note\: users should have GSL installed. Windows users\: \'consult the README file available in the inst directory of the source distribution for necessary configuration instructions\'.


.. conda:package:: bioconductor-flowclust

   |downloads_bioconductor-flowclust| |docker_bioconductor-flowclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.40.0-0</code>,  <code>3.38.0-0</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.32.0-2</code>,  <code>3.32.0-1</code>,  <code>3.32.0-0</code>,  <code>3.30.0-0</code>,  <code>3.28.0-2</code>,  </span></summary>
      

      ``3.40.0-0``,  ``3.38.0-0``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.32.0-2``,  ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-2``,  ``3.28.0-1``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.22.0-1``,  ``3.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-flowclust

   and update with::

      mamba update bioconductor-flowclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowclust:<tag>

   (see `bioconductor-flowclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowclust
   :alt:   (downloads)
.. |docker_bioconductor-flowclust| image:: https://quay.io/repository/biocontainers/bioconductor-flowclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowclust
.. _`bioconductor-flowclust/tags`: https://quay.io/repository/biocontainers/bioconductor-flowclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowclust";
        var versions = ["3.40.0","3.38.0","3.36.0","3.36.0","3.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowclust/README.html
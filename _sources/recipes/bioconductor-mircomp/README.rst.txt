:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mircomp'
.. highlight: bash

bioconductor-mircomp
====================

.. conda:recipe:: bioconductor-mircomp
   :replaces_section_title:
   :noindex:

   Tools to assess and compare miRNA expression estimatation methods

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/miRcomp.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-mircomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mircomp/meta.yaml>`_

   Based on a large miRNA dilution study\, this package provides tools to read in the raw amplification data and use these data to assess the performance of methods that estimate expression from the amplification curves.


.. conda:package:: bioconductor-mircomp

   |downloads_bioconductor-mircomp| |docker_bioconductor-mircomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-mircompdata: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
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

      mamba install bioconductor-mircomp

   and update with::

      mamba update bioconductor-mircomp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mircomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mircomp:<tag>

   (see `bioconductor-mircomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mircomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mircomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mircomp
   :alt:   (downloads)
.. |docker_bioconductor-mircomp| image:: https://quay.io/repository/biocontainers/bioconductor-mircomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mircomp
.. _`bioconductor-mircomp/tags`: https://quay.io/repository/biocontainers/bioconductor-mircomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mircomp";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mircomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mircomp/README.html
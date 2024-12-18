:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-factdesign'
.. highlight: bash

bioconductor-factdesign
=======================

.. conda:recipe:: bioconductor-factdesign
   :replaces_section_title:
   :noindex:

   Factorial designed microarray experiment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/factDesign.html
   :license: LGPL
   :recipe: /`bioconductor-factdesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factdesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factdesign/meta.yaml>`_

   This package provides a set of tools for analyzing data from a factorial designed microarray experiment\, or any microarray experiment for which a linear model is appropriate. The functions can be used to evaluate tests of contrast of biological interest and perform single outlier detection.


.. conda:package:: bioconductor-factdesign

   |downloads_bioconductor-factdesign| |docker_bioconductor-factdesign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
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

      mamba install bioconductor-factdesign

   and update with::

      mamba update bioconductor-factdesign

  To create a new environment, run::

      mamba create --name myenvname bioconductor-factdesign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-factdesign:<tag>

   (see `bioconductor-factdesign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-factdesign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-factdesign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-factdesign
   :alt:   (downloads)
.. |docker_bioconductor-factdesign| image:: https://quay.io/repository/biocontainers/bioconductor-factdesign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-factdesign
.. _`bioconductor-factdesign/tags`: https://quay.io/repository/biocontainers/bioconductor-factdesign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-factdesign";
        var versions = ["1.82.0","1.78.0","1.76.0","1.74.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-factdesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-factdesign/README.html
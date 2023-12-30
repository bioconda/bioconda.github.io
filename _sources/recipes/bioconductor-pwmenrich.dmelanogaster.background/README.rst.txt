:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich.dmelanogaster.background'
.. highlight: bash

bioconductor-pwmenrich.dmelanogaster.background
===============================================

.. conda:recipe:: bioconductor-pwmenrich.dmelanogaster.background
   :replaces_section_title:
   :noindex:

   D. melanogaster background for PWMEnrich

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/PWMEnrich.Dmelanogaster.background.html
   :license: GPL-3
   :recipe: /`bioconductor-pwmenrich.dmelanogaster.background <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.dmelanogaster.background>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.dmelanogaster.background/meta.yaml>`_

   PWMEnrich pre\-compiled background objects for Drosophila melanogaster and MotifDb D. melanogaster motifs.


.. conda:package:: bioconductor-pwmenrich.dmelanogaster.background

   |downloads_bioconductor-pwmenrich.dmelanogaster.background| |docker_bioconductor-pwmenrich.dmelanogaster.background|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.36.0-0</code>,  <code>4.34.0-0</code>,  <code>4.32.0-0</code>,  <code>4.28.0-1</code>,  <code>4.28.0-0</code>,  <code>4.26.1-0</code>,  <code>4.24.0-1</code>,  <code>4.24.0-0</code>,  <code>4.22.0-0</code>,  </span></summary>
      

      ``4.36.0-0``,  ``4.34.0-0``,  ``4.32.0-0``,  ``4.28.0-1``,  ``4.28.0-0``,  ``4.26.1-0``,  ``4.24.0-1``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.18.0-1``,  ``4.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-pwmenrich: ``>=4.38.0,<4.39.0``
   :depends curl: 
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

      mamba install bioconductor-pwmenrich.dmelanogaster.background

   and update with::

      mamba update bioconductor-pwmenrich.dmelanogaster.background

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pwmenrich.dmelanogaster.background

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwmenrich.dmelanogaster.background:<tag>

   (see `bioconductor-pwmenrich.dmelanogaster.background/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwmenrich.dmelanogaster.background| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.dmelanogaster.background.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich.dmelanogaster.background
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich.dmelanogaster.background| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.dmelanogaster.background/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.dmelanogaster.background
.. _`bioconductor-pwmenrich.dmelanogaster.background/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.dmelanogaster.background?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich.dmelanogaster.background";
        var versions = ["4.36.0","4.34.0","4.32.0","4.28.0","4.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich.dmelanogaster.background/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich.dmelanogaster.background/README.html
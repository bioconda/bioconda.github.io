:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich.mmusculus.background'
.. highlight: bash

bioconductor-pwmenrich.mmusculus.background
===========================================

.. conda:recipe:: bioconductor-pwmenrich.mmusculus.background
   :replaces_section_title:
   :noindex:

   M. musculus background for PWMEnrich

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/PWMEnrich.Mmusculus.background.html
   :license: GPL-3
   :recipe: /`bioconductor-pwmenrich.mmusculus.background <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.mmusculus.background>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.mmusculus.background/meta.yaml>`_

   PWMEnrich pre\-compiled background objects for M.musculus \(mouse\) and MotifDb M. musculus motifs.


.. conda:package:: bioconductor-pwmenrich.mmusculus.background

   |downloads_bioconductor-pwmenrich.mmusculus.background| |docker_bioconductor-pwmenrich.mmusculus.background|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.40.0-0</code>,  <code>4.36.0-0</code>,  <code>4.34.0-0</code>,  <code>4.32.0-0</code>,  <code>4.28.0-1</code>,  <code>4.28.0-0</code>,  <code>4.26.1-0</code>,  <code>4.24.0-1</code>,  <code>4.24.0-0</code>,  </span></summary>
      

      ``4.40.0-0``,  ``4.36.0-0``,  ``4.34.0-0``,  ``4.32.0-0``,  ``4.28.0-1``,  ``4.28.0-0``,  ``4.26.1-0``,  ``4.24.0-1``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.18.0-1``,  ``4.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-pwmenrich: ``>=4.42.0,<4.43.0``
   :depends curl: 
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

      mamba install bioconductor-pwmenrich.mmusculus.background

   and update with::

      mamba update bioconductor-pwmenrich.mmusculus.background

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pwmenrich.mmusculus.background

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwmenrich.mmusculus.background:<tag>

   (see `bioconductor-pwmenrich.mmusculus.background/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwmenrich.mmusculus.background| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.mmusculus.background.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich.mmusculus.background
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich.mmusculus.background| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background
.. _`bioconductor-pwmenrich.mmusculus.background/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.mmusculus.background?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich.mmusculus.background";
        var versions = ["4.40.0","4.36.0","4.34.0","4.32.0","4.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich.mmusculus.background/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich.mmusculus.background/README.html
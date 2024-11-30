:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nondetects'
.. highlight: bash

bioconductor-nondetects
=======================

.. conda:recipe:: bioconductor-nondetects
   :replaces_section_title:
   :noindex:

   Non\-detects in qPCR data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/nondetects.html
   :license: GPL-3
   :recipe: /`bioconductor-nondetects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nondetects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nondetects/meta.yaml>`_
   :links: biotools: :biotools:`nondetects`

   Methods to model and impute non\-detects in the results of qPCR experiments.


.. conda:package:: bioconductor-nondetects

   |downloads_bioconductor-nondetects| |docker_bioconductor-nondetects|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-htqpcr: ``>=1.56.0,<1.57.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-arm: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mvtnorm: 
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

      mamba install bioconductor-nondetects

   and update with::

      mamba update bioconductor-nondetects

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nondetects

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nondetects:<tag>

   (see `bioconductor-nondetects/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nondetects| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nondetects.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nondetects
   :alt:   (downloads)
.. |docker_bioconductor-nondetects| image:: https://quay.io/repository/biocontainers/bioconductor-nondetects/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nondetects
.. _`bioconductor-nondetects/tags`: https://quay.io/repository/biocontainers/bioconductor-nondetects?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nondetects";
        var versions = ["2.32.0","2.30.0","2.28.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nondetects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nondetects/README.html
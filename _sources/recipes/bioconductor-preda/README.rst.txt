:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-preda'
.. highlight: bash

bioconductor-preda
==================

.. conda:recipe:: bioconductor-preda
   :replaces_section_title:
   :noindex:

   Position Related Data Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PREDA.html
   :license: GPL-2
   :recipe: /`bioconductor-preda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-preda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-preda/meta.yaml>`_
   :links: biotools: :biotools:`preda`, doi: :doi:`10.1093/bioinformatics/btr404`

   Package for the position related analysis of quantitative functional genomics data.


.. conda:package:: bioconductor-preda

   |downloads_bioconductor-preda| |docker_bioconductor-preda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.78.0,<1.79.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lokern: ``>=1.0.9``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-preda

   and update with::

      mamba update bioconductor-preda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-preda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-preda:<tag>

   (see `bioconductor-preda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-preda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-preda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-preda
   :alt:   (downloads)
.. |docker_bioconductor-preda| image:: https://quay.io/repository/biocontainers/bioconductor-preda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-preda
.. _`bioconductor-preda/tags`: https://quay.io/repository/biocontainers/bioconductor-preda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-preda";
        var versions = ["1.46.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-preda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-preda/README.html
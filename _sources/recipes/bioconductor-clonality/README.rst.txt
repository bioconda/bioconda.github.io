:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clonality'
.. highlight: bash

bioconductor-clonality
======================

.. conda:recipe:: bioconductor-clonality
   :replaces_section_title:
   :noindex:

   Clonality testing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Clonality.html
   :license: GPL-3
   :recipe: /`bioconductor-clonality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clonality/meta.yaml>`_
   :links: biotools: :biotools:`clonality`, doi: :doi:`10.1093/bioinformatics/btr268`

   Statistical tests for clonality versus independence of tumors from the same patient based on their LOH or genomewide copy number profiles


.. conda:package:: bioconductor-clonality

   |downloads_bioconductor-clonality| |docker_bioconductor-clonality|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.47.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.47.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.74.0,<1.75.0``
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

      mamba install bioconductor-clonality

   and update with::

      mamba update bioconductor-clonality

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clonality

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clonality:<tag>

   (see `bioconductor-clonality/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clonality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clonality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clonality
   :alt:   (downloads)
.. |docker_bioconductor-clonality| image:: https://quay.io/repository/biocontainers/bioconductor-clonality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clonality
.. _`bioconductor-clonality/tags`: https://quay.io/repository/biocontainers/bioconductor-clonality?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clonality";
        var versions = ["1.47.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clonality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clonality/README.html
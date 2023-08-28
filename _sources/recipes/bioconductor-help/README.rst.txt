:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-help'
.. highlight: bash

bioconductor-help
=================

.. conda:recipe:: bioconductor-help
   :replaces_section_title:
   :noindex:

   Tools for HELP data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HELP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-help <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-help>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-help/meta.yaml>`_
   :links: biotools: :biotools:`help`, doi: :doi:`10.1038/nmeth.3252`

   The package contains a modular pipeline for analysis of HELP microarray data\, and includes graphical and mathematical tools with more general applications.


.. conda:package:: bioconductor-help

   |downloads_bioconductor-help| |docker_bioconductor-help|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-help

   and update with::

      mamba update bioconductor-help

  To create a new environment, run::

      mamba create --name myenvname bioconductor-help

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-help:<tag>

   (see `bioconductor-help/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-help| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-help.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-help
   :alt:   (downloads)
.. |docker_bioconductor-help| image:: https://quay.io/repository/biocontainers/bioconductor-help/status
   :target: https://quay.io/repository/biocontainers/bioconductor-help
.. _`bioconductor-help/tags`: https://quay.io/repository/biocontainers/bioconductor-help?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-help";
        var versions = ["1.58.0","1.56.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-help/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-help/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-protgenerics'
.. highlight: bash

bioconductor-protgenerics
=========================

.. conda:recipe:: bioconductor-protgenerics
   :replaces_section_title:
   :noindex:

   Generic infrastructure for Bioconductor mass spectrometry packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ProtGenerics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-protgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-protgenerics/meta.yaml>`_
   :links: biotools: :biotools:`protgenerics`, doi: :doi:`10.1038/nmeth.3252`

   S4 generic functions and classes needed by Bioconductor proteomics packages.


.. conda:package:: bioconductor-protgenerics

   |downloads_bioconductor-protgenerics| |docker_bioconductor-protgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-protgenerics

   and update with::

      mamba update bioconductor-protgenerics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-protgenerics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-protgenerics:<tag>

   (see `bioconductor-protgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-protgenerics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-protgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-protgenerics
   :alt:   (downloads)
.. |docker_bioconductor-protgenerics| image:: https://quay.io/repository/biocontainers/bioconductor-protgenerics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-protgenerics
.. _`bioconductor-protgenerics/tags`: https://quay.io/repository/biocontainers/bioconductor-protgenerics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-protgenerics";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-protgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-protgenerics/README.html
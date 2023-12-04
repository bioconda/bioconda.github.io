:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocgenerics'
.. highlight: bash

bioconductor-biocgenerics
=========================

.. conda:recipe:: bioconductor-biocgenerics
   :replaces_section_title:
   :noindex:

   S4 generic functions used in Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocGenerics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgenerics/meta.yaml>`_
   :links: biotools: :biotools:`biocgenerics`

   The package defines many S4 generic functions used in Bioconductor.


.. conda:package:: bioconductor-biocgenerics

   |downloads_bioconductor-biocgenerics| |docker_bioconductor-biocgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.48.1-2</code>,  <code>0.48.1-1</code>,  <code>0.48.1-0</code>,  <code>0.46.0-0</code>,  <code>0.44.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-1</code>,  <code>0.36.0-0</code>,  </span></summary>
      

      ``0.48.1-2``,  ``0.48.1-1``,  ``0.48.1-0``,  ``0.46.0-0``,  ``0.44.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.22.1-0``,  ``0.22.0-0``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.14.0-0``

      
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

      mamba install bioconductor-biocgenerics

   and update with::

      mamba update bioconductor-biocgenerics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocgenerics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocgenerics:<tag>

   (see `bioconductor-biocgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocgenerics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocgenerics
   :alt:   (downloads)
.. |docker_bioconductor-biocgenerics| image:: https://quay.io/repository/biocontainers/bioconductor-biocgenerics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocgenerics
.. _`bioconductor-biocgenerics/tags`: https://quay.io/repository/biocontainers/bioconductor-biocgenerics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocgenerics";
        var versions = ["0.48.1","0.48.1","0.48.1","0.46.0","0.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocgenerics/README.html
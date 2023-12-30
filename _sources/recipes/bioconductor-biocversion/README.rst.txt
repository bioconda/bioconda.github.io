:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocversion'
.. highlight: bash

bioconductor-biocversion
========================

.. conda:recipe:: bioconductor-biocversion
   :replaces_section_title:
   :noindex:

   Set the appropriate version of Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BiocVersion.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocversion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocversion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocversion/meta.yaml>`_

   This package provides repository information for the appropriate version of Bioconductor.


.. conda:package:: bioconductor-biocversion

   |downloads_bioconductor-biocversion| |docker_bioconductor-biocversion|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.1-0</code>,  <code>3.17.1-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.13.1-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.10.1-0</code>,  </span></summary>
      

      ``3.18.1-0``,  ``3.17.1-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.13.1-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.1-0``,  ``3.9.0-1``,  ``3.8.0-0``

      
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

      mamba install bioconductor-biocversion

   and update with::

      mamba update bioconductor-biocversion

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocversion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocversion:<tag>

   (see `bioconductor-biocversion/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocversion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocversion.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocversion
   :alt:   (downloads)
.. |docker_bioconductor-biocversion| image:: https://quay.io/repository/biocontainers/bioconductor-biocversion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocversion
.. _`bioconductor-biocversion/tags`: https://quay.io/repository/biocontainers/bioconductor-biocversion?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocversion";
        var versions = ["3.18.1","3.17.1","3.16.0","3.14.0","3.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocversion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocversion/README.html
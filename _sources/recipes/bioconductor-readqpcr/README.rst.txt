:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-readqpcr'
.. highlight: bash

bioconductor-readqpcr
=====================

.. conda:recipe:: bioconductor-readqpcr
   :replaces_section_title:
   :noindex:

   Read qPCR data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ReadqPCR.html
   :license: LGPL-3
   :recipe: /`bioconductor-readqpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-readqpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-readqpcr/meta.yaml>`_
   :links: biotools: :biotools:`readqpcr`

   The package provides functions to read raw RT\-qPCR data of different platforms.


.. conda:package:: bioconductor-readqpcr

   |downloads_bioconductor-readqpcr| |docker_bioconductor-readqpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-readqpcr

   and update with::

      mamba update bioconductor-readqpcr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-readqpcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-readqpcr:<tag>

   (see `bioconductor-readqpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-readqpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-readqpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-readqpcr
   :alt:   (downloads)
.. |docker_bioconductor-readqpcr| image:: https://quay.io/repository/biocontainers/bioconductor-readqpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-readqpcr
.. _`bioconductor-readqpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-readqpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-readqpcr";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-readqpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-readqpcr/README.html
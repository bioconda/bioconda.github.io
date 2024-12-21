:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomformat'
.. highlight: bash

bioconductor-biomformat
=======================

.. conda:recipe:: bioconductor-biomformat
   :replaces_section_title:
   :noindex:

   An interface package for the BIOM file format

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biomformat.html
   :license: GPL-2
   :recipe: /`bioconductor-biomformat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomformat/meta.yaml>`_
   :links: biotools: :biotools:`biomformat`, doi: :doi:`10.1038/nmeth.3252`

   This is an R package for interfacing with the BIOM format. This package includes basic tools for reading biom\-format files\, accessing and subsetting data tables from a biom object \(which is more complex than a single table\)\, as well as limited support for writing a biom\-object back to a biom\-format file. The design of this API is intended to match the python API and other tools included with the biom\-format project\, but with a decidedly \"R flavor\" that should be familiar to R users. This includes S4 classes and methods\, as well as extensions of common core functions\/methods.


.. conda:package:: bioconductor-biomformat

   |downloads_bioconductor-biomformat| |docker_bioconductor-biomformat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-jsonlite: ``>=0.9.16``
   :depends r-matrix: ``>=1.2``
   :depends r-plyr: ``>=1.8``
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

      mamba install bioconductor-biomformat

   and update with::

      mamba update bioconductor-biomformat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biomformat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomformat:<tag>

   (see `bioconductor-biomformat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomformat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomformat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomformat
   :alt:   (downloads)
.. |docker_bioconductor-biomformat| image:: https://quay.io/repository/biocontainers/bioconductor-biomformat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomformat
.. _`bioconductor-biomformat/tags`: https://quay.io/repository/biocontainers/bioconductor-biomformat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomformat";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomformat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomformat/README.html
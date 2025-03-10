:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bugsigdbr'
.. highlight: bash

bioconductor-bugsigdbr
======================

.. conda:recipe:: bioconductor-bugsigdbr
   :replaces_section_title:
   :noindex:

   R\-side access to published microbial signatures from BugSigDB

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bugsigdbr.html
   :license: GPL-3
   :recipe: /`bioconductor-bugsigdbr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bugsigdbr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bugsigdbr/meta.yaml>`_

   The bugsigdbr package implements convenient access to bugsigdb.org from within R\/Bioconductor. The goal of the package is to facilitate import of BugSigDB data into R\/Bioconductor\, provide utilities for extracting microbe signatures\, and enable export of the extracted signatures to plain text files in standard file formats such as GMT.


.. conda:package:: bioconductor-bugsigdbr

   |downloads_bioconductor-bugsigdbr| |docker_bioconductor-bugsigdbr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.1-0``,  ``1.6.2-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-vroom: 
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

      mamba install bioconductor-bugsigdbr

   and update with::

      mamba update bioconductor-bugsigdbr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bugsigdbr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bugsigdbr:<tag>

   (see `bioconductor-bugsigdbr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bugsigdbr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bugsigdbr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bugsigdbr
   :alt:   (downloads)
.. |docker_bioconductor-bugsigdbr| image:: https://quay.io/repository/biocontainers/bioconductor-bugsigdbr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bugsigdbr
.. _`bioconductor-bugsigdbr/tags`: https://quay.io/repository/biocontainers/bioconductor-bugsigdbr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bugsigdbr";
        var versions = ["1.12.0","1.8.1","1.6.2","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bugsigdbr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bugsigdbr/README.html
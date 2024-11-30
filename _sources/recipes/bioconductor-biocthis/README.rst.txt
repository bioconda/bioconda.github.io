:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocthis'
.. highlight: bash

bioconductor-biocthis
=====================

.. conda:recipe:: bioconductor-biocthis
   :replaces_section_title:
   :noindex:

   Automate package and project setup for Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biocthis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocthis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocthis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocthis/meta.yaml>`_

   This package expands the usethis package with the goal of helping automate the process of creating R packages for Bioconductor or making them Bioconductor\-friendly.


.. conda:package:: bioconductor-biocthis

   |downloads_bioconductor-biocthis| |docker_bioconductor-biocthis|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.3-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.10-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-fs: 
   :depends r-glue: 
   :depends r-rlang: 
   :depends r-styler: 
   :depends r-usethis: ``>=2.0.1``
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

      mamba install bioconductor-biocthis

   and update with::

      mamba update bioconductor-biocthis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocthis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocthis:<tag>

   (see `bioconductor-biocthis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocthis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocthis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocthis
   :alt:   (downloads)
.. |docker_bioconductor-biocthis| image:: https://quay.io/repository/biocontainers/bioconductor-biocthis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocthis
.. _`bioconductor-biocthis/tags`: https://quay.io/repository/biocontainers/bioconductor-biocthis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocthis";
        var versions = ["1.12.0","1.10.3","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocthis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocthis/README.html
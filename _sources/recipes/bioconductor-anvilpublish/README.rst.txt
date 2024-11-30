:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilpublish'
.. highlight: bash

bioconductor-anvilpublish
=========================

.. conda:recipe:: bioconductor-anvilpublish
   :replaces_section_title:
   :noindex:

   Publish Packages and Other Resources to AnVIL Workspaces

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AnVILPublish.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilpublish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilpublish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilpublish/meta.yaml>`_

   Use this package to create or update AnVIL workspaces from resources such as R \/ Bioconductor packages. The metadata about the package \(e.g.\, select information from the package DESCRIPTION file and from vignette YAML headings\) are used to populate the \'DASHBOARD\'. Vignettes are translated to python notebooks ready for evaluation in AnVIL.


.. conda:package:: bioconductor-anvilpublish

   |downloads_bioconductor-anvilpublish| |docker_bioconductor-anvilpublish|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-3``,  ``1.0.0-2``

      

   
   :depends bioconductor-anvil: ``>=1.14.0,<1.15.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-readr: 
   :depends r-rmarkdown: 
   :depends r-whisker: 
   :depends r-yaml: 
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

      mamba install bioconductor-anvilpublish

   and update with::

      mamba update bioconductor-anvilpublish

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anvilpublish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilpublish:<tag>

   (see `bioconductor-anvilpublish/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilpublish| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilpublish.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilpublish
   :alt:   (downloads)
.. |docker_bioconductor-anvilpublish| image:: https://quay.io/repository/biocontainers/bioconductor-anvilpublish/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilpublish
.. _`bioconductor-anvilpublish/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilpublish?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilpublish";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilpublish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilpublish/README.html
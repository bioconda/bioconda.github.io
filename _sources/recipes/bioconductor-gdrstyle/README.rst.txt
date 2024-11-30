:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrstyle'
.. highlight: bash

bioconductor-gdrstyle
=====================

.. conda:recipe:: bioconductor-gdrstyle
   :replaces_section_title:
   :noindex:

   A package with style requirements for the gDR suite

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gDRstyle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrstyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrstyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrstyle/meta.yaml>`_

   Package fills a helper package role for whole gDR suite. It helps to support good development practices by keeping style requirements and style tests for other packages. It also contains build helpers to make all package requirements met.


.. conda:package:: bioconductor-gdrstyle

   |downloads_bioconductor-gdrstyle| |docker_bioconductor-gdrstyle|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-bioccheck: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-desc: 
   :depends r-git2r: 
   :depends r-lintr: ``>=3.0.0``
   :depends r-pkgbuild: 
   :depends r-rcmdcheck: 
   :depends r-remotes: 
   :depends r-rjson: 
   :depends r-withr: 
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

      mamba install bioconductor-gdrstyle

   and update with::

      mamba update bioconductor-gdrstyle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdrstyle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdrstyle:<tag>

   (see `bioconductor-gdrstyle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdrstyle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrstyle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrstyle
   :alt:   (downloads)
.. |docker_bioconductor-gdrstyle| image:: https://quay.io/repository/biocontainers/bioconductor-gdrstyle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrstyle
.. _`bioconductor-gdrstyle/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrstyle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrstyle";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrstyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrstyle/README.html
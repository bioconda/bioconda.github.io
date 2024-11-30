:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwrewas'
.. highlight: bash

bioconductor-pwrewas
====================

.. conda:recipe:: bioconductor-pwrewas
   :replaces_section_title:
   :noindex:

   A user\-friendly tool for comprehensive power estimation for epigenome wide association studies \(EWAS\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pwrEWAS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pwrewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwrewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwrewas/meta.yaml>`_

   pwrEWAS is a user\-friendly tool to assists researchers in the design and planning of EWAS to help circumvent under\- and overpowered studies.


.. conda:package:: bioconductor-pwrewas

   |downloads_bioconductor-pwrewas| |docker_bioconductor-pwrewas|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-pwrewas.data: ``>=1.14.0,<1.15.0``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-cpgassoc: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinywidgets: 
   :depends r-truncnorm: 
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

      mamba install bioconductor-pwrewas

   and update with::

      mamba update bioconductor-pwrewas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pwrewas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwrewas:<tag>

   (see `bioconductor-pwrewas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwrewas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwrewas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwrewas
   :alt:   (downloads)
.. |docker_bioconductor-pwrewas| image:: https://quay.io/repository/biocontainers/bioconductor-pwrewas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwrewas
.. _`bioconductor-pwrewas/tags`: https://quay.io/repository/biocontainers/bioconductor-pwrewas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwrewas";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwrewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwrewas/README.html
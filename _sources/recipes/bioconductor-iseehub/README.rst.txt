:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseehub'
.. highlight: bash

bioconductor-iseehub
====================

.. conda:recipe:: bioconductor-iseehub
   :replaces_section_title:
   :noindex:

   iSEE for the Bioconductor ExperimentHub

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iSEEhub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseehub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehub/meta.yaml>`_

   This package defines a custom landing page for an iSEE app interfacing with the Bioconductor ExperimentHub. The landing page allows users to browse the ExperimentHub\, select a data set\, download and cache it\, and import it directly into a Bioconductor iSEE app.


.. conda:package:: bioconductor-iseehub

   |downloads_bioconductor-iseehub| |docker_bioconductor-iseehub|

   :versions:
      
      

      ``1.4.0-0``,  ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-isee: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dt: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
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

      mamba install bioconductor-iseehub

   and update with::

      mamba update bioconductor-iseehub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseehub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseehub:<tag>

   (see `bioconductor-iseehub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseehub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseehub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseehub
   :alt:   (downloads)
.. |docker_bioconductor-iseehub| image:: https://quay.io/repository/biocontainers/bioconductor-iseehub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseehub
.. _`bioconductor-iseehub/tags`: https://quay.io/repository/biocontainers/bioconductor-iseehub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseehub";
        var versions = ["1.4.0","1.1.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseehub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseehub/README.html
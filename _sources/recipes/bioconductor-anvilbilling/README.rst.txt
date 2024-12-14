:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilbilling'
.. highlight: bash

bioconductor-anvilbilling
=========================

.. conda:recipe:: bioconductor-anvilbilling
   :replaces_section_title:
   :noindex:

   Provide functions to retrieve and report on usage expenses in NHGRI AnVIL \(anvilproject.org\).

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AnVILBilling.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilbilling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilbilling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilbilling/meta.yaml>`_

   AnVILBilling helps monitor AnVIL\-related costs in R\, using queries to a BigQuery table to which costs are exported daily. Functions are defined to help categorize tasks and associated expenditures\, and to visualize and explore expense profiles over time. This package will be expanded to help users estimate costs for specific task sets.


.. conda:package:: bioconductor-anvilbilling

   |downloads_bioconductor-anvilbilling| |docker_bioconductor-anvilbilling|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bigrquery: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-shiny: 
   :depends r-shinytoastr: 
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

      mamba install bioconductor-anvilbilling

   and update with::

      mamba update bioconductor-anvilbilling

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anvilbilling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilbilling:<tag>

   (see `bioconductor-anvilbilling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilbilling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilbilling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilbilling
   :alt:   (downloads)
.. |docker_bioconductor-anvilbilling| image:: https://quay.io/repository/biocontainers/bioconductor-anvilbilling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilbilling
.. _`bioconductor-anvilbilling/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilbilling?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilbilling";
        var versions = ["1.16.0","1.12.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilbilling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilbilling/README.html
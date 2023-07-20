:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilworkflow'
.. highlight: bash

bioconductor-anvilworkflow
==========================

.. conda:recipe:: bioconductor-anvilworkflow
   :replaces_section_title:
   :noindex:

   Run workflows implemented in Terra\/AnVIL workspace

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AnVILWorkflow.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilworkflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilworkflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilworkflow/meta.yaml>`_

   The AnVIL is a cloud computing resource developed in part by the National Human Genome Research Institute. The main cloud\-based genomics platform deported by the AnVIL project is Terra. The AnVILWorkflow package allows remote access to Terra implemented workflows\, enabling end\-user to utilize Terra\/ AnVIL provided resources \- such as data\, workflows\, and flexible\/scalble computing resources \- through the conventional R functions.


.. conda:package:: bioconductor-anvilworkflow

   |downloads_bioconductor-anvilworkflow| |docker_bioconductor-anvilworkflow|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-anvil: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anvilworkflow

   and update with::

      conda update bioconductor-anvilworkflow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilworkflow:<tag>

   (see `bioconductor-anvilworkflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilworkflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilworkflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilworkflow
   :alt:   (downloads)
.. |docker_bioconductor-anvilworkflow| image:: https://quay.io/repository/biocontainers/bioconductor-anvilworkflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilworkflow
.. _`bioconductor-anvilworkflow/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilworkflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilworkflow";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilworkflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilworkflow/README.html
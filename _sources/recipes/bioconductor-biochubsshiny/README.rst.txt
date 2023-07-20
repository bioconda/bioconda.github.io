:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biochubsshiny'
.. highlight: bash

bioconductor-biochubsshiny
==========================

.. conda:recipe:: bioconductor-biochubsshiny
   :replaces_section_title:
   :noindex:

   View AnnotationHub and ExperimentHub Resources Interactively

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocHubsShiny.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biochubsshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biochubsshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biochubsshiny/meta.yaml>`_

   A package that allows interactive exploration of AnnotationHub and ExperimentHub resources. It uses DT \/ DataTable to display resources for multiple organisms. It provides template code for reproducibility and for downloading resources via the indicated Hub package.


.. conda:package:: bioconductor-biochubsshiny

   |downloads_bioconductor-biochubsshiny| |docker_bioconductor-biochubsshiny|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-htmlwidgets: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinytoastr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biochubsshiny

   and update with::

      conda update bioconductor-biochubsshiny

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biochubsshiny:<tag>

   (see `bioconductor-biochubsshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biochubsshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biochubsshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biochubsshiny
   :alt:   (downloads)
.. |docker_bioconductor-biochubsshiny| image:: https://quay.io/repository/biocontainers/bioconductor-biochubsshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biochubsshiny
.. _`bioconductor-biochubsshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-biochubsshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biochubsshiny";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biochubsshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biochubsshiny/README.html
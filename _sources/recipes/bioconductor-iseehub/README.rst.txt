:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseehub'
.. highlight: bash

bioconductor-iseehub
====================

.. conda:recipe:: bioconductor-iseehub
   :replaces_section_title:
   :noindex:

   iSEE for the Bioconductor ExperimentHub

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/iSEEhub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseehub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehub/meta.yaml>`_

   This package defines a custom landing page for an iSEE app interfacing with the Bioconductor ExperimentHub. The landing page allows users to browse the ExperimentHub\, select a data set\, download and cache it\, and import it directly into a Bioconductor iSEE app.


.. conda:package:: bioconductor-iseehub

   |downloads_bioconductor-iseehub| |docker_bioconductor-iseehub|

   :versions:
      
      

      ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-isee: ``>=2.12.0,<2.13.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dt: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iseehub

   and update with::

      conda update bioconductor-iseehub

   or use the docker container::

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
        var versions = ["1.1.1","1.0.0"];
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
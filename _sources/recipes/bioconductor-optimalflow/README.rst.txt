:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-optimalflow'
.. highlight: bash

bioconductor-optimalflow
========================

.. conda:recipe:: bioconductor-optimalflow
   :replaces_section_title:
   :noindex:

   optimalFlow

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/optimalFlow.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-optimalflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-optimalflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-optimalflow/meta.yaml>`_

   Optimal\-transport techniques applied to supervised flow cytometry gating.


.. conda:package:: bioconductor-optimalflow

   |downloads_bioconductor-optimalflow| |docker_bioconductor-optimalflow|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowmeans: ``>=1.60.0,<1.61.0``
   :depends bioconductor-optimalflowdata: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbscan: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-ellipse: 
   :depends r-foreach: 
   :depends r-randomforest: 
   :depends r-rfast: 
   :depends r-rgl: 
   :depends r-rlang: ``>=0.4.0``
   :depends r-robustbase: 
   :depends r-transport: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-optimalflow

   and update with::

      conda update bioconductor-optimalflow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-optimalflow:<tag>

   (see `bioconductor-optimalflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-optimalflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-optimalflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-optimalflow
   :alt:   (downloads)
.. |docker_bioconductor-optimalflow| image:: https://quay.io/repository/biocontainers/bioconductor-optimalflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-optimalflow
.. _`bioconductor-optimalflow/tags`: https://quay.io/repository/biocontainers/bioconductor-optimalflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-optimalflow";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-optimalflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-optimalflow/README.html
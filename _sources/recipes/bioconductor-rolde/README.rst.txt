:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rolde'
.. highlight: bash

bioconductor-rolde
==================

.. conda:recipe:: bioconductor-rolde
   :replaces_section_title:
   :noindex:

   RolDE\: Robust longitudinal Differential Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RolDE.html
   :license: GPL-3
   :recipe: /`bioconductor-rolde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rolde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rolde/meta.yaml>`_

   RolDE detects longitudinal differential expression between two conditions in noisy high\-troughput data. Suitable even for data with a moderate amount of missing values.RolDE is a composite method\, consisting of three independent modules with different approaches to detecting longitudinal differential expression. The combination of these diverse modules allows RolDE to robustly detect varying differences in longitudinal trends and expression levels in diverse data types and experimental settings.


.. conda:package:: bioconductor-rolde

   |downloads_bioconductor-rolde| |docker_bioconductor-rolde|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rots: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-matrixstats: 
   :depends r-nlme: 
   :depends r-rngtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rolde

   and update with::

      conda update bioconductor-rolde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rolde:<tag>

   (see `bioconductor-rolde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rolde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rolde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rolde
   :alt:   (downloads)
.. |docker_bioconductor-rolde| image:: https://quay.io/repository/biocontainers/bioconductor-rolde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rolde
.. _`bioconductor-rolde/tags`: https://quay.io/repository/biocontainers/bioconductor-rolde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rolde";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rolde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rolde/README.html
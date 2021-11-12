:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocdockermanager'
.. highlight: bash

bioconductor-biocdockermanager
==============================

.. conda:recipe:: bioconductor-biocdockermanager
   :replaces_section_title:
   :noindex:

   Access Bioconductor docker images

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BiocDockerManager.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocdockermanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocdockermanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocdockermanager/meta.yaml>`_

   Package works analogous to BiocManager but for docker images. Use the BiocDockerManager package to install and manage docker images provided by the Bioconductor project. A convenient package to install images\, update images and find which Bioconductor based docker images are available.


.. conda:package:: bioconductor-biocdockermanager

   |downloads_bioconductor-biocdockermanager| |docker_bioconductor-biocdockermanager|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-memoise: 
   :depends r-readr: 
   :depends r-whisker: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocdockermanager

   and update with::

      conda update bioconductor-biocdockermanager

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocdockermanager:<tag>

   (see `bioconductor-biocdockermanager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocdockermanager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocdockermanager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocdockermanager
   :alt:   (downloads)
.. |docker_bioconductor-biocdockermanager| image:: https://quay.io/repository/biocontainers/bioconductor-biocdockermanager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocdockermanager
.. _`bioconductor-biocdockermanager/tags`: https://quay.io/repository/biocontainers/bioconductor-biocdockermanager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocdockermanager";
        var versions = ["1.6.0","1.4.0","1.2.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocdockermanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocdockermanager/README.html
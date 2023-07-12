:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-vision'
.. highlight: bash

r-vision
========

.. conda:recipe:: r-vision
   :replaces_section_title:
   :noindex:

   A high\-throughput and unbiased module for interpreting scRNA\-seq data.

   :homepage: https://github.com/YosefLab/VISION
   :license: MIT / MIT
   :recipe: /`r-vision <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-vision>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-vision/meta.yaml>`_

   


.. conda:package:: r-vision

   |downloads_r-vision| |docker_r-vision|

   :versions:
      
      

      ``2.0.0-7``,  ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fastica: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-jsonlite: 
   :depends r-loe: 
   :depends r-logging: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-mime: 
   :depends r-pbmcapply: 
   :depends r-plumber: 
   :depends r-rann: 
   :depends r-rcpp: 
   :depends r-rsvd: 
   :depends r-rtsne: 
   :depends r-vegan: 
   :depends r-wordspace: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-vision

   and update with::

      conda update r-vision

   or use the docker container::

      docker pull quay.io/biocontainers/r-vision:<tag>

   (see `r-vision/tags`_ for valid values for ``<tag>``)


.. |downloads_r-vision| image:: https://img.shields.io/conda/dn/bioconda/r-vision.svg?style=flat
   :target: https://anaconda.org/bioconda/r-vision
   :alt:   (downloads)
.. |docker_r-vision| image:: https://quay.io/repository/biocontainers/r-vision/status
   :target: https://quay.io/repository/biocontainers/r-vision
.. _`r-vision/tags`: https://quay.io/repository/biocontainers/r-vision?tab=tags


.. raw:: html

    <script>
        var package = "r-vision";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-vision/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-vision/README.html
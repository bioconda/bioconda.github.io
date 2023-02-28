:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultraheatmap'
.. highlight: bash

ultraheatmap
============

.. conda:recipe:: ultraheatmap
   :replaces_section_title:
   :noindex:

   ultraheatmaps facilitates the production of deepTools heatmaps

   :homepage: https://github.com/maxplanck-ie/ultraheatmap/
   :license: MIT / MIT
   :recipe: /`ultraheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraheatmap/meta.yaml>`_

   


.. conda:package:: ultraheatmap

   |downloads_ultraheatmap| |docker_ultraheatmap|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends bedtools: ``>2``
   :depends deeptools: ``>3``
   :depends gffutils: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ultraheatmap

   and update with::

      conda update ultraheatmap

   or use the docker container::

      docker pull quay.io/biocontainers/ultraheatmap:<tag>

   (see `ultraheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_ultraheatmap| image:: https://img.shields.io/conda/dn/bioconda/ultraheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/ultraheatmap
   :alt:   (downloads)
.. |docker_ultraheatmap| image:: https://quay.io/repository/biocontainers/ultraheatmap/status
   :target: https://quay.io/repository/biocontainers/ultraheatmap
.. _`ultraheatmap/tags`: https://quay.io/repository/biocontainers/ultraheatmap?tab=tags


.. raw:: html

    <script>
        var package = "ultraheatmap";
        var versions = ["1.3.1","1.3.0","1.3.0","1.2.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultraheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultraheatmap/README.html
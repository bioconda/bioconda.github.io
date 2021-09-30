:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mars'
.. highlight: bash

mars
====

.. conda:recipe:: mars
   :replaces_section_title:
   :noindex:

   Multiple Alignment\-based Refinement of SVs \(MARS\)

   :homepage: https://github.com/maiziex/MARS
   :license: MIT
   :recipe: /`mars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mars/meta.yaml>`_

   


.. conda:package:: mars

   |downloads_mars| |docker_mars|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends minimap2: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mars

   and update with::

      conda update mars

   or use the docker container::

      docker pull quay.io/biocontainers/mars:<tag>

   (see `mars/tags`_ for valid values for ``<tag>``)


.. |downloads_mars| image:: https://img.shields.io/conda/dn/bioconda/mars.svg?style=flat
   :target: https://anaconda.org/bioconda/mars
   :alt:   (downloads)
.. |docker_mars| image:: https://quay.io/repository/biocontainers/mars/status
   :target: https://quay.io/repository/biocontainers/mars
.. _`mars/tags`: https://quay.io/repository/biocontainers/mars?tab=tags


.. raw:: html

    <script>
        var package = "mars";
        var versions = ["1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mars/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circle-map-cpp'
.. highlight: bash

circle-map-cpp
==============

.. conda:recipe:: circle-map-cpp
   :replaces_section_title:
   :noindex:

   Circle\-Map\-cpp is the C\+\+ version of Circle\-Map

   :homepage: https://github.com/BGI-Qingdao/Circle-Map-cpp
   :license: GPL-3.0-only
   :recipe: /`circle-map-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map-cpp/meta.yaml>`_

   


.. conda:package:: circle-map-cpp

   |downloads_circle-map-cpp| |docker_circle-map-cpp|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends bedtools: 
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends pysam: ``>=0.20.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circle-map-cpp

   and update with::

      conda update circle-map-cpp

   or use the docker container::

      docker pull quay.io/biocontainers/circle-map-cpp:<tag>

   (see `circle-map-cpp/tags`_ for valid values for ``<tag>``)


.. |downloads_circle-map-cpp| image:: https://img.shields.io/conda/dn/bioconda/circle-map-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/circle-map-cpp
   :alt:   (downloads)
.. |docker_circle-map-cpp| image:: https://quay.io/repository/biocontainers/circle-map-cpp/status
   :target: https://quay.io/repository/biocontainers/circle-map-cpp
.. _`circle-map-cpp/tags`: https://quay.io/repository/biocontainers/circle-map-cpp?tab=tags


.. raw:: html

    <script>
        var package = "circle-map-cpp";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circle-map-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circle-map-cpp/README.html
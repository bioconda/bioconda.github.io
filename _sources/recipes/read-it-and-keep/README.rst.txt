:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'read-it-and-keep'
.. highlight: bash

read-it-and-keep
================

.. conda:recipe:: read-it-and-keep
   :replaces_section_title:
   :noindex:

   Read contamination removal

   :homepage: https://github.com/GenomePathogenAnalysisService/read-it-and-keep
   :license: MIT
   :recipe: /`read-it-and-keep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read-it-and-keep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read-it-and-keep/meta.yaml>`_

   


.. conda:package:: read-it-and-keep

   |downloads_read-it-and-keep| |docker_read-it-and-keep|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install read-it-and-keep

   and update with::

      conda update read-it-and-keep

   or use the docker container::

      docker pull quay.io/biocontainers/read-it-and-keep:<tag>

   (see `read-it-and-keep/tags`_ for valid values for ``<tag>``)


.. |downloads_read-it-and-keep| image:: https://img.shields.io/conda/dn/bioconda/read-it-and-keep.svg?style=flat
   :target: https://anaconda.org/bioconda/read-it-and-keep
   :alt:   (downloads)
.. |docker_read-it-and-keep| image:: https://quay.io/repository/biocontainers/read-it-and-keep/status
   :target: https://quay.io/repository/biocontainers/read-it-and-keep
.. _`read-it-and-keep/tags`: https://quay.io/repository/biocontainers/read-it-and-keep?tab=tags


.. raw:: html

    <script>
        var package = "read-it-and-keep";
        var versions = ["0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/read-it-and-keep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/read-it-and-keep/README.html
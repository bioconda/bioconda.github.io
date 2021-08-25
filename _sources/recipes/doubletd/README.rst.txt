:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'doubletd'
.. highlight: bash

doubletd
========

.. conda:recipe:: doubletd
   :replaces_section_title:
   :noindex:

   doubletD is a method to detect doublets in single\-cell DNA sequencing data

   :homepage: https://github.com/elkebir-group/doubletD
   :license: BSD-3
   :recipe: /`doubletd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletd/meta.yaml>`_

   


.. conda:package:: doubletd

   |downloads_doubletd| |docker_doubletd|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install doubletd

   and update with::

      conda update doubletd

   or use the docker container::

      docker pull quay.io/biocontainers/doubletd:<tag>

   (see `doubletd/tags`_ for valid values for ``<tag>``)


.. |downloads_doubletd| image:: https://img.shields.io/conda/dn/bioconda/doubletd.svg?style=flat
   :target: https://anaconda.org/bioconda/doubletd
   :alt:   (downloads)
.. |docker_doubletd| image:: https://quay.io/repository/biocontainers/doubletd/status
   :target: https://quay.io/repository/biocontainers/doubletd
.. _`doubletd/tags`: https://quay.io/repository/biocontainers/doubletd?tab=tags


.. raw:: html

    <script>
        var package = "doubletd";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/doubletd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/doubletd/README.html
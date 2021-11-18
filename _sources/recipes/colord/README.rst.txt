:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'colord'
.. highlight: bash

colord
======

.. conda:recipe:: colord
   :replaces_section_title:
   :noindex:

   A versatile compressor of third generation sequencing reads.

   :homepage: https://github.com/refresh-bio/colord
   :license: GPL / GPL-3
   :recipe: /`colord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colord/meta.yaml>`_

   


.. conda:package:: colord

   |downloads_colord| |docker_colord|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install colord

   and update with::

      conda update colord

   or use the docker container::

      docker pull quay.io/biocontainers/colord:<tag>

   (see `colord/tags`_ for valid values for ``<tag>``)


.. |downloads_colord| image:: https://img.shields.io/conda/dn/bioconda/colord.svg?style=flat
   :target: https://anaconda.org/bioconda/colord
   :alt:   (downloads)
.. |docker_colord| image:: https://quay.io/repository/biocontainers/colord/status
   :target: https://quay.io/repository/biocontainers/colord
.. _`colord/tags`: https://quay.io/repository/biocontainers/colord?tab=tags


.. raw:: html

    <script>
        var package = "colord";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colord/README.html
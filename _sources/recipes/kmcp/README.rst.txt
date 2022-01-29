:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmcp'
.. highlight: bash

kmcp
====

.. conda:recipe:: kmcp
   :replaces_section_title:
   :noindex:

   accurate metagenomic profiling of both prokaryotic and viral organisms by pseudo\-mapping

   :homepage: https://github.com/shenwei356/kmcp
   :license: MIT
   :recipe: /`kmcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmcp/meta.yaml>`_

   


.. conda:package:: kmcp

   |downloads_kmcp| |docker_kmcp|

   :versions:
      
      

      ``0.7.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmcp

   and update with::

      conda update kmcp

   or use the docker container::

      docker pull quay.io/biocontainers/kmcp:<tag>

   (see `kmcp/tags`_ for valid values for ``<tag>``)


.. |downloads_kmcp| image:: https://img.shields.io/conda/dn/bioconda/kmcp.svg?style=flat
   :target: https://anaconda.org/bioconda/kmcp
   :alt:   (downloads)
.. |docker_kmcp| image:: https://quay.io/repository/biocontainers/kmcp/status
   :target: https://quay.io/repository/biocontainers/kmcp
.. _`kmcp/tags`: https://quay.io/repository/biocontainers/kmcp?tab=tags


.. raw:: html

    <script>
        var package = "kmcp";
        var versions = ["0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmcp/README.html
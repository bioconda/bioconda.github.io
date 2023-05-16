:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'potrace'
.. highlight: bash

potrace
=======

.. conda:recipe:: potrace/1.11
   :replaces_section_title:
   :noindex:

   A tool for tracing a bitmap\, which means\, transforming a bitmap into a smooth\, scalable image

   :homepage: http://potrace.sourceforge.net
   :license: GPL
   :recipe: /`potrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace>`_/`1.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace/1.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace/1.11/meta.yaml>`_

   


.. conda:package:: potrace

   |downloads_potrace| |docker_potrace|

   :versions:
      
      

      ``1.11-6``,  ``1.11-5``,  ``1.11-4``,  ``1.11-3``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install potrace

   and update with::

      conda update potrace

   or use the docker container::

      docker pull quay.io/biocontainers/potrace:<tag>

   (see `potrace/tags`_ for valid values for ``<tag>``)


.. |downloads_potrace| image:: https://img.shields.io/conda/dn/bioconda/potrace.svg?style=flat
   :target: https://anaconda.org/bioconda/potrace
   :alt:   (downloads)
.. |docker_potrace| image:: https://quay.io/repository/biocontainers/potrace/status
   :target: https://quay.io/repository/biocontainers/potrace
.. _`potrace/tags`: https://quay.io/repository/biocontainers/potrace?tab=tags


.. raw:: html

    <script>
        var package = "potrace";
        var versions = ["1.11","1.11","1.11","1.11","1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/potrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/potrace/README.html
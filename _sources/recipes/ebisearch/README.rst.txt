:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebisearch'
.. highlight: bash

ebisearch
=========

.. conda:recipe:: ebisearch
   :replaces_section_title:
   :noindex:

   A Python library for interacting with EBI Search\'s API

   :homepage: https://github.com/bebatut/ebisearch
   :license: MIT / MIT License
   :recipe: /`ebisearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch/meta.yaml>`_

   


.. conda:package:: ebisearch

   |downloads_ebisearch| |docker_ebisearch|

   :versions:
      
      

      ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends click: 
   :depends flake8: 
   :depends python: ``<3``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ebisearch

   and update with::

      conda update ebisearch

   or use the docker container::

      docker pull quay.io/biocontainers/ebisearch:<tag>

   (see `ebisearch/tags`_ for valid values for ``<tag>``)


.. |downloads_ebisearch| image:: https://img.shields.io/conda/dn/bioconda/ebisearch.svg?style=flat
   :target: https://anaconda.org/bioconda/ebisearch
   :alt:   (downloads)
.. |docker_ebisearch| image:: https://quay.io/repository/biocontainers/ebisearch/status
   :target: https://quay.io/repository/biocontainers/ebisearch
.. _`ebisearch/tags`: https://quay.io/repository/biocontainers/ebisearch?tab=tags


.. raw:: html

    <script>
        var package = "ebisearch";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebisearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebisearch/README.html
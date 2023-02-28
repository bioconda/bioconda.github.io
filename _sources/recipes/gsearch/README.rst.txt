:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsearch'
.. highlight: bash

gsearch
=======

.. conda:recipe:: gsearch
   :replaces_section_title:
   :noindex:

   gsearch is an ultra\-fast and scalable microbial genome search program based on MinHash metric and graph\-based approximate nearest neighbor search

   :homepage: https://github.com/jean-pierreBoth/gsearch
   :license: MIT
   :recipe: /`gsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsearch/meta.yaml>`_

   


.. conda:package:: gsearch

   |downloads_gsearch| |docker_gsearch|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gsearch

   and update with::

      conda update gsearch

   or use the docker container::

      docker pull quay.io/biocontainers/gsearch:<tag>

   (see `gsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_gsearch| image:: https://img.shields.io/conda/dn/bioconda/gsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/gsearch
   :alt:   (downloads)
.. |docker_gsearch| image:: https://quay.io/repository/biocontainers/gsearch/status
   :target: https://quay.io/repository/biocontainers/gsearch
.. _`gsearch/tags`: https://quay.io/repository/biocontainers/gsearch?tab=tags


.. raw:: html

    <script>
        var package = "gsearch";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsearch/README.html
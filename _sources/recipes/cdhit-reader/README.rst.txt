:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdhit-reader'
.. highlight: bash

cdhit-reader
============

.. conda:recipe:: cdhit-reader
   :replaces_section_title:
   :noindex:

   Parse CD\-HIT cluster files

   :homepage: https://github.com/telatin/cdhit-parser
   :license: MIT
   :recipe: /`cdhit-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdhit-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdhit-reader/meta.yaml>`_

   


.. conda:package:: cdhit-reader

   |downloads_cdhit-reader| |docker_cdhit-reader|

   :versions:
      
      

      ``0.1.0-0``,  ``0.0.6-0``

      

   
   :depends cd-hit: 
   :depends click: 
   :depends more-itertools: 
   :depends python: ``>=3.6,<3.9``
   :depends xopen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cdhit-reader

   and update with::

      conda update cdhit-reader

   or use the docker container::

      docker pull quay.io/biocontainers/cdhit-reader:<tag>

   (see `cdhit-reader/tags`_ for valid values for ``<tag>``)


.. |downloads_cdhit-reader| image:: https://img.shields.io/conda/dn/bioconda/cdhit-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/cdhit-reader
   :alt:   (downloads)
.. |docker_cdhit-reader| image:: https://quay.io/repository/biocontainers/cdhit-reader/status
   :target: https://quay.io/repository/biocontainers/cdhit-reader
.. _`cdhit-reader/tags`: https://quay.io/repository/biocontainers/cdhit-reader?tab=tags


.. raw:: html

    <script>
        var package = "cdhit-reader";
        var versions = ["0.1.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdhit-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdhit-reader/README.html
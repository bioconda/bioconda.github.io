:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrez'
.. highlight: bash

lrez
====

.. conda:recipe:: lrez
   :replaces_section_title:
   :noindex:

   Standalone tool and library allowing to work with barcoded linked\-reads

   :homepage: https://github.com/morispi/LRez
   :license: AGPL-3.0-or-later AND MIT
   :recipe: /`lrez <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrez>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrez/meta.yaml>`_

   


.. conda:package:: lrez

   |downloads_lrez| |docker_lrez|

   :versions:
      
      

      ``2.2-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lrez

   and update with::

      conda update lrez

   or use the docker container::

      docker pull quay.io/biocontainers/lrez:<tag>

   (see `lrez/tags`_ for valid values for ``<tag>``)


.. |downloads_lrez| image:: https://img.shields.io/conda/dn/bioconda/lrez.svg?style=flat
   :target: https://anaconda.org/bioconda/lrez
   :alt:   (downloads)
.. |docker_lrez| image:: https://quay.io/repository/biocontainers/lrez/status
   :target: https://quay.io/repository/biocontainers/lrez
.. _`lrez/tags`: https://quay.io/repository/biocontainers/lrez?tab=tags


.. raw:: html

    <script>
        var package = "lrez";
        var versions = ["2.2","2.1.3","2.1.2","2.1.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrez/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrez/README.html
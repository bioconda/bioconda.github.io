:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphtyper'
.. highlight: bash

graphtyper
==========

.. conda:recipe:: graphtyper
   :replaces_section_title:
   :noindex:

   Population\-scale genotyping using pangenome graphs

   :homepage: https://github.com/DecodeGenetics/graphtyper
   :license: MIT
   :recipe: /`graphtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphtyper/meta.yaml>`_

   


.. conda:package:: graphtyper

   |downloads_graphtyper| |docker_graphtyper|

   :versions:
      
      

      ``2.7.1-0``,  ``2.5.1-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphtyper

   and update with::

      conda update graphtyper

   or use the docker container::

      docker pull quay.io/biocontainers/graphtyper:<tag>

   (see `graphtyper/tags`_ for valid values for ``<tag>``)


.. |downloads_graphtyper| image:: https://img.shields.io/conda/dn/bioconda/graphtyper.svg?style=flat
   :target: https://anaconda.org/bioconda/graphtyper
   :alt:   (downloads)
.. |docker_graphtyper| image:: https://quay.io/repository/biocontainers/graphtyper/status
   :target: https://quay.io/repository/biocontainers/graphtyper
.. _`graphtyper/tags`: https://quay.io/repository/biocontainers/graphtyper?tab=tags


.. raw:: html

    <script>
        var package = "graphtyper";
        var versions = ["2.7.1","2.5.1","2.5","2.4","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphtyper/README.html
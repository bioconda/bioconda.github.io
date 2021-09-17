:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop2'
.. highlight: bash

scallop2
========

.. conda:recipe:: scallop2
   :replaces_section_title:
   :noindex:

   A reference\-based transcript assembler optimized for paired\-\/multiple\-end RNA\-seq data.

   :homepage: https://github.com/Shao-Group/scallop2
   :license: BSD-3-Clause
   :recipe: /`scallop2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop2/meta.yaml>`_

   


.. conda:package:: scallop2

   |downloads_scallop2| |docker_scallop2|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scallop2

   and update with::

      conda update scallop2

   or use the docker container::

      docker pull quay.io/biocontainers/scallop2:<tag>

   (see `scallop2/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop2| image:: https://img.shields.io/conda/dn/bioconda/scallop2.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop2
   :alt:   (downloads)
.. |docker_scallop2| image:: https://quay.io/repository/biocontainers/scallop2/status
   :target: https://quay.io/repository/biocontainers/scallop2
.. _`scallop2/tags`: https://quay.io/repository/biocontainers/scallop2?tab=tags


.. raw:: html

    <script>
        var package = "scallop2";
        var versions = ["1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop2/README.html
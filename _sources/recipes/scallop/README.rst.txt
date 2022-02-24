:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop'
.. highlight: bash

scallop
=======

.. conda:recipe:: scallop
   :replaces_section_title:
   :noindex:

   Scallop is a reference\-based transcriptome assembler for RNA\-seq

   :homepage: https://github.com/Kingsford-Group/scallop
   :license: BSD 3-Clause License
   :recipe: /`scallop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop/meta.yaml>`_

   


.. conda:package:: scallop

   |downloads_scallop| |docker_scallop|

   :versions:
      
      

      ``0.10.5-3``,  ``0.10.5-2``,  ``0.10.5-1``,  ``0.10.5-0``,  ``0.10.4-2``,  ``0.10.4-1``,  ``0.10.4-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scallop

   and update with::

      conda update scallop

   or use the docker container::

      docker pull quay.io/biocontainers/scallop:<tag>

   (see `scallop/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop| image:: https://img.shields.io/conda/dn/bioconda/scallop.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop
   :alt:   (downloads)
.. |docker_scallop| image:: https://quay.io/repository/biocontainers/scallop/status
   :target: https://quay.io/repository/biocontainers/scallop
.. _`scallop/tags`: https://quay.io/repository/biocontainers/scallop?tab=tags


.. raw:: html

    <script>
        var package = "scallop";
        var versions = ["0.10.5","0.10.5","0.10.5","0.10.5","0.10.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop/README.html
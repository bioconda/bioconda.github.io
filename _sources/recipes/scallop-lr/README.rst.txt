:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop-lr'
.. highlight: bash

scallop-lr
==========

.. conda:recipe:: scallop-lr
   :replaces_section_title:
   :noindex:

   Scallop\-LR is a reference\-based transcriptome assembler for long\-reads RNA\-seq data

   :homepage: https://github.com/Kingsford-Group/lrassemblyanalysis
   :license: BSD 3-Clause License
   :recipe: /`scallop-lr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop-lr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop-lr/meta.yaml>`_

   


.. conda:package:: scallop-lr

   |downloads_scallop-lr| |docker_scallop-lr|

   :versions:
      
      

      ``0.9.2-5``,  ``0.9.2-4``,  ``0.9.2-3``,  ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scallop-lr

   and update with::

      conda update scallop-lr

   or use the docker container::

      docker pull quay.io/biocontainers/scallop-lr:<tag>

   (see `scallop-lr/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop-lr| image:: https://img.shields.io/conda/dn/bioconda/scallop-lr.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop-lr
   :alt:   (downloads)
.. |docker_scallop-lr| image:: https://quay.io/repository/biocontainers/scallop-lr/status
   :target: https://quay.io/repository/biocontainers/scallop-lr
.. _`scallop-lr/tags`: https://quay.io/repository/biocontainers/scallop-lr?tab=tags


.. raw:: html

    <script>
        var package = "scallop-lr";
        var versions = ["0.9.2","0.9.2","0.9.2","0.9.2","0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop-lr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop-lr/README.html
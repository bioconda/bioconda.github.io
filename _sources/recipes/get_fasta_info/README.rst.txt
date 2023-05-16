:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'get_fasta_info'
.. highlight: bash

get_fasta_info
==============

.. conda:recipe:: get_fasta_info
   :replaces_section_title:
   :noindex:

   get\_FAST\{A\,Q\}\_info \- Get fast info on fasta and fastq files

   :homepage: https://github.com/nylander/get_fasta_info
   :license: MIT
   :recipe: /`get_fasta_info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_fasta_info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/get_fasta_info/meta.yaml>`_

   


.. conda:package:: get_fasta_info

   |downloads_get_fasta_info| |docker_get_fasta_info|

   :versions:
      
      

      ``2.4-2``,  ``2.4-1``,  ``2.4-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install get_fasta_info

   and update with::

      conda update get_fasta_info

   or use the docker container::

      docker pull quay.io/biocontainers/get_fasta_info:<tag>

   (see `get_fasta_info/tags`_ for valid values for ``<tag>``)


.. |downloads_get_fasta_info| image:: https://img.shields.io/conda/dn/bioconda/get_fasta_info.svg?style=flat
   :target: https://anaconda.org/bioconda/get_fasta_info
   :alt:   (downloads)
.. |docker_get_fasta_info| image:: https://quay.io/repository/biocontainers/get_fasta_info/status
   :target: https://quay.io/repository/biocontainers/get_fasta_info
.. _`get_fasta_info/tags`: https://quay.io/repository/biocontainers/get_fasta_info?tab=tags


.. raw:: html

    <script>
        var package = "get_fasta_info";
        var versions = ["2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/get_fasta_info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/get_fasta_info/README.html
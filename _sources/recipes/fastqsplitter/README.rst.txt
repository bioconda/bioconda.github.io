:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqsplitter'
.. highlight: bash

fastqsplitter
=============

.. conda:recipe:: fastqsplitter
   :replaces_section_title:
   :noindex:

   Splits FASTQ files evenly.

   :homepage: https://github.com/LUMC/fastqsplitter
   :documentation: https://fastqsplitter.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`fastqsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqsplitter/meta.yaml>`_

   


.. conda:package:: fastqsplitter

   |downloads_fastqsplitter| |docker_fastqsplitter|

   :versions:
      
      

      ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends pigz: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends xopen: ``>=0.8.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqsplitter

   and update with::

      conda update fastqsplitter

   or use the docker container::

      docker pull quay.io/biocontainers/fastqsplitter:<tag>

   (see `fastqsplitter/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqsplitter| image:: https://img.shields.io/conda/dn/bioconda/fastqsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqsplitter
   :alt:   (downloads)
.. |docker_fastqsplitter| image:: https://quay.io/repository/biocontainers/fastqsplitter/status
   :target: https://quay.io/repository/biocontainers/fastqsplitter
.. _`fastqsplitter/tags`: https://quay.io/repository/biocontainers/fastqsplitter?tab=tags


.. raw:: html

    <script>
        var package = "fastqsplitter";
        var versions = ["1.2.0","1.2.0","1.2.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqsplitter/README.html
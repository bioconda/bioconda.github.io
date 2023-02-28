:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pullseq'
.. highlight: bash

pullseq
=======

.. conda:recipe:: pullseq
   :replaces_section_title:
   :noindex:

   Utility program for extracting sequences from a fasta\/fastq file.

   :homepage: https://github.com/bcthomas/pullseq
   :license: MIT
   :recipe: /`pullseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pullseq/meta.yaml>`_

   


.. conda:package:: pullseq

   |downloads_pullseq| |docker_pullseq|

   :versions:
      
      

      ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pullseq

   and update with::

      conda update pullseq

   or use the docker container::

      docker pull quay.io/biocontainers/pullseq:<tag>

   (see `pullseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pullseq| image:: https://img.shields.io/conda/dn/bioconda/pullseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pullseq
   :alt:   (downloads)
.. |docker_pullseq| image:: https://quay.io/repository/biocontainers/pullseq/status
   :target: https://quay.io/repository/biocontainers/pullseq
.. _`pullseq/tags`: https://quay.io/repository/biocontainers/pullseq?tab=tags


.. raw:: html

    <script>
        var package = "pullseq";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pullseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pullseq/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-pair'
.. highlight: bash

fastq-pair
==========

.. conda:recipe:: fastq-pair
   :replaces_section_title:
   :noindex:

   fastq\-pair\: efficient synchronization of paired\-end fastq files

   :homepage: https://github.com/linsalrob/fastq-pair
   :license: MIT
   :recipe: /`fastq-pair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-pair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-pair/meta.yaml>`_
   :links: doi: :doi:`10.1101/552885`

   


.. conda:package:: fastq-pair

   |downloads_fastq-pair| |docker_fastq-pair|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-pair

   and update with::

      conda update fastq-pair

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-pair:<tag>

   (see `fastq-pair/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-pair| image:: https://img.shields.io/conda/dn/bioconda/fastq-pair.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-pair
   :alt:   (downloads)
.. |docker_fastq-pair| image:: https://quay.io/repository/biocontainers/fastq-pair/status
   :target: https://quay.io/repository/biocontainers/fastq-pair
.. _`fastq-pair/tags`: https://quay.io/repository/biocontainers/fastq-pair?tab=tags


.. raw:: html

    <script>
        var package = "fastq-pair";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-pair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-pair/README.html
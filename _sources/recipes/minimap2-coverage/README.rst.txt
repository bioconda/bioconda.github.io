:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap2-coverage'
.. highlight: bash

minimap2-coverage
=================

.. conda:recipe:: minimap2-coverage
   :replaces_section_title:
   :noindex:

   A versatile pairwise aligner for genomic and spliced nucleotide sequences modified for use by LongQC

   :homepage: https://github.com/yfukasawa/LongQC
   :license: MIT
   :recipe: /`minimap2-coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2-coverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2-coverage/meta.yaml>`_

   


.. conda:package:: minimap2-coverage

   |downloads_minimap2-coverage| |docker_minimap2-coverage|

   :versions:
      
      

      ``1.2.0c-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minimap2-coverage

   and update with::

      conda update minimap2-coverage

   or use the docker container::

      docker pull quay.io/biocontainers/minimap2-coverage:<tag>

   (see `minimap2-coverage/tags`_ for valid values for ``<tag>``)


.. |downloads_minimap2-coverage| image:: https://img.shields.io/conda/dn/bioconda/minimap2-coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap2-coverage
   :alt:   (downloads)
.. |docker_minimap2-coverage| image:: https://quay.io/repository/biocontainers/minimap2-coverage/status
   :target: https://quay.io/repository/biocontainers/minimap2-coverage
.. _`minimap2-coverage/tags`: https://quay.io/repository/biocontainers/minimap2-coverage?tab=tags


.. raw:: html

    <script>
        var package = "minimap2-coverage";
        var versions = ["1.2.0c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap2-coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap2-coverage/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '3seq'
.. highlight: bash

3seq
====

.. conda:recipe:: 3seq
   :replaces_section_title:
   :noindex:

   3SEQ tests all sequence triplets in an alignment for a mosaic recombination signal.

   :homepage: https://mol.ax/software/3seq/
   :license: CC BY-NC-SA 4.0
   :recipe: /`3seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3seq/meta.yaml>`_

   


.. conda:package:: 3seq

   |downloads_3seq| |docker_3seq|

   :versions:
      
      

      ``1.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install 3seq

   and update with::

      conda update 3seq

   or use the docker container::

      docker pull quay.io/biocontainers/3seq:<tag>

   (see `3seq/tags`_ for valid values for ``<tag>``)


.. |downloads_3seq| image:: https://img.shields.io/conda/dn/bioconda/3seq.svg?style=flat
   :target: https://anaconda.org/bioconda/3seq
   :alt:   (downloads)
.. |docker_3seq| image:: https://quay.io/repository/biocontainers/3seq/status
   :target: https://quay.io/repository/biocontainers/3seq
.. _`3seq/tags`: https://quay.io/repository/biocontainers/3seq?tab=tags


.. raw:: html

    <script>
        var package = "3seq";
        var versions = ["1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/3seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/3seq/README.html
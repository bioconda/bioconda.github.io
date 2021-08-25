:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'athena_meta'
.. highlight: bash

athena_meta
===========

.. conda:recipe:: athena_meta
   :replaces_section_title:
   :noindex:

   Athena read cloud assembler for metagenomes

   :homepage: https://github.com/abishara/athena_meta/
   :license: MIT
   :recipe: /`athena_meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/athena_meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/athena_meta/meta.yaml>`_

   


.. conda:package:: athena_meta

   |downloads_athena_meta| |docker_athena_meta|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends bwa: ``0.7.*``
   :depends bx-python: ``0.8.*``
   :depends flye: ``2.3.1.*``
   :depends htslib: ``1.9.*``
   :depends idba_subasm: ``1.1.3a1.*``
   :depends ipython-cluster-helper: ``0.6.*``
   :depends numpy: ``1.11.*``
   :depends pysam: ``0.15.*``
   :depends python: ``<3``
   :depends samtools: ``1.9.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install athena_meta

   and update with::

      conda update athena_meta

   or use the docker container::

      docker pull quay.io/biocontainers/athena_meta:<tag>

   (see `athena_meta/tags`_ for valid values for ``<tag>``)


.. |downloads_athena_meta| image:: https://img.shields.io/conda/dn/bioconda/athena_meta.svg?style=flat
   :target: https://anaconda.org/bioconda/athena_meta
   :alt:   (downloads)
.. |docker_athena_meta| image:: https://quay.io/repository/biocontainers/athena_meta/status
   :target: https://quay.io/repository/biocontainers/athena_meta
.. _`athena_meta/tags`: https://quay.io/repository/biocontainers/athena_meta?tab=tags


.. raw:: html

    <script>
        var package = "athena_meta";
        var versions = ["1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/athena_meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/athena_meta/README.html
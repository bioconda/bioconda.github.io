:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2parquet'
.. highlight: bash

vcf2parquet
===========

.. conda:recipe:: vcf2parquet
   :replaces_section_title:
   :noindex:

   Convert a vcf in parquet.

   :homepage: https://github.com/natir/vcf2parquet
   :license: MIT / MIT
   :recipe: /`vcf2parquet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2parquet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2parquet/meta.yaml>`_

   


.. conda:package:: vcf2parquet

   |downloads_vcf2parquet| |docker_vcf2parquet|

   :versions:
      
      

      ``0.2-0``,  ``0.1-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2parquet

   and update with::

      conda update vcf2parquet

   or use the docker container::

      docker pull quay.io/biocontainers/vcf2parquet:<tag>

   (see `vcf2parquet/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2parquet| image:: https://img.shields.io/conda/dn/bioconda/vcf2parquet.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2parquet
   :alt:   (downloads)
.. |docker_vcf2parquet| image:: https://quay.io/repository/biocontainers/vcf2parquet/status
   :target: https://quay.io/repository/biocontainers/vcf2parquet
.. _`vcf2parquet/tags`: https://quay.io/repository/biocontainers/vcf2parquet?tab=tags


.. raw:: html

    <script>
        var package = "vcf2parquet";
        var versions = ["0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2parquet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2parquet/README.html
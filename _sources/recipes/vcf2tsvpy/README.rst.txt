:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2tsvpy'
.. highlight: bash

vcf2tsvpy
=========

.. conda:recipe:: vcf2tsvpy
   :replaces_section_title:
   :noindex:

   Genomic VCF to tab\-separated values \(TSV\)

   :homepage: https://github.com/sigven/vcf2tsvpy
   :license: MIT
   :recipe: /`vcf2tsvpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2tsvpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2tsvpy/meta.yaml>`_

   


.. conda:package:: vcf2tsvpy

   |downloads_vcf2tsvpy| |docker_vcf2tsvpy|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends cyvcf2: 
   :depends numpy: 
   :depends pip: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2tsvpy

   and update with::

      conda update vcf2tsvpy

   or use the docker container::

      docker pull quay.io/biocontainers/vcf2tsvpy:<tag>

   (see `vcf2tsvpy/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2tsvpy| image:: https://img.shields.io/conda/dn/bioconda/vcf2tsvpy.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2tsvpy
   :alt:   (downloads)
.. |docker_vcf2tsvpy| image:: https://quay.io/repository/biocontainers/vcf2tsvpy/status
   :target: https://quay.io/repository/biocontainers/vcf2tsvpy
.. _`vcf2tsvpy/tags`: https://quay.io/repository/biocontainers/vcf2tsvpy?tab=tags


.. raw:: html

    <script>
        var package = "vcf2tsvpy";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2tsvpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2tsvpy/README.html
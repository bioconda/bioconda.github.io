:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_vcf'
.. highlight: bash

extract_vcf
===========

.. conda:recipe:: extract_vcf
   :replaces_section_title:
   :noindex:

   Tool to extract information from vcf file.

   :homepage: https://github.com/moonso/extract_vcf
   :license: BSD / BSD
   :recipe: /`extract_vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_vcf/meta.yaml>`_

   


.. conda:package:: extract_vcf

   |downloads_extract_vcf| |docker_extract_vcf|

   :versions:
      
      

      ``0.5-0``

      

   
   :depends configobj: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extract_vcf

   and update with::

      conda update extract_vcf

   or use the docker container::

      docker pull quay.io/biocontainers/extract_vcf:<tag>

   (see `extract_vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_vcf| image:: https://img.shields.io/conda/dn/bioconda/extract_vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_vcf
   :alt:   (downloads)
.. |docker_extract_vcf| image:: https://quay.io/repository/biocontainers/extract_vcf/status
   :target: https://quay.io/repository/biocontainers/extract_vcf
.. _`extract_vcf/tags`: https://quay.io/repository/biocontainers/extract_vcf?tab=tags


.. raw:: html

    <script>
        var package = "extract_vcf";
        var versions = ["0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_vcf/README.html
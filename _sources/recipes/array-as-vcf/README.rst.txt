:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'array-as-vcf'
.. highlight: bash

array-as-vcf
============

.. conda:recipe:: array-as-vcf
   :replaces_section_title:
   :noindex:

   Convert SNP array to VCF

   :homepage: https://github.com/LUMC/array-as-vcf
   :license: MIT / MIT
   :recipe: /`array-as-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/array-as-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/array-as-vcf/meta.yaml>`_

   


.. conda:package:: array-as-vcf

   |downloads_array-as-vcf| |docker_array-as-vcf|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: ``>2``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install array-as-vcf

   and update with::

      conda update array-as-vcf

   or use the docker container::

      docker pull quay.io/biocontainers/array-as-vcf:<tag>

   (see `array-as-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_array-as-vcf| image:: https://img.shields.io/conda/dn/bioconda/array-as-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/array-as-vcf
   :alt:   (downloads)
.. |docker_array-as-vcf| image:: https://quay.io/repository/biocontainers/array-as-vcf/status
   :target: https://quay.io/repository/biocontainers/array-as-vcf
.. _`array-as-vcf/tags`: https://quay.io/repository/biocontainers/array-as-vcf?tab=tags


.. raw:: html

    <script>
        var package = "array-as-vcf";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/array-as-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/array-as-vcf/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parse-vcf'
.. highlight: bash

parse-vcf
=========

.. conda:recipe:: parse-vcf
   :replaces_section_title:
   :noindex:

   Variant Call Format parser and convenience methods

   :homepage: https://github.com/david-a-parry/parse_vcf.py
   :license: MIT / MIT
   :recipe: /`parse-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse-vcf/meta.yaml>`_

   


.. conda:package:: parse-vcf

   |downloads_parse-vcf| |docker_parse-vcf|

   :versions:
      
      

      ``0.2.8-1``,  ``0.2.8-0``

      

   
   :depends pysam: 
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parse-vcf

   and update with::

      conda update parse-vcf

   or use the docker container::

      docker pull quay.io/biocontainers/parse-vcf:<tag>

   (see `parse-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_parse-vcf| image:: https://img.shields.io/conda/dn/bioconda/parse-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/parse-vcf
   :alt:   (downloads)
.. |docker_parse-vcf| image:: https://quay.io/repository/biocontainers/parse-vcf/status
   :target: https://quay.io/repository/biocontainers/parse-vcf
.. _`parse-vcf/tags`: https://quay.io/repository/biocontainers/parse-vcf?tab=tags


.. raw:: html

    <script>
        var package = "parse-vcf";
        var versions = ["0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parse-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parse-vcf/README.html
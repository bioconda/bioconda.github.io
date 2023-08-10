:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2maf-umccr'
.. highlight: bash

vcf2maf-umccr
=============

.. conda:recipe:: vcf2maf-umccr
   :replaces_section_title:
   :noindex:

   Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms

   :homepage: https://github.com/umccr/vcf2maf/
   :license: Apache / Apache-2.0
   :recipe: /`vcf2maf-umccr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf-umccr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf-umccr/meta.yaml>`_

   


.. conda:package:: vcf2maf-umccr

   |downloads_vcf2maf-umccr| |docker_vcf2maf-umccr|

   :versions:
      
      

      ``1.6.21.20230511-0``

      

   
   :depends htslib: 
   :depends perl: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2maf-umccr

   and update with::

      conda update vcf2maf-umccr

   or use the docker container::

      docker pull quay.io/biocontainers/vcf2maf-umccr:<tag>

   (see `vcf2maf-umccr/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2maf-umccr| image:: https://img.shields.io/conda/dn/bioconda/vcf2maf-umccr.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2maf-umccr
   :alt:   (downloads)
.. |docker_vcf2maf-umccr| image:: https://quay.io/repository/biocontainers/vcf2maf-umccr/status
   :target: https://quay.io/repository/biocontainers/vcf2maf-umccr
.. _`vcf2maf-umccr/tags`: https://quay.io/repository/biocontainers/vcf2maf-umccr?tab=tags


.. raw:: html

    <script>
        var package = "vcf2maf-umccr";
        var versions = ["1.6.21.20230511"];
    </script>





Notes
-----
This package incorporates the latest changes of the original tool \[vcf2maf\]\(https\:\/\/github.com\/mskcc\/vcf2maf\)
from its main branch but released from the \[umccr fork\]\(https\:\/\/github.com\/umccr\/vcf2maf\/\). 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2maf-umccr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2maf-umccr/README.html
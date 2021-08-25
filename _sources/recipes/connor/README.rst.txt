:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'connor'
.. highlight: bash

connor
======

.. conda:recipe:: connor
   :replaces_section_title:
   :noindex:

   A command\-line tool to deduplicate bam files based on custom\, inline barcoding.

   :homepage: https://github.com/umich-brcf-bioinf/Connor
   :license: Apache / Apache-2.0
   :recipe: /`connor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/connor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/connor/meta.yaml>`_

   


.. conda:package:: connor

   |downloads_connor| |docker_connor|

   :versions:
      
      

      ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6-2``,  ``0.6-0``,  ``0.5.1-0``

      

   
   :depends bcftools: ``1.3.1.*``
   :depends htslib: ``1.3.1.*``
   :depends pysam: ``0.9.1.*``
   :depends python: 
   :depends samtools: ``1.3.1.*``
   :depends sortedcontainers: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install connor

   and update with::

      conda update connor

   or use the docker container::

      docker pull quay.io/biocontainers/connor:<tag>

   (see `connor/tags`_ for valid values for ``<tag>``)


.. |downloads_connor| image:: https://img.shields.io/conda/dn/bioconda/connor.svg?style=flat
   :target: https://anaconda.org/bioconda/connor
   :alt:   (downloads)
.. |docker_connor| image:: https://quay.io/repository/biocontainers/connor/status
   :target: https://quay.io/repository/biocontainers/connor
.. _`connor/tags`: https://quay.io/repository/biocontainers/connor?tab=tags


.. raw:: html

    <script>
        var package = "connor";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/connor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/connor/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrtk'
.. highlight: bash

lrtk
====

.. conda:recipe:: lrtk
   :replaces_section_title:
   :noindex:

   This is a unified and versatile toolkit for analyzing Linked\-Read sequencing data.

   :homepage: https://github.com/ericcombiolab/LRTK
   :license: MIT
   :recipe: /`lrtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrtk/meta.yaml>`_

   


.. conda:package:: lrtk

   |downloads_lrtk| |docker_lrtk|

   :versions:
      
      

      ``1.5-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends aquila: 
   :depends bcftools: 
   :depends bwa: 
   :depends fastp: 
   :depends freebayes: 
   :depends gatk: 
   :depends hapcut2: 
   :depends parallel: 
   :depends picard: 
   :depends python: 
   :depends samtools: 
   :depends vcflib: 
   :depends whatshap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lrtk

   and update with::

      conda update lrtk

   or use the docker container::

      docker pull quay.io/biocontainers/lrtk:<tag>

   (see `lrtk/tags`_ for valid values for ``<tag>``)


.. |downloads_lrtk| image:: https://img.shields.io/conda/dn/bioconda/lrtk.svg?style=flat
   :target: https://anaconda.org/bioconda/lrtk
   :alt:   (downloads)
.. |docker_lrtk| image:: https://quay.io/repository/biocontainers/lrtk/status
   :target: https://quay.io/repository/biocontainers/lrtk
.. _`lrtk/tags`: https://quay.io/repository/biocontainers/lrtk?tab=tags


.. raw:: html

    <script>
        var package = "lrtk";
        var versions = ["1.5","1.3","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrtk/README.html
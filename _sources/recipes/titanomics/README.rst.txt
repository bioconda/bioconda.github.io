:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'titanomics'
.. highlight: bash

titanomics
==========

.. conda:recipe:: titanomics
   :replaces_section_title:
   :noindex:

   A comprehensive multi\-omics data analysis pipeline.

   :homepage: https://github.com/raw-lab/titan
   :license: BSD / BSD
   :recipe: /`titanomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titanomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titanomics/meta.yaml>`_

   


.. conda:package:: titanomics

   |downloads_titanomics| |docker_titanomics|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends bowtie2: 
   :depends configargparse: 
   :depends fastp: 
   :depends fastqc: 
   :depends flash2: 
   :depends flye: 
   :depends grpcio: ``<=1.43``
   :depends megahit: 
   :depends metaomestats: 
   :depends psutil: 
   :depends python: 
   :depends ray-core: 
   :depends ray-dashboard: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install titanomics

   and update with::

      conda update titanomics

   or use the docker container::

      docker pull quay.io/biocontainers/titanomics:<tag>

   (see `titanomics/tags`_ for valid values for ``<tag>``)


.. |downloads_titanomics| image:: https://img.shields.io/conda/dn/bioconda/titanomics.svg?style=flat
   :target: https://anaconda.org/bioconda/titanomics
   :alt:   (downloads)
.. |docker_titanomics| image:: https://quay.io/repository/biocontainers/titanomics/status
   :target: https://quay.io/repository/biocontainers/titanomics
.. _`titanomics/tags`: https://quay.io/repository/biocontainers/titanomics?tab=tags


.. raw:: html

    <script>
        var package = "titanomics";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/titanomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/titanomics/README.html
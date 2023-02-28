:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaplatanus'
.. highlight: bash

metaplatanus
============

.. conda:recipe:: metaplatanus
   :replaces_section_title:
   :noindex:

   MetaPlatanus\: A hybrid metagenome assembler

   :homepage: https://github.com/rkajitani/metaplatanus
   :license: GPL / GPL-3.0
   :recipe: /`metaplatanus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaplatanus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaplatanus/meta.yaml>`_

   


.. conda:package:: metaplatanus

   |downloads_metaplatanus| |docker_metaplatanus|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends file: 
   :depends gzip: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends megahit: ``>=1.2.9``
   :depends metabat2: ``>=2.12.1``
   :depends minimap2: ``>=2.17``
   :depends openmp: 
   :depends perl: ``>=5``
   :depends psutil: ``>=5.8.0``
   :depends racon: ``>=1.4.20``
   :depends samtools: ``>=1.9``
   :depends seqkit: ``>=0.16.1``
   :depends tgsgapcloser: ``>=1.0.3``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaplatanus

   and update with::

      conda update metaplatanus

   or use the docker container::

      docker pull quay.io/biocontainers/metaplatanus:<tag>

   (see `metaplatanus/tags`_ for valid values for ``<tag>``)


.. |downloads_metaplatanus| image:: https://img.shields.io/conda/dn/bioconda/metaplatanus.svg?style=flat
   :target: https://anaconda.org/bioconda/metaplatanus
   :alt:   (downloads)
.. |docker_metaplatanus| image:: https://quay.io/repository/biocontainers/metaplatanus/status
   :target: https://quay.io/repository/biocontainers/metaplatanus
.. _`metaplatanus/tags`: https://quay.io/repository/biocontainers/metaplatanus?tab=tags


.. raw:: html

    <script>
        var package = "metaplatanus";
        var versions = ["1.3.1","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaplatanus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaplatanus/README.html
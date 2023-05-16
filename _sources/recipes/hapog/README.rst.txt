:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapog'
.. highlight: bash

hapog
=====

.. conda:recipe:: hapog
   :replaces_section_title:
   :noindex:

   Haplotype\-Aware Polishing of Genomes

   :homepage: https://github.com/institut-de-genomique/HAPO-G
   :license: OTHER / CECILL-2.1
   :recipe: /`hapog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapog/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqab034`

   


.. conda:package:: hapog

   |downloads_hapog| |docker_hapog|

   :versions:
      
      

      ``1.3.4-3``,  ``1.3.4-2``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``

      

   
   :depends biopython: 
   :depends bwa: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends minimap2: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hapog

   and update with::

      conda update hapog

   or use the docker container::

      docker pull quay.io/biocontainers/hapog:<tag>

   (see `hapog/tags`_ for valid values for ``<tag>``)


.. |downloads_hapog| image:: https://img.shields.io/conda/dn/bioconda/hapog.svg?style=flat
   :target: https://anaconda.org/bioconda/hapog
   :alt:   (downloads)
.. |docker_hapog| image:: https://quay.io/repository/biocontainers/hapog/status
   :target: https://quay.io/repository/biocontainers/hapog
.. _`hapog/tags`: https://quay.io/repository/biocontainers/hapog?tab=tags


.. raw:: html

    <script>
        var package = "hapog";
        var versions = ["1.3.4","1.3.4","1.3.4","1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapog/README.html
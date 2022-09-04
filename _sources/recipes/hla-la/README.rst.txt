:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hla-la'
.. highlight: bash

hla-la
======

.. conda:recipe:: hla-la
   :replaces_section_title:
   :noindex:

   HLA typing from short and long reads

   :homepage: https://github.com/DiltheyLab/HLA-LA
   :license: GPL
   :recipe: /`hla-la <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la/meta.yaml>`_
   :links: biotools: :biotools:`hla-la`

   


.. conda:package:: hla-la

   |downloads_hla-la| |docker_hla-la|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bwa: ``0.7.12``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends mummer: 
   :depends perl-bio-db-hts: 
   :depends perl-bio-featureio: 
   :depends perl-bioperl: 
   :depends perl-bioperl-core: 
   :depends perl-list-moreutils: 
   :depends perl-text-levenshtein: 
   :depends picard: 
   :depends r-base: ``4.*``
   :depends samtools: ``1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hla-la

   and update with::

      conda update hla-la

   or use the docker container::

      docker pull quay.io/biocontainers/hla-la:<tag>

   (see `hla-la/tags`_ for valid values for ``<tag>``)


.. |downloads_hla-la| image:: https://img.shields.io/conda/dn/bioconda/hla-la.svg?style=flat
   :target: https://anaconda.org/bioconda/hla-la
   :alt:   (downloads)
.. |docker_hla-la| image:: https://quay.io/repository/biocontainers/hla-la/status
   :target: https://quay.io/repository/biocontainers/hla-la
.. _`hla-la/tags`: https://quay.io/repository/biocontainers/hla-la?tab=tags


.. raw:: html

    <script>
        var package = "hla-la";
        var versions = ["1.0.3","1.0.1","1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hla-la/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hla-la/README.html
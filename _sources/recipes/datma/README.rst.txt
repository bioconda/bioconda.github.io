:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'datma'
.. highlight: bash

datma
=====

.. conda:recipe:: datma
   :replaces_section_title:
   :noindex:

   DistributedAuTomaticMetagenomicAssembly andAnnotation framework

   :homepage: https://github.com/andvides/DATMA
   :license: GPL / GPL-3.0
   :recipe: /`datma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/datma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/datma/meta.yaml>`_

   


.. conda:package:: datma

   |downloads_datma| |docker_datma|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends blast: ``2.6.0.*``
   :depends bowtie2: ``2.3.5.*``
   :depends busco: ``2.0.1.*``
   :depends bwa: ``0.7.17.*``
   :depends checkm-genome: ``1.0.12.*``
   :depends clame: ``1.0 he1b5a44_1``
   :depends fastqc: ``0.11.8.*``
   :depends fastx_toolkit: 
   :depends flash2: 
   :depends gmp: 
   :depends kaiju: 
   :depends kraken: ``1.1.*``
   :depends krona: ``2.7.*``
   :depends matplotlib-base: 
   :depends maven: 
   :depends megahit: ``1.1.3.*``
   :depends mergenotcombined: 
   :depends openjdk: 
   :depends pplacer: ``1.1.alpha19.*``
   :depends prinseq: 
   :depends prodigal: 
   :depends python: ``>=2.7,<=3.6.5``
   :depends quast: ``5.0.2.*``
   :depends rapifilt: 
   :depends rdp_classifier: 
   :depends samtools: ``1.9.*``
   :depends selectfasta: 
   :depends spades: ``3.13.0.*``
   :depends trimmomatic: 
   :depends unmerge: 
   :depends velvet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install datma

   and update with::

      conda update datma

   or use the docker container::

      docker pull quay.io/biocontainers/datma:<tag>

   (see `datma/tags`_ for valid values for ``<tag>``)


.. |downloads_datma| image:: https://img.shields.io/conda/dn/bioconda/datma.svg?style=flat
   :target: https://anaconda.org/bioconda/datma
   :alt:   (downloads)
.. |docker_datma| image:: https://quay.io/repository/biocontainers/datma/status
   :target: https://quay.io/repository/biocontainers/datma
.. _`datma/tags`: https://quay.io/repository/biocontainers/datma?tab=tags


.. raw:: html

    <script>
        var package = "datma";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/datma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/datma/README.html
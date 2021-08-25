:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conduit-assembler'
.. highlight: bash

conduit-assembler
=================

.. conda:recipe:: conduit-assembler
   :replaces_section_title:
   :noindex:

   Long\- and short\-read hybrid de novo transcriptome assembly

   :homepage: https://github.com/NatPRoach/conduit
   :license: GPL-2.0
   :recipe: /`conduit-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conduit-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conduit-assembler/meta.yaml>`_

   


.. conda:package:: conduit-assembler

   |downloads_conduit-assembler| |docker_conduit-assembler|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends bowtie2: ``>=2.3.3``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install conduit-assembler

   and update with::

      conda update conduit-assembler

   or use the docker container::

      docker pull quay.io/biocontainers/conduit-assembler:<tag>

   (see `conduit-assembler/tags`_ for valid values for ``<tag>``)


.. |downloads_conduit-assembler| image:: https://img.shields.io/conda/dn/bioconda/conduit-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/conduit-assembler
   :alt:   (downloads)
.. |docker_conduit-assembler| image:: https://quay.io/repository/biocontainers/conduit-assembler/status
   :target: https://quay.io/repository/biocontainers/conduit-assembler
.. _`conduit-assembler/tags`: https://quay.io/repository/biocontainers/conduit-assembler?tab=tags


.. raw:: html

    <script>
        var package = "conduit-assembler";
        var versions = ["0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conduit-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conduit-assembler/README.html
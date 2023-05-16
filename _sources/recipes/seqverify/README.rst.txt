:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqverify'
.. highlight: bash

seqverify
=========

.. conda:recipe:: seqverify
   :replaces_section_title:
   :noindex:

   Seqverify analyzes whole genome sequencing data for gene\-editing verification.

   :homepage: https://github.com/mpiersonsmela/SeqVerify
   :license: GPL-3.0
   :recipe: /`seqverify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqverify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqverify/meta.yaml>`_

   


.. conda:package:: seqverify

   |downloads_seqverify| |docker_seqverify|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bwa: 
   :depends cnvpytor: 
   :depends kraken2: 
   :depends python: ``>=3.9``
   :depends regex: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqverify

   and update with::

      conda update seqverify

   or use the docker container::

      docker pull quay.io/biocontainers/seqverify:<tag>

   (see `seqverify/tags`_ for valid values for ``<tag>``)


.. |downloads_seqverify| image:: https://img.shields.io/conda/dn/bioconda/seqverify.svg?style=flat
   :target: https://anaconda.org/bioconda/seqverify
   :alt:   (downloads)
.. |docker_seqverify| image:: https://quay.io/repository/biocontainers/seqverify/status
   :target: https://quay.io/repository/biocontainers/seqverify
.. _`seqverify/tags`: https://quay.io/repository/biocontainers/seqverify?tab=tags


.. raw:: html

    <script>
        var package = "seqverify";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqverify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqverify/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transcriptm'
.. highlight: bash

transcriptm
===========

.. conda:recipe:: transcriptm
   :replaces_section_title:
   :noindex:

   Metagenomics analyses.

   :homepage: https://github.com/elfrouin/transcriptM
   :license: GPL / GPL-3.0
   :recipe: /`transcriptm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcriptm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcriptm/meta.yaml>`_

   


.. conda:package:: transcriptm

   |downloads_transcriptm| |docker_transcriptm|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends bamm: ``>=1.5.0``
   :depends bedtools: ``>=2.20.1``
   :depends dirseq: ``>=0.0.2``
   :depends fastqc: ``>=0.10.1``
   :depends fxtract: ``>=1.2``
   :depends numpy: ``>=1.9.1``
   :depends python: ``2.7.*``
   :depends ruffus: ``>=2.6.3``
   :depends samtools: ``1.15.1.*``
   :depends sortmerna: ``2.0.*``
   :depends tempdir: ``>=0.6``
   :depends trimmomatic: ``>=0.32``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transcriptm

   and update with::

      conda update transcriptm

   or use the docker container::

      docker pull quay.io/biocontainers/transcriptm:<tag>

   (see `transcriptm/tags`_ for valid values for ``<tag>``)


.. |downloads_transcriptm| image:: https://img.shields.io/conda/dn/bioconda/transcriptm.svg?style=flat
   :target: https://anaconda.org/bioconda/transcriptm
   :alt:   (downloads)
.. |docker_transcriptm| image:: https://quay.io/repository/biocontainers/transcriptm/status
   :target: https://quay.io/repository/biocontainers/transcriptm
.. _`transcriptm/tags`: https://quay.io/repository/biocontainers/transcriptm?tab=tags


.. raw:: html

    <script>
        var package = "transcriptm";
        var versions = ["0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transcriptm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transcriptm/README.html
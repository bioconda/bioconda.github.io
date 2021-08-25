:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gs-tama'
.. highlight: bash

gs-tama
=======

.. conda:recipe:: gs-tama
   :replaces_section_title:
   :noindex:

   Gene\-Switch Transcriptome Annotation by Modular Algorithms

   :homepage: https://github.com/sguizard/gs-tama
   :license: GPL-3.0 License
   :recipe: /`gs-tama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gs-tama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gs-tama/meta.yaml>`_

   


.. conda:package:: gs-tama

   |downloads_gs-tama| |docker_gs-tama|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends biopython: ``>=1.76``
   :depends blast: ``>=2.11.0``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``2.7.*``
   :depends samtools: ``>=1.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gs-tama

   and update with::

      conda update gs-tama

   or use the docker container::

      docker pull quay.io/biocontainers/gs-tama:<tag>

   (see `gs-tama/tags`_ for valid values for ``<tag>``)


.. |downloads_gs-tama| image:: https://img.shields.io/conda/dn/bioconda/gs-tama.svg?style=flat
   :target: https://anaconda.org/bioconda/gs-tama
   :alt:   (downloads)
.. |docker_gs-tama| image:: https://quay.io/repository/biocontainers/gs-tama/status
   :target: https://quay.io/repository/biocontainers/gs-tama
.. _`gs-tama/tags`: https://quay.io/repository/biocontainers/gs-tama?tab=tags


.. raw:: html

    <script>
        var package = "gs-tama";
        var versions = ["1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gs-tama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gs-tama/README.html
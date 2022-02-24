:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqstats'
.. highlight: bash

seqstats
========

.. conda:recipe:: seqstats
   :replaces_section_title:
   :noindex:

   Quick summary statistics on fasta\/fastq\(.gz\) files

   :homepage: https://github.com/clwgg/seqstats
   :license: MIT
   :recipe: /`seqstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqstats/meta.yaml>`_

   


.. conda:package:: seqstats

   |downloads_seqstats| |docker_seqstats|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqstats

   and update with::

      conda update seqstats

   or use the docker container::

      docker pull quay.io/biocontainers/seqstats:<tag>

   (see `seqstats/tags`_ for valid values for ``<tag>``)


.. |downloads_seqstats| image:: https://img.shields.io/conda/dn/bioconda/seqstats.svg?style=flat
   :target: https://anaconda.org/bioconda/seqstats
   :alt:   (downloads)
.. |docker_seqstats| image:: https://quay.io/repository/biocontainers/seqstats/status
   :target: https://quay.io/repository/biocontainers/seqstats
.. _`seqstats/tags`: https://quay.io/repository/biocontainers/seqstats?tab=tags


.. raw:: html

    <script>
        var package = "seqstats";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqstats/README.html
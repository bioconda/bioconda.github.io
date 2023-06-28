:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seqmagick'
.. highlight: bash

r-seqmagick
===========

.. conda:recipe:: r-seqmagick
   :replaces_section_title:
   :noindex:

   Supports reading and writing sequences for different formats \(currently interleaved and sequential formats for \'FASTA\' and \'PHYLIP\'\)\, file conversion\, and manipulation \(e.g. filter sequences that contain specify pattern\, export consensus sequence from an alignment\).

   :homepage: https://github.com/YuLab-SMU/seqmagick
   :license: OTHER / Artistic-2.0
   :recipe: /`r-seqmagick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqmagick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqmagick/meta.yaml>`_

   


.. conda:package:: r-seqmagick

   |downloads_r-seqmagick| |docker_r-seqmagick|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends bioconductor-biostrings: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seqmagick

   and update with::

      conda update r-seqmagick

   or use the docker container::

      docker pull quay.io/biocontainers/r-seqmagick:<tag>

   (see `r-seqmagick/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seqmagick| image:: https://img.shields.io/conda/dn/bioconda/r-seqmagick.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seqmagick
   :alt:   (downloads)
.. |docker_r-seqmagick| image:: https://quay.io/repository/biocontainers/r-seqmagick/status
   :target: https://quay.io/repository/biocontainers/r-seqmagick
.. _`r-seqmagick/tags`: https://quay.io/repository/biocontainers/r-seqmagick?tab=tags


.. raw:: html

    <script>
        var package = "r-seqmagick";
        var versions = ["0.1.6","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seqmagick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seqmagick/README.html
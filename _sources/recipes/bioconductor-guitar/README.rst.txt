:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guitar'
.. highlight: bash

bioconductor-guitar
===================

.. conda:recipe:: bioconductor-guitar
   :replaces_section_title:
   :noindex:

   Guitar

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Guitar.html
   :license: GPL-2
   :recipe: /`bioconductor-guitar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guitar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guitar/meta.yaml>`_

   The package is designed for visualization of RNA\-related genomic features with respect to the landmarks of RNA transcripts\, i.e.\, transcription starting site\, start codon\, stop codon and transcription ending site.


.. conda:package:: bioconductor-guitar

   |downloads_bioconductor-guitar| |docker_bioconductor-guitar|

   :versions:
      
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.20.1-0``,  ``1.20.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-guitar

   and update with::

      conda update bioconductor-guitar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-guitar:<tag>

   (see `bioconductor-guitar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-guitar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guitar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-guitar
   :alt:   (downloads)
.. |docker_bioconductor-guitar| image:: https://quay.io/repository/biocontainers/bioconductor-guitar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guitar
.. _`bioconductor-guitar/tags`: https://quay.io/repository/biocontainers/bioconductor-guitar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-guitar";
        var versions = ["2.10.0","2.8.0","2.6.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guitar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guitar/README.html
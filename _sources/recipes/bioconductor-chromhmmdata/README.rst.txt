:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromhmmdata'
.. highlight: bash

bioconductor-chromhmmdata
=========================

.. conda:recipe:: bioconductor-chromhmmdata
   :replaces_section_title:
   :noindex:

   Chromosome Size\, Coordinates and Anchor Files

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/chromhmmData.html
   :license: GPL-3
   :recipe: /`bioconductor-chromhmmdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromhmmdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromhmmdata/meta.yaml>`_

   Annotation files of the formatted genomic annotation for ChromHMM. Three types of text files are included the chromosome sizes\, region coordinates and anchors specifying the transcription start and end sites. The package includes data for two versions of the genome of humans and mice.


.. conda:package:: bioconductor-chromhmmdata

   |downloads_bioconductor-chromhmmdata| |docker_bioconductor-chromhmmdata|

   :versions:
      
      

      ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``

      

   
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromhmmdata

   and update with::

      conda update bioconductor-chromhmmdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromhmmdata:<tag>

   (see `bioconductor-chromhmmdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromhmmdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromhmmdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromhmmdata
   :alt:   (downloads)
.. |docker_bioconductor-chromhmmdata| image:: https://quay.io/repository/biocontainers/bioconductor-chromhmmdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromhmmdata
.. _`bioconductor-chromhmmdata/tags`: https://quay.io/repository/biocontainers/bioconductor-chromhmmdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromhmmdata";
        var versions = ["0.99.2","0.99.2","0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromhmmdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromhmmdata/README.html
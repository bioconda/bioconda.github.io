:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumiratidmapping'
.. highlight: bash

bioconductor-lumiratidmapping
=============================

.. conda:recipe:: bioconductor-lumiratidmapping
   :replaces_section_title:
   :noindex:

   Illumina Identifier mapping for Rat

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/lumiRatIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumiratidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumiratidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumiratidmapping/meta.yaml>`_

   This package includes mappings information between different types of Illumina IDs of Illumina Rat chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Rat chips to RefSeq IDs with mapping qualities information.


.. conda:package:: bioconductor-lumiratidmapping

   |downloads_bioconductor-lumiratidmapping| |docker_bioconductor-lumiratidmapping|

   :versions:
      
      

      ``1.10.0-8``,  ``1.10.0-7``,  ``1.10.0-6``,  ``1.10.0-5``,  ``1.10.0-4``,  ``1.10.0-3``,  ``1.10.0-2``,  ``1.10.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-lumi: ``>=2.46.0,<2.47.0``
   :depends curl: ``>=7.80.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumiratidmapping

   and update with::

      conda update bioconductor-lumiratidmapping

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumiratidmapping:<tag>

   (see `bioconductor-lumiratidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumiratidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumiratidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumiratidmapping
   :alt:   (downloads)
.. |docker_bioconductor-lumiratidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumiratidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumiratidmapping
.. _`bioconductor-lumiratidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-lumiratidmapping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumiratidmapping";
        var versions = ["1.10.0","1.10.0","1.10.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumiratidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumiratidmapping/README.html
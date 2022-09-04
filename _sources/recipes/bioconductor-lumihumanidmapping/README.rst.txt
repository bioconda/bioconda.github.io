:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumihumanidmapping'
.. highlight: bash

bioconductor-lumihumanidmapping
===============================

.. conda:recipe:: bioconductor-lumihumanidmapping
   :replaces_section_title:
   :noindex:

   Illumina Identifier mapping for Human

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/lumiHumanIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumihumanidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanidmapping/meta.yaml>`_

   This package includes mappings information between different types of Illumina IDs of Illumina Human chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Human chips to RefSeq IDs with mapping qualities information.


.. conda:package:: bioconductor-lumihumanidmapping

   |downloads_bioconductor-lumihumanidmapping| |docker_bioconductor-lumihumanidmapping|

   :versions:
      
      

      ``1.10.1-9``,  ``1.10.1-8``,  ``1.10.1-7``,  ``1.10.1-6``,  ``1.10.1-5``,  ``1.10.1-4``,  ``1.10.1-3``,  ``1.10.1-2``,  ``1.10.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-lumi: ``>=2.46.0,<2.47.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumihumanidmapping

   and update with::

      conda update bioconductor-lumihumanidmapping

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumihumanidmapping:<tag>

   (see `bioconductor-lumihumanidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumihumanidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumihumanidmapping.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumihumanidmapping
   :alt:   (downloads)
.. |docker_bioconductor-lumihumanidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping
.. _`bioconductor-lumihumanidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumihumanidmapping";
        var versions = ["1.10.1","1.10.1","1.10.1","1.10.1","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumihumanidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumihumanidmapping/README.html
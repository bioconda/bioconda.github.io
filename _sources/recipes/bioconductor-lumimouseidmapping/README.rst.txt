:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumimouseidmapping'
.. highlight: bash

bioconductor-lumimouseidmapping
===============================

.. conda:recipe:: bioconductor-lumimouseidmapping
   :replaces_section_title:

   This package includes mappings information between different types of Illumina IDs of Illumina Mouse chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Mouse chips to RefSeq IDs with mapping qualities information.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/lumiMouseIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumimouseidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseidmapping/meta.yaml>`_

   


.. conda:package:: bioconductor-lumimouseidmapping

   |downloads_bioconductor-lumimouseidmapping| |docker_bioconductor-lumimouseidmapping|

   :versions: 1.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-lumi: >=2.34.0,<2.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumimouseidmapping

   and update with::

      conda update bioconductor-lumimouseidmapping

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lumimouseidmapping:<tag>

   (see `bioconductor-lumimouseidmapping/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumimouseidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumimouseidmapping.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumimouseidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumimouseidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumimouseidmapping
.. _`bioconductor-lumimouseidmapping/tags`: https://quay.io/repository/biocontainers/bioconductor-lumimouseidmapping?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumimouseidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumimouseidmapping/README.html
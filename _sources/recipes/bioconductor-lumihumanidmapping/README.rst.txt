.. title:: Package Recipe 'bioconductor-lumihumanidmapping'
.. highlight: bash


bioconductor-lumihumanidmapping
===============================

.. conda:recipe:: bioconductor-lumihumanidmapping
   :replaces_section_title:

   This package includes mappings information between different types of Illumina IDs of Illumina Human chips and nuIDs. It also includes mappings of all nuIDs included in Illumina Human chips to RefSeq IDs with mapping qualities information.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/lumiHumanIDMapping.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-lumihumanidmapping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanidmapping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanidmapping/meta.yaml>`_

   


.. conda:package:: bioconductor-lumihumanidmapping

   |downloads_bioconductor-lumihumanidmapping| |docker_bioconductor-lumihumanidmapping|

   :versions: 1.10.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-lumihumanidmapping|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumihumanidmapping

   and update with::

      conda update bioconductor-lumihumanidmapping

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lumihumanidmapping


.. |required_by_bioconductor-lumihumanidmapping| conda:required_by:: bioconductor-lumihumanidmapping
.. |downloads_bioconductor-lumihumanidmapping| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumihumanidmapping.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumihumanidmapping| image:: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumihumanidmapping







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumihumanidmapping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumihumanidmapping/README.html


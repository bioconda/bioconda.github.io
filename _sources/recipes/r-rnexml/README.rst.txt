:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rnexml'
.. highlight: bash

r-rnexml
========

.. conda:recipe:: r-rnexml
   :replaces_section_title:

   Provides access to phyloinformatic data in \'NeXML\' format.  The package should add new functionality to R such as the possibility to manipulate \'NeXML\' objects in more various and refined way and compatibility with \'ape\' objects.

   :homepage: https://github.com/ropensci/RNeXML
   :license: BSD / BSD_3_clause
   :recipe: /`r-rnexml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rnexml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rnexml/meta.yaml>`_

   


.. conda:package:: r-rnexml

   |downloads_r-rnexml| |docker_r-rnexml|

   :versions: 2.2.0-1, 2.2.0-0, 2.1.2-0, 2.1.1-0
   
   :depends r-ape: >=3.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dplyr: >=0.5.0
   
   :depends r-httr: >=0.3
   
   :depends r-lazyeval: >=0.1.0
   
   :depends r-plyr: >=1.8
   
   :depends r-reshape2: >=1.2.2
   
   :depends r-stringr: >=1.0
   
   :depends r-tidyr: >=0.3.1
   
   :depends r-uuid: >=0.1_1
   
   :depends r-xml: >=3.95
   
   :depends r-xml2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rnexml

   and update with::

      conda update r-rnexml

   or use the docker container::

      docker pull quay.io/biocontainers/r-rnexml:<tag>

   (see `r-rnexml/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rnexml| image:: https://img.shields.io/conda/dn/bioconda/r-rnexml.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rnexml| image:: https://quay.io/repository/biocontainers/r-rnexml/status
   :target: https://quay.io/repository/biocontainers/r-rnexml
.. _`r-rnexml/tags`: https://quay.io/repository/biocontainers/r-rnexml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rnexml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rnexml/README.html
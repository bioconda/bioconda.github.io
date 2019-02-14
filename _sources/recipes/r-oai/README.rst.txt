:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-oai'
.. highlight: bash

r-oai
=====

.. conda:recipe:: r-oai
   :replaces_section_title:

   A general purpose client to work with any \'OAI\-PMH\' \(Open Archives Initiative Protocol for \'Metadata\' Harvesting\) service. The \'OAI\-PMH\' protocol is described at \<http\:\/\/www.openarchives.org\/OAI\/openarchivesprotocol.html\>. Functions are provided to work with the \'OAI\-PMH\' verbs\: \'GetRecord\'\, \'Identify\'\, \'ListIdentifiers\'\, \'ListMetadataFormats\'\, \'ListRecords\'\, and \'ListSets\'.

   :homepage: https://github.com/ropensci/oai
   :license: MIT / MIT
   :recipe: /`r-oai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oai/meta.yaml>`_

   


.. conda:package:: r-oai

   |downloads_r-oai| |docker_r-oai|

   :versions: 0.2.2-3, 0.2.2-2, 0.2.2-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-httr: >=1.2.0
   
   :depends r-plyr: >=1.8.4
   
   :depends r-stringr: >=1.1.0
   
   :depends r-tibble: >=1.2
   
   :depends r-xml2: >=1.0.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-oai

   and update with::

      conda update r-oai

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-oai:<tag>

   (see `r-oai/tags`_ for valid values for ``<tag>``)


.. |downloads_r-oai| image:: https://img.shields.io/conda/dn/bioconda/r-oai.svg?style=flat
   :alt:   (downloads)
.. |docker_r-oai| image:: https://quay.io/repository/biocontainers/r-oai/status
   :target: https://quay.io/repository/biocontainers/r-oai
.. _`r-oai/tags`: https://quay.io/repository/biocontainers/r-oai?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-oai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-oai/README.html
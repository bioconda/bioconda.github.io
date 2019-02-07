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

   :versions: 0.2.2

   :depends: :conda:package:`libgcc`  :conda:package:`r-base` 3.4.1* :conda:package:`r-httr` >=1.2.0 :conda:package:`r-plyr` >=1.8.4 :conda:package:`r-stringr` >=1.1.0 :conda:package:`r-tibble` >=1.2 :conda:package:`r-xml2` >=1.0.0 

   :required~by: |required_by_r-oai|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-oai

   and update with::

      conda update r-oai

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-oai


.. |required_by_r-oai| conda:required_by:: r-oai
.. |downloads_r-oai| image:: https://img.shields.io/conda/dn/bioconda/r-oai.svg?style=flat
   :alt:   (downloads)
.. |docker_r-oai| image:: https://quay.io/repository/biocontainers/r-oai/status
   :target: https://quay.io/repository/biocontainers/r-oai







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-oai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-oai/README.html


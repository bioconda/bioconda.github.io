.. title:: Package Recipe 'entrez-direct'
.. highlight: bash


entrez-direct
=============

.. conda:recipe:: entrez-direct
   :replaces_section_title:

   Entrez Direct \(EDirect\) is an advanced method for accessing the NCBI\'s set of interconnected databases \(publication\, sequence\, structure\, gene\, variation\, expression\, etc.\) from a UNIX terminal window. Functions take search terms from command\-line arguments. Individual operations are combined to build multi\-step queries. Record retrieval and formatting normally complete the process.

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/entrez/entrezdirect/versions/10.2.20181018/README
   :license: PUBLIC DOMAIN
   :recipe: /`entrez-direct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrez-direct/meta.yaml>`_

   


.. conda:package:: entrez-direct

   |downloads_entrez-direct| |docker_entrez-direct|

   :versions: 10.2, 10.0, 7.70, 7.00, 5.80, 4.00

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-html-parser`  :conda:package:`perl-html-tagset`  :conda:package:`perl-html-tree`  :conda:package:`perl-http-cookies`  :conda:package:`perl-http-date`  :conda:package:`perl-http-message`  :conda:package:`perl-http-negotiate`  :conda:package:`perl-io-socket-ssl`  :conda:package:`perl-lwp-mediatypes`  :conda:package:`perl-lwp-protocol-https`  :conda:package:`perl-mozilla-ca`  :conda:package:`perl-net-http`  :conda:package:`perl-uri`  :conda:package:`perl-www-robotrules`  :conda:package:`perl-xml-simple`  

   :required~by: |required_by_entrez-direct|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install entrez-direct

   and update with::

      conda update entrez-direct

   or use the docker container::

      docker pull quay.io/repository/biocontainers/entrez-direct


.. |required_by_entrez-direct| conda:required_by:: entrez-direct
.. |downloads_entrez-direct| image:: https://img.shields.io/conda/dn/bioconda/entrez-direct.svg?style=flat
   :alt:   (downloads)
.. |docker_entrez-direct| image:: https://quay.io/repository/biocontainers/entrez-direct/status
   :target: https://quay.io/repository/biocontainers/entrez-direct







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/entrez-direct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/entrez-direct/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-eutilities'
.. highlight: bash

perl-bio-eutilities
===================

.. conda:recipe:: perl-bio-eutilities
   :replaces_section_title:

   Webagent which interacts with and retrieves data from NCBI eUtils.

   :homepage: https://metacpan.org/release/Bio-EUtilities
   :license: perl_5
   :recipe: /`perl-bio-eutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-eutilities>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-eutilities/meta.yaml>`_

   


.. conda:package:: perl-bio-eutilities

   |downloads_perl-bio-eutilities| |docker_perl-bio-eutilities|

   :versions: 1.75-2, 1.75-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-bio-asn1-entrezgene: 
   
   :depends perl-bioperl: 
   
   :depends perl-capture-tiny: 
   
   :depends perl-class-data-inheritable: 
   
   :depends perl-data-stag: 
   
   :depends perl-devel-stacktrace: 
   
   :depends perl-exception-class: 
   
   :depends perl-sub-uplevel: 
   
   :depends perl-test-deep: 
   
   :depends perl-test-differences: 
   
   :depends perl-test-exception: 
   
   :depends perl-test-most: 
   
   :depends perl-test-simple: 
   
   :depends perl-test-warn: 
   
   :depends perl-text-csv: 
   
   :depends perl-text-diff: 
   
   :depends perl-xml-namespacesupport: 
   
   :depends perl-xml-sax: 
   
   :depends perl-xml-sax-base: 
   
   :depends perl-xml-sax-expat: 
   
   :depends perl-xml-simple: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-eutilities

   and update with::

      conda update perl-bio-eutilities

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-eutilities:<tag>

   (see `perl-bio-eutilities/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-eutilities| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-eutilities.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-eutilities| image:: https://quay.io/repository/biocontainers/perl-bio-eutilities/status
   :target: https://quay.io/repository/biocontainers/perl-bio-eutilities
.. _`perl-bio-eutilities/tags`: https://quay.io/repository/biocontainers/perl-bio-eutilities?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-eutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-eutilities/README.html
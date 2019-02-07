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

   :versions: 1.75

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-bio-asn1-entrezgene`  :conda:package:`perl-bioperl` ==1.6.924 :conda:package:`perl-capture-tiny`  :conda:package:`perl-class-data-inheritable`  :conda:package:`perl-data-stag`  :conda:package:`perl-devel-stacktrace`  :conda:package:`perl-exception-class`  :conda:package:`perl-sub-uplevel`  :conda:package:`perl-test-deep`  :conda:package:`perl-test-differences`  :conda:package:`perl-test-exception`  :conda:package:`perl-test-most`  :conda:package:`perl-test-simple`  :conda:package:`perl-test-warn`  :conda:package:`perl-text-csv`  :conda:package:`perl-text-diff`  :conda:package:`perl-xml-namespacesupport`  :conda:package:`perl-xml-sax`  :conda:package:`perl-xml-sax-base`  :conda:package:`perl-xml-sax-expat`  :conda:package:`perl-xml-simple`  

   :required~by: |required_by_perl-bio-eutilities|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-eutilities

   and update with::

      conda update perl-bio-eutilities

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-eutilities


.. |required_by_perl-bio-eutilities| conda:required_by:: perl-bio-eutilities
.. |downloads_perl-bio-eutilities| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-eutilities.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-eutilities| image:: https://quay.io/repository/biocontainers/perl-bio-eutilities/status
   :target: https://quay.io/repository/biocontainers/perl-bio-eutilities







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-eutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-eutilities/README.html


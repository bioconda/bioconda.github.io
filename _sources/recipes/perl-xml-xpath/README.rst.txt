.. title:: Package Recipe 'perl-xml-xpath'
.. highlight: bash


perl-xml-xpath
==============

.. conda:recipe:: perl-xml-xpath
   :replaces_section_title:

   Parse and evaluate XPath statements.

   :homepage: http://metacpan.org/pod/XML-XPath
   :license: artistic_2
   :recipe: /`perl-xml-xpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-xpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-xpath/meta.yaml>`_

   


.. conda:package:: perl-xml-xpath

   |downloads_perl-xml-xpath| |docker_perl-xml-xpath|

   :versions: 1.44, 1.33

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-xml-parser`  

   :required~by: |required_by_perl-xml-xpath|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-xml-xpath

   and update with::

      conda update perl-xml-xpath

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-xml-xpath


.. |required_by_perl-xml-xpath| conda:required_by:: perl-xml-xpath
.. |downloads_perl-xml-xpath| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-xpath.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-xml-xpath| image:: https://quay.io/repository/biocontainers/perl-xml-xpath/status
   :target: https://quay.io/repository/biocontainers/perl-xml-xpath







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-xpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-xpath/README.html


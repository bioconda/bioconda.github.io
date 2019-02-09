.. title:: Package Recipe 'perl-json-xs'
.. highlight: bash


perl-json-xs
============

.. conda:recipe:: perl-json-xs
   :replaces_section_title:

   JSON serialising\/deserialising\, done correctly and fast

   :homepage: http://metacpan.org/pod/JSON::XS
   :license: unknown
   :recipe: /`perl-json-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json-xs/meta.yaml>`_

   


.. conda:package:: perl-json-xs

   |downloads_perl-json-xs| |docker_perl-json-xs|

   :versions: 4.0, 3.04, 2.34

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-common-sense`  :conda:package:`perl-types-serialiser`  

   :required~by: |required_by_perl-json-xs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-json-xs

   and update with::

      conda update perl-json-xs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-json-xs


.. |required_by_perl-json-xs| conda:required_by:: perl-json-xs
.. |downloads_perl-json-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-json-xs.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-json-xs| image:: https://quay.io/repository/biocontainers/perl-json-xs/status
   :target: https://quay.io/repository/biocontainers/perl-json-xs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json-xs/README.html


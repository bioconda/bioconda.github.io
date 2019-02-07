.. title:: Package Recipe 'perl-test-object'
.. highlight: bash


perl-test-object
================

.. conda:recipe:: perl-test-object/0.08
   :replaces_section_title:

   Thoroughly testing objects via registered handlers

   :homepage: https://github.com/karenetheridge/Test-Object
   :license: perl_5
   :recipe: /`perl-test-object <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object>`_/`0.08 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08/meta.yaml>`_

   


.. conda:package:: perl-test-object

   |downloads_perl-test-object| |docker_perl-test-object|

   :versions: 0.08

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-test-more`  

   :required~by: |required_by_perl-test-object|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-object

   and update with::

      conda update perl-test-object

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-object


.. |required_by_perl-test-object| conda:required_by:: perl-test-object
.. |downloads_perl-test-object| image:: https://img.shields.io/conda/dn/bioconda/perl-test-object.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-object| image:: https://quay.io/repository/biocontainers/perl-test-object/status
   :target: https://quay.io/repository/biocontainers/perl-test-object







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-object/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-object/README.html


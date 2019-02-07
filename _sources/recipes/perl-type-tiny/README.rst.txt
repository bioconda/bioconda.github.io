.. title:: Package Recipe 'perl-type-tiny'
.. highlight: bash


perl-type-tiny
==============

.. conda:recipe:: perl-type-tiny
   :replaces_section_title:

   tiny\, yet Moo\(se\)\-compatible type constraint

   :homepage: https://metacpan.org/release/Type-Tiny
   :license: perl_5
   :recipe: /`perl-type-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-type-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-type-tiny/meta.yaml>`_

   


.. conda:package:: perl-type-tiny

   |downloads_perl-type-tiny| |docker_perl-type-tiny|

   :versions: 1.004004, 1.004003, 1.004002, 1.002002, 1.000005

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-exporter-tiny` >=0.040 

   :required~by: |required_by_perl-type-tiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-type-tiny

   and update with::

      conda update perl-type-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-type-tiny


.. |required_by_perl-type-tiny| conda:required_by:: perl-type-tiny
.. |downloads_perl-type-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-type-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-type-tiny| image:: https://quay.io/repository/biocontainers/perl-type-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-type-tiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-type-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-type-tiny/README.html


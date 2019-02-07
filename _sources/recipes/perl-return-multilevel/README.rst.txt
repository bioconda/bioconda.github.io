.. title:: Package Recipe 'perl-return-multilevel'
.. highlight: bash


perl-return-multilevel
======================

.. conda:recipe:: perl-return-multilevel
   :replaces_section_title:

   return across multiple call levels

   :homepage: http://metacpan.org/pod/Return::MultiLevel
   :license: perl_5
   :recipe: /`perl-return-multilevel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-return-multilevel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-return-multilevel/meta.yaml>`_

   


.. conda:package:: perl-return-multilevel

   |downloads_perl-return-multilevel| |docker_perl-return-multilevel|

   :versions: 0.05

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-data-munge`  :conda:package:`perl-exporter`  :conda:package:`perl-parent`  

   :required~by: |required_by_perl-return-multilevel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-return-multilevel

   and update with::

      conda update perl-return-multilevel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-return-multilevel


.. |required_by_perl-return-multilevel| conda:required_by:: perl-return-multilevel
.. |downloads_perl-return-multilevel| image:: https://img.shields.io/conda/dn/bioconda/perl-return-multilevel.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-return-multilevel| image:: https://quay.io/repository/biocontainers/perl-return-multilevel/status
   :target: https://quay.io/repository/biocontainers/perl-return-multilevel







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-return-multilevel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-return-multilevel/README.html


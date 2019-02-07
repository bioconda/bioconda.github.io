.. title:: Package Recipe 'perl-devel-globaldestruction'
.. highlight: bash


perl-devel-globaldestruction
============================

.. conda:recipe:: perl-devel-globaldestruction
   :replaces_section_title:

   Provides function returning the equivalent of \$\{\^GLOBAL\_PHASE\} eq \'DESTRUCT\' for older perls.

   :homepage: https://metacpan.org/release/Devel-GlobalDestruction
   :license: perl_5
   :recipe: /`perl-devel-globaldestruction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-globaldestruction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-globaldestruction/meta.yaml>`_

   


.. conda:package:: perl-devel-globaldestruction

   |downloads_perl-devel-globaldestruction| |docker_perl-devel-globaldestruction|

   :versions: 0.14, 0.13

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-sub-exporter-progressive`  

   :required~by: |required_by_perl-devel-globaldestruction|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-globaldestruction

   and update with::

      conda update perl-devel-globaldestruction

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-devel-globaldestruction


.. |required_by_perl-devel-globaldestruction| conda:required_by:: perl-devel-globaldestruction
.. |downloads_perl-devel-globaldestruction| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-globaldestruction.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-devel-globaldestruction| image:: https://quay.io/repository/biocontainers/perl-devel-globaldestruction/status
   :target: https://quay.io/repository/biocontainers/perl-devel-globaldestruction







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-globaldestruction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-globaldestruction/README.html


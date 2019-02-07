.. title:: Package Recipe 'perl-super'
.. highlight: bash


perl-super
==========

.. conda:recipe:: perl-super
   :replaces_section_title:

   control superclass method dispatch

   :homepage: http://metacpan.org/pod/SUPER
   :license: perl_5
   :recipe: /`perl-super <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super/meta.yaml>`_

   


.. conda:package:: perl-super

   |downloads_perl-super| |docker_perl-super|

   :versions: 1.20141117

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-sub-identify`  

   :required~by: |required_by_perl-super|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-super

   and update with::

      conda update perl-super

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-super


.. |required_by_perl-super| conda:required_by:: perl-super
.. |downloads_perl-super| image:: https://img.shields.io/conda/dn/bioconda/perl-super.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-super| image:: https://quay.io/repository/biocontainers/perl-super/status
   :target: https://quay.io/repository/biocontainers/perl-super







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-super/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-super/README.html


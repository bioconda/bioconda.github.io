.. title:: Package Recipe 'perl-config-general'
.. highlight: bash


perl-config-general
===================

.. conda:recipe:: perl-config-general
   :replaces_section_title:

   Generic Config Module

   :homepage: http://metacpan.org/pod/Config-General
   :license: perl_5
   :recipe: /`perl-config-general <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-general>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-general/meta.yaml>`_

   


.. conda:package:: perl-config-general

   |downloads_perl-config-general| |docker_perl-config-general|

   :versions: 2.63, 2.61

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-pathtools`  

   :required~by: |required_by_perl-config-general|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-config-general

   and update with::

      conda update perl-config-general

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-config-general


.. |required_by_perl-config-general| conda:required_by:: perl-config-general
.. |downloads_perl-config-general| image:: https://img.shields.io/conda/dn/bioconda/perl-config-general.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-config-general| image:: https://quay.io/repository/biocontainers/perl-config-general/status
   :target: https://quay.io/repository/biocontainers/perl-config-general







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-general/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-general/README.html


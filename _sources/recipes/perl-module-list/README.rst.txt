.. title:: Package Recipe 'perl-module-list'
.. highlight: bash


perl-module-list
================

.. conda:recipe:: perl-module-list
   :replaces_section_title:

   module \`directory\' listing

   :homepage: http://metacpan.org/pod/Module::List
   :license: perl_5
   :recipe: /`perl-module-list <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-list>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-list/meta.yaml>`_

   


.. conda:package:: perl-module-list

   |downloads_perl-module-list| |docker_perl-module-list|

   :versions: 0.004

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-exporter`  :conda:package:`perl-parent`  

   :required~by: |required_by_perl-module-list|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-list

   and update with::

      conda update perl-module-list

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-list


.. |required_by_perl-module-list| conda:required_by:: perl-module-list
.. |downloads_perl-module-list| image:: https://img.shields.io/conda/dn/bioconda/perl-module-list.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-list| image:: https://quay.io/repository/biocontainers/perl-module-list/status
   :target: https://quay.io/repository/biocontainers/perl-module-list







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-list/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-list/README.html


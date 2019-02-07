.. title:: Package Recipe 'perl-module-corelist'
.. highlight: bash


perl-module-corelist
====================

.. conda:recipe:: perl-module-corelist
   :replaces_section_title:

   what modules shipped with versions of perl

   :homepage: http://dev.perl.org/
   :license: perl_5
   :recipe: /`perl-module-corelist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-corelist/meta.yaml>`_

   


.. conda:package:: perl-module-corelist

   |downloads_perl-module-corelist| |docker_perl-module-corelist|

   :versions: 5.20181218, 5.20181130, 5.20180820, 5.20180626, 5.20180120

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-version`  

   :required~by: |required_by_perl-module-corelist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-corelist

   and update with::

      conda update perl-module-corelist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-corelist


.. |required_by_perl-module-corelist| conda:required_by:: perl-module-corelist
.. |downloads_perl-module-corelist| image:: https://img.shields.io/conda/dn/bioconda/perl-module-corelist.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-corelist| image:: https://quay.io/repository/biocontainers/perl-module-corelist/status
   :target: https://quay.io/repository/biocontainers/perl-module-corelist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-corelist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-corelist/README.html


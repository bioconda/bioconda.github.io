.. title:: Package Recipe 'perl-module-load-conditional'
.. highlight: bash


perl-module-load-conditional
============================

.. conda:recipe:: perl-module-load-conditional/0.62
   :replaces_section_title:

   Looking up module information \/ loading at runtime

   :homepage: http://metacpan.org/pod/Module::Load::Conditional
   :license: perl_5
   :recipe: /`perl-module-load-conditional <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional>`_/`0.62 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional/0.62>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional/0.62/meta.yaml>`_

   


.. conda:package:: perl-module-load-conditional

   |downloads_perl-module-load-conditional| |docker_perl-module-load-conditional|

   :versions: 0.68, 0.62

   :depends: :conda:package:`perl` >=5.22,<6.0 :conda:package:`perl-locale-maketext-simple`  :conda:package:`perl-module-corelist`  :conda:package:`perl-module-load`  :conda:package:`perl-module-metadata` >=1.000005 :conda:package:`perl-params-check`  

   :required~by: |required_by_perl-module-load-conditional|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-load-conditional

   and update with::

      conda update perl-module-load-conditional

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-load-conditional


.. |required_by_perl-module-load-conditional| conda:required_by:: perl-module-load-conditional
.. |downloads_perl-module-load-conditional| image:: https://img.shields.io/conda/dn/bioconda/perl-module-load-conditional.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-load-conditional| image:: https://quay.io/repository/biocontainers/perl-module-load-conditional/status
   :target: https://quay.io/repository/biocontainers/perl-module-load-conditional







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-load-conditional/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-load-conditional/README.html


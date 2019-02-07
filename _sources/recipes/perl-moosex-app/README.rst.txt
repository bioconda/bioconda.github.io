.. title:: Package Recipe 'perl-moosex-app'
.. highlight: bash


perl-moosex-app
===============

.. conda:recipe:: perl-moosex-app
   :replaces_section_title:

   Write user\-friendly command line apps with even less suffering

   :homepage: http://metacpan.org/pod/MooseX::App
   :license: perl_5
   :recipe: /`perl-moosex-app <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app/meta.yaml>`_

   


.. conda:package:: perl-moosex-app

   |downloads_perl-moosex-app| |docker_perl-moosex-app|

   :versions: 1.3701, 1.39, 1.35

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-config-any`  :conda:package:`perl-file-homedir`  :conda:package:`perl-io-interactive`  :conda:package:`perl-moose`  :conda:package:`perl-moosex-types-path-class`  :conda:package:`perl-path-class`  :conda:package:`perl-pod-elemental`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-termreadkey`  

   :required~by: |required_by_perl-moosex-app|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-app

   and update with::

      conda update perl-moosex-app

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moosex-app


.. |required_by_perl-moosex-app| conda:required_by:: perl-moosex-app
.. |downloads_perl-moosex-app| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-app.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-app| image:: https://quay.io/repository/biocontainers/perl-moosex-app/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-app







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-app/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-app/README.html


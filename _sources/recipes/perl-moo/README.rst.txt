.. title:: Package Recipe 'perl-moo'
.. highlight: bash


perl-moo
========

.. conda:recipe:: perl-moo
   :replaces_section_title:

   Minimalist Object Orientation \(with Moose compatibility\)

   :homepage: http://metacpan.org/pod/Moo
   :license: perl_5
   :recipe: /`perl-moo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moo/meta.yaml>`_

   


.. conda:package:: perl-moo

   |downloads_perl-moo| |docker_perl-moo|

   :versions: 2.003004, 2.001000, 2.000002

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-class-method-modifiers`  :conda:package:`perl-devel-globaldestruction`  :conda:package:`perl-exporter`  :conda:package:`perl-module-runtime`  :conda:package:`perl-moose`  :conda:package:`perl-role-tiny`  :conda:package:`perl-sub-quote`  

   :required~by: |required_by_perl-moo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moo

   and update with::

      conda update perl-moo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moo


.. |required_by_perl-moo| conda:required_by:: perl-moo
.. |downloads_perl-moo| image:: https://img.shields.io/conda/dn/bioconda/perl-moo.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moo| image:: https://quay.io/repository/biocontainers/perl-moo/status
   :target: https://quay.io/repository/biocontainers/perl-moo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moo/README.html


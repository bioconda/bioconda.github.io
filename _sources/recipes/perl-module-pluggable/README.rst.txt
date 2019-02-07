.. title:: Package Recipe 'perl-module-pluggable'
.. highlight: bash


perl-module-pluggable
=====================

.. conda:recipe:: perl-module-pluggable
   :replaces_section_title:

   automatically give your module the ability to have plugins

   :homepage: http://metacpan.org/pod/Module::Pluggable
   :license: perl_5
   :recipe: /`perl-module-pluggable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-pluggable>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-pluggable/meta.yaml>`_

   


.. conda:package:: perl-module-pluggable

   |downloads_perl-module-pluggable| |docker_perl-module-pluggable|

   :versions: 5.2

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-exporter`  

   :required~by: |required_by_perl-module-pluggable|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-pluggable

   and update with::

      conda update perl-module-pluggable

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-pluggable


.. |required_by_perl-module-pluggable| conda:required_by:: perl-module-pluggable
.. |downloads_perl-module-pluggable| image:: https://img.shields.io/conda/dn/bioconda/perl-module-pluggable.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-pluggable| image:: https://quay.io/repository/biocontainers/perl-module-pluggable/status
   :target: https://quay.io/repository/biocontainers/perl-module-pluggable







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-pluggable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-pluggable/README.html


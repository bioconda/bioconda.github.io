.. title:: Package Recipe 'perl-module-load'
.. highlight: bash


perl-module-load
================

.. conda:recipe:: perl-module-load/0.32
   :replaces_section_title:

   Load modules in a DWIM style

   :homepage: http://metacpan.org/pod/Module::Load
   :license: perl_5
   :recipe: /`perl-module-load <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load>`_/`0.32 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load/0.32>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load/0.32/meta.yaml>`_

   


.. conda:package:: perl-module-load

   |downloads_perl-module-load| |docker_perl-module-load|

   :versions: 0.32

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-module-load|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-load

   and update with::

      conda update perl-module-load

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-load


.. |required_by_perl-module-load| conda:required_by:: perl-module-load
.. |downloads_perl-module-load| image:: https://img.shields.io/conda/dn/bioconda/perl-module-load.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-load| image:: https://quay.io/repository/biocontainers/perl-module-load/status
   :target: https://quay.io/repository/biocontainers/perl-module-load







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-load/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-load/README.html


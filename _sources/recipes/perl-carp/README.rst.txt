.. title:: Package Recipe 'perl-carp'
.. highlight: bash


perl-carp
=========

.. conda:recipe:: perl-carp/1.38
   :replaces_section_title:

   alternative warn and die for modules

   :homepage: http://metacpan.org/pod/Carp
   :license: perl_5
   :recipe: /`perl-carp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp>`_/`1.38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp/1.38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp/1.38/meta.yaml>`_

   


.. conda:package:: perl-carp

   |downloads_perl-carp| |docker_perl-carp|

   :versions: 1.38

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-exporter`  :conda:package:`perl-extutils-makemaker`  

   :required~by: |required_by_perl-carp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-carp

   and update with::

      conda update perl-carp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-carp


.. |required_by_perl-carp| conda:required_by:: perl-carp
.. |downloads_perl-carp| image:: https://img.shields.io/conda/dn/bioconda/perl-carp.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-carp| image:: https://quay.io/repository/biocontainers/perl-carp/status
   :target: https://quay.io/repository/biocontainers/perl-carp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-carp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-carp/README.html


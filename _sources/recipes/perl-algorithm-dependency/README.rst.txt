.. title:: Package Recipe 'perl-algorithm-dependency'
.. highlight: bash


perl-algorithm-dependency
=========================

.. conda:recipe:: perl-algorithm-dependency
   :replaces_section_title:

   Base class for implementing various dependency trees

   :homepage: http://metacpan.org/pod/Algorithm::Dependency
   :license: perl_5
   :recipe: /`perl-algorithm-dependency <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-dependency>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-dependency/meta.yaml>`_

   


.. conda:package:: perl-algorithm-dependency

   |downloads_perl-algorithm-dependency| |docker_perl-algorithm-dependency|

   :versions: 1.111, 1.110

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-params-util`  

   :required~by: |required_by_perl-algorithm-dependency|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-algorithm-dependency

   and update with::

      conda update perl-algorithm-dependency

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-algorithm-dependency


.. |required_by_perl-algorithm-dependency| conda:required_by:: perl-algorithm-dependency
.. |downloads_perl-algorithm-dependency| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-dependency.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-algorithm-dependency| image:: https://quay.io/repository/biocontainers/perl-algorithm-dependency/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-dependency







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-dependency/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-dependency/README.html


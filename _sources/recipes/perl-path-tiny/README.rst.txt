.. title:: Package Recipe 'perl-path-tiny'
.. highlight: bash


perl-path-tiny
==============

.. conda:recipe:: perl-path-tiny
   :replaces_section_title:

   File path utility

   :homepage: https://github.com/dagolden/Path-Tiny
   :license: apache_2_0
   :recipe: /`perl-path-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-tiny/meta.yaml>`_

   


.. conda:package:: perl-path-tiny

   |downloads_perl-path-tiny| |docker_perl-path-tiny|

   :versions: 0.108, 0.082, 0.076

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-path-tiny|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-path-tiny

   and update with::

      conda update perl-path-tiny

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-path-tiny


.. |required_by_perl-path-tiny| conda:required_by:: perl-path-tiny
.. |downloads_perl-path-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-path-tiny.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-path-tiny| image:: https://quay.io/repository/biocontainers/perl-path-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-path-tiny







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-path-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-path-tiny/README.html


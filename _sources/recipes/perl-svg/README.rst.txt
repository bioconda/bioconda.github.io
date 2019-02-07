.. title:: Package Recipe 'perl-svg'
.. highlight: bash


perl-svg
========

.. conda:recipe:: perl-svg
   :replaces_section_title:

   Perl extension for generating Scalable Vector Graphics \(SVG\) documents

   :homepage: http://metacpan.org/pod/SVG
   :license: perl_5
   :recipe: /`perl-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-svg/meta.yaml>`_

   


.. conda:package:: perl-svg

   |downloads_perl-svg| |docker_perl-svg|

   :versions: 2.84, 2.64

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-svg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-svg

   and update with::

      conda update perl-svg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-svg


.. |required_by_perl-svg| conda:required_by:: perl-svg
.. |downloads_perl-svg| image:: https://img.shields.io/conda/dn/bioconda/perl-svg.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-svg| image:: https://quay.io/repository/biocontainers/perl-svg/status
   :target: https://quay.io/repository/biocontainers/perl-svg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-svg/README.html


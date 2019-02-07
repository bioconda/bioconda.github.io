.. title:: Package Recipe 'perl-bio-coordinate'
.. highlight: bash


perl-bio-coordinate
===================

.. conda:recipe:: perl-bio-coordinate
   :replaces_section_title:

   Methods for dealing with genomic coordinates.

   :homepage: https://metacpan.org/release/Bio-Coordinate
   :license: perl_5
   :recipe: /`perl-bio-coordinate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-coordinate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-coordinate/meta.yaml>`_

   


.. conda:package:: perl-bio-coordinate

   |downloads_perl-bio-coordinate| |docker_perl-bio-coordinate|

   :versions: 1.007001

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bioperl-core`  :conda:package:`perl-parent`  :conda:package:`perl-test-most`  

   :required~by: |required_by_perl-bio-coordinate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-coordinate

   and update with::

      conda update perl-bio-coordinate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-coordinate


.. |required_by_perl-bio-coordinate| conda:required_by:: perl-bio-coordinate
.. |downloads_perl-bio-coordinate| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-coordinate.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-coordinate| image:: https://quay.io/repository/biocontainers/perl-bio-coordinate/status
   :target: https://quay.io/repository/biocontainers/perl-bio-coordinate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-coordinate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-coordinate/README.html


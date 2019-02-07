.. title:: Package Recipe 'perl-snap'
.. highlight: bash


perl-snap
=========

.. conda:recipe:: perl-snap
   :replaces_section_title:

   SNAP calculates pairwise synonymous and nonsynonymous distances according to the Nei and Gojobori method for an alignment in table format.

   :homepage: https://www.hiv.lanl.gov/content/sequence/SNAP/SNAP.html
   :license: Custom OSS
   :recipe: /`perl-snap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-snap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-snap/meta.yaml>`_

   


.. conda:package:: perl-snap

   |downloads_perl-snap| |docker_perl-snap|

   :versions: 2.1.1

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-snap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-snap

   and update with::

      conda update perl-snap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-snap


.. |required_by_perl-snap| conda:required_by:: perl-snap
.. |downloads_perl-snap| image:: https://img.shields.io/conda/dn/bioconda/perl-snap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-snap| image:: https://quay.io/repository/biocontainers/perl-snap/status
   :target: https://quay.io/repository/biocontainers/perl-snap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-snap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-snap/README.html


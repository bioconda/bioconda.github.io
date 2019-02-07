.. title:: Package Recipe 'perl-parent'
.. highlight: bash


perl-parent
===========

.. conda:recipe:: perl-parent/0.236
   :replaces_section_title:

   Establish an ISA relationship with base classes at compile time

   :homepage: http://metacpan.org/pod/parent
   :license: perl_5
   :recipe: /`perl-parent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parent>`_/`0.236 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parent/0.236>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parent/0.236/meta.yaml>`_

   


.. conda:package:: perl-parent

   |downloads_perl-parent| |docker_perl-parent|

   :versions: 0.236

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-parent|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-parent

   and update with::

      conda update perl-parent

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-parent


.. |required_by_perl-parent| conda:required_by:: perl-parent
.. |downloads_perl-parent| image:: https://img.shields.io/conda/dn/bioconda/perl-parent.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-parent| image:: https://quay.io/repository/biocontainers/perl-parent/status
   :target: https://quay.io/repository/biocontainers/perl-parent







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parent/README.html


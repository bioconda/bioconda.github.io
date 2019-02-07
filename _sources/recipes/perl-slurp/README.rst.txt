.. title:: Package Recipe 'perl-slurp'
.. highlight: bash


perl-slurp
==========

.. conda:recipe:: perl-slurp
   :replaces_section_title:

   Slurp entire files into variables

   :homepage: http://metacpan.org/pod/Slurp
   :license: unknown
   :recipe: /`perl-slurp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-slurp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-slurp/meta.yaml>`_

   


.. conda:package:: perl-slurp

   |downloads_perl-slurp| |docker_perl-slurp|

   :versions: 0.4

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-slurp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-slurp

   and update with::

      conda update perl-slurp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-slurp


.. |required_by_perl-slurp| conda:required_by:: perl-slurp
.. |downloads_perl-slurp| image:: https://img.shields.io/conda/dn/bioconda/perl-slurp.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-slurp| image:: https://quay.io/repository/biocontainers/perl-slurp/status
   :target: https://quay.io/repository/biocontainers/perl-slurp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-slurp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-slurp/README.html


.. title:: Package Recipe 'perl-io-interactive'
.. highlight: bash


perl-io-interactive
===================

.. conda:recipe:: perl-io-interactive
   :replaces_section_title:

   Utilities for interactive I\/O

   :homepage: https://github.com/briandfoy/io-interactive
   :license: perl_5
   :recipe: /`perl-io-interactive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-interactive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-interactive/meta.yaml>`_

   


.. conda:package:: perl-io-interactive

   |downloads_perl-io-interactive| |docker_perl-io-interactive|

   :versions: 1.022, 1.021

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-io-interactive|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-interactive

   and update with::

      conda update perl-io-interactive

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-interactive


.. |required_by_perl-io-interactive| conda:required_by:: perl-io-interactive
.. |downloads_perl-io-interactive| image:: https://img.shields.io/conda/dn/bioconda/perl-io-interactive.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-interactive| image:: https://quay.io/repository/biocontainers/perl-io-interactive/status
   :target: https://quay.io/repository/biocontainers/perl-io-interactive







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-interactive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-interactive/README.html


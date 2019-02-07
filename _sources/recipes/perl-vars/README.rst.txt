.. title:: Package Recipe 'perl-vars'
.. highlight: bash


perl-vars
=========

.. conda:recipe:: perl-vars/1.03
   :replaces_section_title:

   Perl pragma to predeclare global variable names

   :homepage: http://metacpan.org/pod/vars
   :license: perl_5
   :recipe: /`perl-vars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vars>`_/`1.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vars/1.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vars/1.03/meta.yaml>`_

   


.. conda:package:: perl-vars

   |downloads_perl-vars| |docker_perl-vars|

   :versions: 1.03

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-vars|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-vars

   and update with::

      conda update perl-vars

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-vars


.. |required_by_perl-vars| conda:required_by:: perl-vars
.. |downloads_perl-vars| image:: https://img.shields.io/conda/dn/bioconda/perl-vars.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-vars| image:: https://quay.io/repository/biocontainers/perl-vars/status
   :target: https://quay.io/repository/biocontainers/perl-vars







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-vars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-vars/README.html


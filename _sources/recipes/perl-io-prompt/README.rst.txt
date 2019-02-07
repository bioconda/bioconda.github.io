.. title:: Package Recipe 'perl-io-prompt'
.. highlight: bash


perl-io-prompt
==============

.. conda:recipe:: perl-io-prompt
   :replaces_section_title:

   Interactively prompt for user input

   :homepage: http://search.cpan.org/dist/IO-Prompt/lib/IO/Prompt.pm
   :license: perl_5
   :recipe: /`perl-io-prompt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-prompt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-prompt/meta.yaml>`_

   


.. conda:package:: perl-io-prompt

   |downloads_perl-io-prompt| |docker_perl-io-prompt|

   :versions: 0.997004

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-termreadkey`  :conda:package:`perl-want`  

   :required~by: |required_by_perl-io-prompt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-prompt

   and update with::

      conda update perl-io-prompt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-prompt


.. |required_by_perl-io-prompt| conda:required_by:: perl-io-prompt
.. |downloads_perl-io-prompt| image:: https://img.shields.io/conda/dn/bioconda/perl-io-prompt.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-prompt| image:: https://quay.io/repository/biocontainers/perl-io-prompt/status
   :target: https://quay.io/repository/biocontainers/perl-io-prompt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-prompt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-prompt/README.html


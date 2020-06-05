:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-script'
.. highlight: bash

perl-test-script
================

.. conda:recipe:: perl-test-script
   :replaces_section_title:
   :noindex:

   Basic cross\-platform tests for scripts

   :homepage: https://metacpan.org/pod/Test::Script
   :license: perl_5
   :recipe: /`perl-test-script <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-script>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-script/meta.yaml>`_

   


.. conda:package:: perl-test-script

   |downloads_perl-test-script| |docker_perl-test-script|

   :versions:
      
      

      ``1.25-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-capture-tiny: 
   :depends perl-probe-perl: 
   :depends perl-text-parsewords: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-script

   and update with::

      conda update perl-test-script

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-script:<tag>

   (see `perl-test-script/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-script| image:: https://img.shields.io/conda/dn/bioconda/perl-test-script.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-script
   :alt:   (downloads)
.. |docker_perl-test-script| image:: https://quay.io/repository/biocontainers/perl-test-script/status
   :target: https://quay.io/repository/biocontainers/perl-test-script
.. _`perl-test-script/tags`: https://quay.io/repository/biocontainers/perl-test-script?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-script/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-script/README.html
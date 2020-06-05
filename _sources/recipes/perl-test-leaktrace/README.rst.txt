:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-leaktrace'
.. highlight: bash

perl-test-leaktrace
===================

.. conda:recipe:: perl-test-leaktrace
   :replaces_section_title:
   :noindex:

   Traces memory leaks

   :homepage: http://metacpan.org/pod/Test-LeakTrace
   :license: perl_5
   :recipe: /`perl-test-leaktrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-leaktrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-leaktrace/meta.yaml>`_

   


.. conda:package:: perl-test-leaktrace

   |downloads_perl-test-leaktrace| |docker_perl-test-leaktrace|

   :versions:
      
      

      ``0.16-2``,  ``0.16-1``,  ``0.16-0``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-leaktrace

   and update with::

      conda update perl-test-leaktrace

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-leaktrace:<tag>

   (see `perl-test-leaktrace/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-leaktrace| image:: https://img.shields.io/conda/dn/bioconda/perl-test-leaktrace.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-leaktrace
   :alt:   (downloads)
.. |docker_perl-test-leaktrace| image:: https://quay.io/repository/biocontainers/perl-test-leaktrace/status
   :target: https://quay.io/repository/biocontainers/perl-test-leaktrace
.. _`perl-test-leaktrace/tags`: https://quay.io/repository/biocontainers/perl-test-leaktrace?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-leaktrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-leaktrace/README.html
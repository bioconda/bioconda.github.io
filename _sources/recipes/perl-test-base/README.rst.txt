:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-base'
.. highlight: bash

perl-test-base
==============

.. conda:recipe:: perl-test-base
   :replaces_section_title:
   :noindex:

   A Data Driven Testing Framework

   :homepage: https://github.com/ingydotnet/test-base-pm
   :license: perl_5
   :recipe: /`perl-test-base <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-base>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-base/meta.yaml>`_

   


.. conda:package:: perl-test-base

   |downloads_perl-test-base| |docker_perl-test-base|

   :versions:
      
      

      ``0.89-0``,  ``0.88-2``,  ``0.88-1``,  ``0.88-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-spiffy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-base

   and update with::

      conda update perl-test-base

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-base:<tag>

   (see `perl-test-base/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-base| image:: https://img.shields.io/conda/dn/bioconda/perl-test-base.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-base
   :alt:   (downloads)
.. |docker_perl-test-base| image:: https://quay.io/repository/biocontainers/perl-test-base/status
   :target: https://quay.io/repository/biocontainers/perl-test-base
.. _`perl-test-base/tags`: https://quay.io/repository/biocontainers/perl-test-base?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-base/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-base/README.html
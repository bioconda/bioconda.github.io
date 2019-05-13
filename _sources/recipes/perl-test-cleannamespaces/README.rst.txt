:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-cleannamespaces'
.. highlight: bash

perl-test-cleannamespaces
=========================

.. conda:recipe:: perl-test-cleannamespaces
   :replaces_section_title:

   Check for uncleaned imports

   :homepage: https://github.com/karenetheridge/Test-CleanNamespaces
   :license: perl_5
   :recipe: /`perl-test-cleannamespaces <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cleannamespaces>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cleannamespaces/meta.yaml>`_

   


.. conda:package:: perl-test-cleannamespaces

   |downloads_perl-test-cleannamespaces| |docker_perl-test-cleannamespaces|

   :versions: 0.24-0, 0.23-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter: 
   :depends perl-module-runtime: 
   :depends perl-package-stash: 
   :depends perl-sub-identify: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-cleannamespaces

   and update with::

      conda update perl-test-cleannamespaces

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-cleannamespaces:<tag>

   (see `perl-test-cleannamespaces/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-cleannamespaces| image:: https://img.shields.io/conda/dn/bioconda/perl-test-cleannamespaces.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-cleannamespaces
   :alt:   (downloads)
.. |docker_perl-test-cleannamespaces| image:: https://quay.io/repository/biocontainers/perl-test-cleannamespaces/status
   :target: https://quay.io/repository/biocontainers/perl-test-cleannamespaces
.. _`perl-test-cleannamespaces/tags`: https://quay.io/repository/biocontainers/perl-test-cleannamespaces?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-cleannamespaces/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-cleannamespaces/README.html
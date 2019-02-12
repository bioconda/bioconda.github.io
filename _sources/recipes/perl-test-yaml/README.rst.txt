:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-yaml'
.. highlight: bash

perl-test-yaml
==============

.. conda:recipe:: perl-test-yaml
   :replaces_section_title:

   Testing Module for YAML Implementations

   :homepage: https://github.com/ingydotnet/test-yaml-pm
   :license: perl_5
   :recipe: /`perl-test-yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-yaml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-yaml/meta.yaml>`_

   


.. conda:package:: perl-test-yaml

   |downloads_perl-test-yaml| |docker_perl-test-yaml|

   :versions: 1.07-0, 1.06-2, 1.06-1, 1.06-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-test-base: >=0.89
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-yaml

   and update with::

      conda update perl-test-yaml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-yaml:<tag>

   (see `perl-test-yaml/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-yaml| image:: https://img.shields.io/conda/dn/bioconda/perl-test-yaml.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-yaml| image:: https://quay.io/repository/biocontainers/perl-test-yaml/status
   :target: https://quay.io/repository/biocontainers/perl-test-yaml
.. _`perl-test-yaml/tags`: https://quay.io/repository/biocontainers/perl-test-yaml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-yaml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-yaml/README.html
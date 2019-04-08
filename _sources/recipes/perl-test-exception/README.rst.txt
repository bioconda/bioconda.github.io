:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-exception'
.. highlight: bash

perl-test-exception
===================

.. conda:recipe:: perl-test-exception
   :replaces_section_title:

   Test exception\-based code

   :homepage: https://github.com/Test-More/test-exception
   :license: perl_5
   :recipe: /`perl-test-exception <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-exception>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-exception/meta.yaml>`_

   


.. conda:package:: perl-test-exception

   |downloads_perl-test-exception| |docker_perl-test-exception|

   :versions: 0.43-2, 0.43-1, 0.43-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-sub-uplevel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-exception

   and update with::

      conda update perl-test-exception

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-exception:<tag>

   (see `perl-test-exception/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-exception| image:: https://img.shields.io/conda/dn/bioconda/perl-test-exception.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-exception| image:: https://quay.io/repository/biocontainers/perl-test-exception/status
   :target: https://quay.io/repository/biocontainers/perl-test-exception
.. _`perl-test-exception/tags`: https://quay.io/repository/biocontainers/perl-test-exception?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-exception/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-exception/README.html
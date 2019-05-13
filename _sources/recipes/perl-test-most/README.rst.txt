:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-most'
.. highlight: bash

perl-test-most
==============

.. conda:recipe:: perl-test-most
   :replaces_section_title:

   Most commonly needed test functions and features

   :homepage: http://metacpan.org/pod/Test-Most
   :license: unknown
   :recipe: /`perl-test-most <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most/meta.yaml>`_

   


.. conda:package:: perl-test-most

   |downloads_perl-test-most| |docker_perl-test-most|

   :versions: 0.35-0, 0.34-2, 0.34-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exception-class: 
   :depends perl-test-deep: 
   :depends perl-test-differences: 
   :depends perl-test-exception: 
   :depends perl-test-warn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-most

   and update with::

      conda update perl-test-most

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-most:<tag>

   (see `perl-test-most/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-most| image:: https://img.shields.io/conda/dn/bioconda/perl-test-most.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-most
   :alt:   (downloads)
.. |docker_perl-test-most| image:: https://quay.io/repository/biocontainers/perl-test-most/status
   :target: https://quay.io/repository/biocontainers/perl-test-most
.. _`perl-test-most/tags`: https://quay.io/repository/biocontainers/perl-test-most?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-most/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-most/README.html
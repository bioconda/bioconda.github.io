:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-utils'
.. highlight: bash

perl-array-utils
================

.. conda:recipe:: perl-array-utils
   :replaces_section_title:

   small utils for array manipulation

   :homepage: http://metacpan.org/pod/Array::Utils
   :license: unknown
   :recipe: /`perl-array-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-utils/meta.yaml>`_

   


.. conda:package:: perl-array-utils

   |downloads_perl-array-utils| |docker_perl-array-utils|

   :versions: 0.5-2, 0.5-1, 0.5-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-array-utils

   and update with::

      conda update perl-array-utils

   or use the docker container::

      docker pull quay.io/biocontainers/perl-array-utils:<tag>

   (see `perl-array-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-array-utils| image:: https://img.shields.io/conda/dn/bioconda/perl-array-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-array-utils| image:: https://quay.io/repository/biocontainers/perl-array-utils/status
   :target: https://quay.io/repository/biocontainers/perl-array-utils
.. _`perl-array-utils/tags`: https://quay.io/repository/biocontainers/perl-array-utils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-utils/README.html
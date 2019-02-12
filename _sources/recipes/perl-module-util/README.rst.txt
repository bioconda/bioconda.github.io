:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-util'
.. highlight: bash

perl-module-util
================

.. conda:recipe:: perl-module-util
   :replaces_section_title:

   Module name tools and transformations

   :homepage: http://metacpan.org/pod/Module::Util
   :license: perl_5
   :recipe: /`perl-module-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-util/meta.yaml>`_

   


.. conda:package:: perl-module-util

   |downloads_perl-module-util| |docker_perl-module-util|

   :versions: 1.09-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-util

   and update with::

      conda update perl-module-util

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-module-util:<tag>

   (see `perl-module-util/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-util| image:: https://img.shields.io/conda/dn/bioconda/perl-module-util.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-util| image:: https://quay.io/repository/biocontainers/perl-module-util/status
   :target: https://quay.io/repository/biocontainers/perl-module-util
.. _`perl-module-util/tags`: https://quay.io/repository/biocontainers/perl-module-util?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-util/README.html
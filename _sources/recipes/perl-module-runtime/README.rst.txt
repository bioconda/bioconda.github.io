:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-runtime'
.. highlight: bash

perl-module-runtime
===================

.. conda:recipe:: perl-module-runtime
   :replaces_section_title:

   runtime module handling

   :homepage: http://metacpan.org/pod/Module-Runtime
   :license: perl_5
   :recipe: /`perl-module-runtime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-runtime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-runtime/meta.yaml>`_

   


.. conda:package:: perl-module-runtime

   |downloads_perl-module-runtime| |docker_perl-module-runtime|

   :versions: 0.016-0, 0.014-1, 0.014-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-runtime

   and update with::

      conda update perl-module-runtime

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-runtime:<tag>

   (see `perl-module-runtime/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-runtime| image:: https://img.shields.io/conda/dn/bioconda/perl-module-runtime.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-runtime| image:: https://quay.io/repository/biocontainers/perl-module-runtime/status
   :target: https://quay.io/repository/biocontainers/perl-module-runtime
.. _`perl-module-runtime/tags`: https://quay.io/repository/biocontainers/perl-module-runtime?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-runtime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-runtime/README.html
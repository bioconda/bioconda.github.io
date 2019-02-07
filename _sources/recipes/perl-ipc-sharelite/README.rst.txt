.. title:: Package Recipe 'perl-ipc-sharelite'
.. highlight: bash


perl-ipc-sharelite
==================

.. conda:recipe:: perl-ipc-sharelite
   :replaces_section_title:

   Lightweight interface to shared memory

   :homepage: http://metacpan.org/pod/IPC::ShareLite
   :license: perl_5
   :recipe: /`perl-ipc-sharelite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-sharelite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-sharelite/meta.yaml>`_

   


.. conda:package:: perl-ipc-sharelite

   |downloads_perl-ipc-sharelite| |docker_perl-ipc-sharelite|

   :versions: 0.17

   :depends: :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-ipc-sharelite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ipc-sharelite

   and update with::

      conda update perl-ipc-sharelite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-ipc-sharelite


.. |required_by_perl-ipc-sharelite| conda:required_by:: perl-ipc-sharelite
.. |downloads_perl-ipc-sharelite| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-sharelite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-ipc-sharelite| image:: https://quay.io/repository/biocontainers/perl-ipc-sharelite/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-sharelite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-sharelite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-sharelite/README.html


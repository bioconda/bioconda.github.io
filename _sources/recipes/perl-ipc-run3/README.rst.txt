:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-run3'
.. highlight: bash

perl-ipc-run3
=============

.. conda:recipe:: perl-ipc-run3
   :replaces_section_title:

   run a subprocess with input\/ouput redirection

   :homepage: http://metacpan.org/pod/IPC::Run3
   :license: open_source
   :recipe: /`perl-ipc-run3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run3/meta.yaml>`_

   


.. conda:package:: perl-ipc-run3

   |downloads_perl-ipc-run3| |docker_perl-ipc-run3|

   :versions: 0.048-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ipc-run3

   and update with::

      conda update perl-ipc-run3

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ipc-run3:<tag>

   (see `perl-ipc-run3/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ipc-run3| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-run3.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-ipc-run3| image:: https://quay.io/repository/biocontainers/perl-ipc-run3/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-run3
.. _`perl-ipc-run3/tags`: https://quay.io/repository/biocontainers/perl-ipc-run3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-run3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-run3/README.html
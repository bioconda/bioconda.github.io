:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-system-simple'
.. highlight: bash

perl-ipc-system-simple
======================

.. conda:recipe:: perl-ipc-system-simple
   :replaces_section_title:
   :noindex:

   Run commands simply\, with detailed diagnostics

   :homepage: http://metacpan.org/pod/IPC::System::Simple
   :license: perl_5
   :recipe: /`perl-ipc-system-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-system-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-system-simple/meta.yaml>`_

   


.. conda:package:: perl-ipc-system-simple

   |downloads_perl-ipc-system-simple| |docker_perl-ipc-system-simple|

   :versions:
      
      

      ``1.25-5``,  ``1.25-4``,  ``1.25-3``,  ``1.25-2``,  ``1.25-1``,  ``1.25-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ipc-system-simple

   and update with::

      conda update perl-ipc-system-simple

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ipc-system-simple:<tag>

   (see `perl-ipc-system-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ipc-system-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-system-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-system-simple
   :alt:   (downloads)
.. |docker_perl-ipc-system-simple| image:: https://quay.io/repository/biocontainers/perl-ipc-system-simple/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-system-simple
.. _`perl-ipc-system-simple/tags`: https://quay.io/repository/biocontainers/perl-ipc-system-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-system-simple";
        var versions = ["1.25","1.25","1.25","1.25","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-system-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-system-simple/README.html
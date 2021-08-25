:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-b-debug'
.. highlight: bash

perl-b-debug
============

.. conda:recipe:: perl-b-debug
   :replaces_section_title:
   :noindex:

   print debug info about ops

   :homepage: http://metacpan.org/pod/B::Debug
   :license: perl_5
   :recipe: /`perl-b-debug <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-debug>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-b-debug/meta.yaml>`_

   


.. conda:package:: perl-b-debug

   |downloads_perl-b-debug| |docker_perl-b-debug|

   :versions:
      
      

      ``1.26-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-b-debug

   and update with::

      conda update perl-b-debug

   or use the docker container::

      docker pull quay.io/biocontainers/perl-b-debug:<tag>

   (see `perl-b-debug/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-b-debug| image:: https://img.shields.io/conda/dn/bioconda/perl-b-debug.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-b-debug
   :alt:   (downloads)
.. |docker_perl-b-debug| image:: https://quay.io/repository/biocontainers/perl-b-debug/status
   :target: https://quay.io/repository/biocontainers/perl-b-debug
.. _`perl-b-debug/tags`: https://quay.io/repository/biocontainers/perl-b-debug?tab=tags


.. raw:: html

    <script>
        var package = "perl-b-debug";
        var versions = ["1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-b-debug/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-b-debug/README.html
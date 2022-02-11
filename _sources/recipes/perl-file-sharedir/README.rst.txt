:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-sharedir'
.. highlight: bash

perl-file-sharedir
==================

.. conda:recipe:: perl-file-sharedir
   :replaces_section_title:
   :noindex:

   Locate per\-dist and per\-module shared files

   :homepage: https://metacpan.org/release/File-ShareDir
   :license: perl_5
   :recipe: /`perl-file-sharedir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir/meta.yaml>`_

   


.. conda:package:: perl-file-sharedir

   |downloads_perl-file-sharedir| |docker_perl-file-sharedir|

   :versions:
      
      

      ``1.118-0``,  ``1.116-2``,  ``1.116-1``,  ``1.116-0``,  ``1.102-4``,  ``1.102-3``,  ``1.102-2``,  ``1.102-1``,  ``1.102-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-class-inspector: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-sharedir

   and update with::

      conda update perl-file-sharedir

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-sharedir:<tag>

   (see `perl-file-sharedir/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-sharedir| image:: https://img.shields.io/conda/dn/bioconda/perl-file-sharedir.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-sharedir
   :alt:   (downloads)
.. |docker_perl-file-sharedir| image:: https://quay.io/repository/biocontainers/perl-file-sharedir/status
   :target: https://quay.io/repository/biocontainers/perl-file-sharedir
.. _`perl-file-sharedir/tags`: https://quay.io/repository/biocontainers/perl-file-sharedir?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-sharedir";
        var versions = ["1.118","1.116","1.116","1.116","1.102"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-sharedir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-sharedir/README.html
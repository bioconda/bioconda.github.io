:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ms'
.. highlight: bash

perl-ms
=======

.. conda:recipe:: perl-ms
   :replaces_section_title:
   :noindex:

   Namespace for mass spectrometry\-related libraries

   :homepage: http://metacpan.org/pod/MS
   :license: gpl_3
   :recipe: /`perl-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ms/meta.yaml>`_

   


.. conda:package:: perl-ms

   |downloads_perl-ms| |docker_perl-ms|

   :versions:
      
      

      ``0.206003-1``,  ``0.206003-0``,  ``0.204003-0``,  ``0.204001-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-biox-seq: 
   :depends perl-compress-bgzf: 
   :depends perl-data-lock: 
   :depends perl-file-sharedir: 
   :depends perl-http-tiny: 
   :depends perl-list-moreutils: 
   :depends perl-module-pluggable: 
   :depends perl-perlio-gzip: 
   :depends perl-uri: 
   :depends perl-xml-parser: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ms

   and update with::

      conda update perl-ms

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ms:<tag>

   (see `perl-ms/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ms| image:: https://img.shields.io/conda/dn/bioconda/perl-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ms
   :alt:   (downloads)
.. |docker_perl-ms| image:: https://quay.io/repository/biocontainers/perl-ms/status
   :target: https://quay.io/repository/biocontainers/perl-ms
.. _`perl-ms/tags`: https://quay.io/repository/biocontainers/perl-ms?tab=tags


.. raw:: html

    <script>
        var package = "perl-ms";
        var versions = ["0.206003","0.206003","0.204003","0.204001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ms/README.html
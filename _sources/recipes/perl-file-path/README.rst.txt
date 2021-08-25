:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-path'
.. highlight: bash

perl-file-path
==============

.. conda:recipe:: perl-file-path
   :replaces_section_title:
   :noindex:

   Create or remove directory trees

   :homepage: http://metacpan.org/pod/File::Path
   :license: unknown
   :recipe: /`perl-file-path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-path/meta.yaml>`_

   


.. conda:package:: perl-file-path

   |downloads_perl-file-path| |docker_perl-file-path|

   :versions:
      
      

      ``2.16-0``,  ``2.15-1``,  ``2.15-0``,  ``2.12-1``,  ``2.12-0``,  ``2.09-1``,  ``2.09-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-path

   and update with::

      conda update perl-file-path

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-path:<tag>

   (see `perl-file-path/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-path| image:: https://img.shields.io/conda/dn/bioconda/perl-file-path.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-path
   :alt:   (downloads)
.. |docker_perl-file-path| image:: https://quay.io/repository/biocontainers/perl-file-path/status
   :target: https://quay.io/repository/biocontainers/perl-file-path
.. _`perl-file-path/tags`: https://quay.io/repository/biocontainers/perl-file-path?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-path";
        var versions = ["2.16","2.15","2.15","2.12","2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-path/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-pushd'
.. highlight: bash

perl-file-pushd
===============

.. conda:recipe:: perl-file-pushd
   :replaces_section_title:
   :noindex:

   change directory temporarily for a limited scope

   :homepage: https://github.com/dagolden/File-pushd
   :license: apache_2_0
   :recipe: /`perl-file-pushd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-pushd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-pushd/meta.yaml>`_

   


.. conda:package:: perl-file-pushd

   |downloads_perl-file-pushd| |docker_perl-file-pushd|

   :versions:
      
      

      ``1.016-1``,  ``1.016-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-file-path: 
   :depends perl-file-temp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-pushd

   and update with::

      conda update perl-file-pushd

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-pushd:<tag>

   (see `perl-file-pushd/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-pushd| image:: https://img.shields.io/conda/dn/bioconda/perl-file-pushd.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-pushd
   :alt:   (downloads)
.. |docker_perl-file-pushd| image:: https://quay.io/repository/biocontainers/perl-file-pushd/status
   :target: https://quay.io/repository/biocontainers/perl-file-pushd
.. _`perl-file-pushd/tags`: https://quay.io/repository/biocontainers/perl-file-pushd?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-pushd";
        var versions = ["1.016","1.016"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-pushd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-pushd/README.html
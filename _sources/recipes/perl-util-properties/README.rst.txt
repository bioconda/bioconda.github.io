:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-util-properties'
.. highlight: bash

perl-util-properties
====================

.. conda:recipe:: perl-util-properties
   :replaces_section_title:
   :noindex:

   Java.util.properties like class

   :homepage: http://metacpan.org/pod/Util::Properties
   :license: open_source
   :recipe: /`perl-util-properties <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-util-properties>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-util-properties/meta.yaml>`_

   


.. conda:package:: perl-util-properties

   |downloads_perl-util-properties| |docker_perl-util-properties|

   :versions:
      
      

      ``0.18-1``,  ``0.18-0``

      

   
   :depends perl-digest-md5-file: 
   :depends perl-io-all: 
   :depends perl-lockfile-simple: 
   :depends perl-object-insideout: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-util-properties

   and update with::

      conda update perl-util-properties

   or use the docker container::

      docker pull quay.io/biocontainers/perl-util-properties:<tag>

   (see `perl-util-properties/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-util-properties| image:: https://img.shields.io/conda/dn/bioconda/perl-util-properties.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-util-properties
   :alt:   (downloads)
.. |docker_perl-util-properties| image:: https://quay.io/repository/biocontainers/perl-util-properties/status
   :target: https://quay.io/repository/biocontainers/perl-util-properties
.. _`perl-util-properties/tags`: https://quay.io/repository/biocontainers/perl-util-properties?tab=tags


.. raw:: html

    <script>
        var package = "perl-util-properties";
        var versions = ["0.18","0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-util-properties/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-util-properties/README.html
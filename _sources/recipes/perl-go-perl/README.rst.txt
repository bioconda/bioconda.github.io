:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-go-perl'
.. highlight: bash

perl-go-perl
============

.. conda:recipe:: perl-go-perl
   :replaces_section_title:
   :noindex:

   perl modules for GO and other OBO ontologies

   :homepage: http://metacpan.org/pod/go-perl
   :license: BSD-3-Clause
   :recipe: /`perl-go-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-go-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-go-perl/meta.yaml>`_

   


.. conda:package:: perl-go-perl

   |downloads_perl-go-perl| |docker_perl-go-perl|

   :versions:
      
      

      ``0.15-3``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-data-dumper: 
   :depends perl-data-stag: ``>=0.07``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-go-perl

   and update with::

      conda update perl-go-perl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-go-perl:<tag>

   (see `perl-go-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-go-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-go-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-go-perl
   :alt:   (downloads)
.. |docker_perl-go-perl| image:: https://quay.io/repository/biocontainers/perl-go-perl/status
   :target: https://quay.io/repository/biocontainers/perl-go-perl
.. _`perl-go-perl/tags`: https://quay.io/repository/biocontainers/perl-go-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-go-perl";
        var versions = ["0.15","0.15","0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-go-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-go-perl/README.html
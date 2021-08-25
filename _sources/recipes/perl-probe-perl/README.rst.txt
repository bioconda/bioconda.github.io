:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-probe-perl'
.. highlight: bash

perl-probe-perl
===============

.. conda:recipe:: perl-probe-perl
   :replaces_section_title:
   :noindex:

   Information about the currently running perl

   :homepage: http://metacpan.org/pod/Probe::Perl
   :license: perl_5
   :recipe: /`perl-probe-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-probe-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-probe-perl/meta.yaml>`_

   


.. conda:package:: perl-probe-perl

   |downloads_perl-probe-perl| |docker_perl-probe-perl|

   :versions:
      
      

      ``0.03-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-probe-perl

   and update with::

      conda update perl-probe-perl

   or use the docker container::

      docker pull quay.io/biocontainers/perl-probe-perl:<tag>

   (see `perl-probe-perl/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-probe-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-probe-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-probe-perl
   :alt:   (downloads)
.. |docker_perl-probe-perl| image:: https://quay.io/repository/biocontainers/perl-probe-perl/status
   :target: https://quay.io/repository/biocontainers/perl-probe-perl
.. _`perl-probe-perl/tags`: https://quay.io/repository/biocontainers/perl-probe-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-probe-perl";
        var versions = ["0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-probe-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-probe-perl/README.html
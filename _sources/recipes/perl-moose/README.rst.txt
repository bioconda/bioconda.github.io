:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moose'
.. highlight: bash

perl-moose
==========

.. conda:recipe:: perl-moose
   :replaces_section_title:
   :noindex:

   A postmodern object system for Perl 5

   :homepage: http://moose.perl.org/
   :license: perl_5
   :recipe: /`perl-moose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moose/meta.yaml>`_

   


.. conda:package:: perl-moose

   |downloads_perl-moose| |docker_perl-moose|

   :versions:
      
      

      ``2.2201-1``,  ``2.2201-0``,  ``2.2011-1``,  ``2.2011-0``,  ``2.2009-0``,  ``2.1804-2``,  ``2.1804-1``,  ``2.1804-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-class-load: 
   :depends perl-class-load-xs: 
   :depends perl-data-optlist: 
   :depends perl-devel-globaldestruction: 
   :depends perl-devel-overloadinfo: 
   :depends perl-devel-stacktrace: 
   :depends perl-dist-checkconflicts: 
   :depends perl-eval-closure: 
   :depends perl-module-runtime: 
   :depends perl-module-runtime-conflicts: 
   :depends perl-mro-compat: 
   :depends perl-package-deprecationmanager: 
   :depends perl-package-stash: 
   :depends perl-package-stash-xs: 
   :depends perl-params-util: 
   :depends perl-sub-exporter: 
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moose

   and update with::

      conda update perl-moose

   or use the docker container::

      docker pull quay.io/biocontainers/perl-moose:<tag>

   (see `perl-moose/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moose| image:: https://img.shields.io/conda/dn/bioconda/perl-moose.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moose
   :alt:   (downloads)
.. |docker_perl-moose| image:: https://quay.io/repository/biocontainers/perl-moose/status
   :target: https://quay.io/repository/biocontainers/perl-moose
.. _`perl-moose/tags`: https://quay.io/repository/biocontainers/perl-moose?tab=tags


.. raw:: html

    <script>
        var package = "perl-moose";
        var versions = ["2.2201","2.2201","2.2011","2.2011","2.2009"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moose/README.html
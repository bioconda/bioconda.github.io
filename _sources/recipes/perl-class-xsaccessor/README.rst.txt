:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-xsaccessor'
.. highlight: bash

perl-class-xsaccessor
=====================

.. conda:recipe:: perl-class-xsaccessor
   :replaces_section_title:
   :noindex:

   Generate fast XS accessors without runtime compilation

   :homepage: http://metacpan.org/pod/Class::XSAccessor
   :license: perl_5
   :recipe: /`perl-class-xsaccessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-xsaccessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-xsaccessor/meta.yaml>`_

   


.. conda:package:: perl-class-xsaccessor

   |downloads_perl-class-xsaccessor| |docker_perl-class-xsaccessor|

   :versions:
      
      

      ``1.19-5``,  ``1.19-4``,  ``1.19-2``,  ``1.19-1``,  ``1.19-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-xsaccessor

   and update with::

      conda update perl-class-xsaccessor

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-xsaccessor:<tag>

   (see `perl-class-xsaccessor/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-xsaccessor| image:: https://img.shields.io/conda/dn/bioconda/perl-class-xsaccessor.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-xsaccessor
   :alt:   (downloads)
.. |docker_perl-class-xsaccessor| image:: https://quay.io/repository/biocontainers/perl-class-xsaccessor/status
   :target: https://quay.io/repository/biocontainers/perl-class-xsaccessor
.. _`perl-class-xsaccessor/tags`: https://quay.io/repository/biocontainers/perl-class-xsaccessor?tab=tags


.. raw:: html

    <script>
        var package = "perl-class-xsaccessor";
        var versions = ["1.19","1.19","1.19","1.19","1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-xsaccessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-xsaccessor/README.html
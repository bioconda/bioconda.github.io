:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-specio'
.. highlight: bash

perl-specio
===========

.. conda:recipe:: perl-specio
   :replaces_section_title:
   :noindex:

   Type constraints and coercions for Perl

   :homepage: https://metacpan.org/release/Specio
   :license: artistic_2
   :recipe: /`perl-specio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-specio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-specio/meta.yaml>`_

   


.. conda:package:: perl-specio

   |downloads_perl-specio| |docker_perl-specio|

   :versions:
      
      

      ``0.47-0``,  ``0.43-0``,  ``0.42-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-devel-stacktrace: 
   :depends perl-eval-closure: 
   :depends perl-module-runtime: 
   :depends perl-mro-compat: 
   :depends perl-role-tiny: 
   :depends perl-sub-quote: 
   :depends perl-test-fatal: 
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-specio

   and update with::

      conda update perl-specio

   or use the docker container::

      docker pull quay.io/biocontainers/perl-specio:<tag>

   (see `perl-specio/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-specio| image:: https://img.shields.io/conda/dn/bioconda/perl-specio.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-specio
   :alt:   (downloads)
.. |docker_perl-specio| image:: https://quay.io/repository/biocontainers/perl-specio/status
   :target: https://quay.io/repository/biocontainers/perl-specio
.. _`perl-specio/tags`: https://quay.io/repository/biocontainers/perl-specio?tab=tags


.. raw:: html

    <script>
        var package = "perl-specio";
        var versions = ["0.47","0.43","0.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-specio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-specio/README.html
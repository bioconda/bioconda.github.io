:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-assert'
.. highlight: bash

perl-devel-assert
=================

.. conda:recipe:: perl-devel-assert
   :replaces_section_title:
   :noindex:

   assertions for Perl \>\= 5.14

   :homepage: http://metacpan.org/pod/Devel::Assert
   :license: perl_5
   :recipe: /`perl-devel-assert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-assert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-assert/meta.yaml>`_

   


.. conda:package:: perl-devel-assert

   |downloads_perl-devel-assert| |docker_perl-devel-assert|

   :versions:
      
      

      ``1.06-3``,  ``1.06-2``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-assert

   and update with::

      conda update perl-devel-assert

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-assert:<tag>

   (see `perl-devel-assert/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-assert| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-assert.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-assert
   :alt:   (downloads)
.. |docker_perl-devel-assert| image:: https://quay.io/repository/biocontainers/perl-devel-assert/status
   :target: https://quay.io/repository/biocontainers/perl-devel-assert
.. _`perl-devel-assert/tags`: https://quay.io/repository/biocontainers/perl-devel-assert?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-assert";
        var versions = ["1.06","1.06","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-assert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-assert/README.html
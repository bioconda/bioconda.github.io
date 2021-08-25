:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-stacktrace'
.. highlight: bash

perl-devel-stacktrace
=====================

.. conda:recipe:: perl-devel-stacktrace
   :replaces_section_title:
   :noindex:

   An object representing a stack trace

   :homepage: http://metacpan.org/release/Devel-StackTrace
   :license: artistic_2
   :recipe: /`perl-devel-stacktrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-stacktrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-stacktrace/meta.yaml>`_

   


.. conda:package:: perl-devel-stacktrace

   |downloads_perl-devel-stacktrace| |docker_perl-devel-stacktrace|

   :versions:
      
      

      ``2.04-0``,  ``2.03-1``,  ``2.03-0``,  ``2.00-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-stacktrace

   and update with::

      conda update perl-devel-stacktrace

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-stacktrace:<tag>

   (see `perl-devel-stacktrace/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-stacktrace| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-stacktrace.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-stacktrace
   :alt:   (downloads)
.. |docker_perl-devel-stacktrace| image:: https://quay.io/repository/biocontainers/perl-devel-stacktrace/status
   :target: https://quay.io/repository/biocontainers/perl-devel-stacktrace
.. _`perl-devel-stacktrace/tags`: https://quay.io/repository/biocontainers/perl-devel-stacktrace?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-stacktrace";
        var versions = ["2.04","2.03","2.03","2.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-stacktrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-stacktrace/README.html
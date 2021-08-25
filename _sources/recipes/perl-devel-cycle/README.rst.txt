:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-cycle'
.. highlight: bash

perl-devel-cycle
================

.. conda:recipe:: perl-devel-cycle
   :replaces_section_title:
   :noindex:

   Find memory cycles in objects

   :homepage: http://metacpan.org/pod/Devel::Cycle
   :license: unknown
   :recipe: /`perl-devel-cycle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-cycle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-cycle/meta.yaml>`_

   


.. conda:package:: perl-devel-cycle

   |downloads_perl-devel-cycle| |docker_perl-devel-cycle|

   :versions:
      
      

      ``1.12-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-devel-cycle

   and update with::

      conda update perl-devel-cycle

   or use the docker container::

      docker pull quay.io/biocontainers/perl-devel-cycle:<tag>

   (see `perl-devel-cycle/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-cycle| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-cycle.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-cycle
   :alt:   (downloads)
.. |docker_perl-devel-cycle| image:: https://quay.io/repository/biocontainers/perl-devel-cycle/status
   :target: https://quay.io/repository/biocontainers/perl-devel-cycle
.. _`perl-devel-cycle/tags`: https://quay.io/repository/biocontainers/perl-devel-cycle?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-cycle";
        var versions = ["1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-cycle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-cycle/README.html
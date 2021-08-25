:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bloom-faster'
.. highlight: bash

perl-bloom-faster
=================

.. conda:recipe:: perl-bloom-faster
   :replaces_section_title:
   :noindex:

   Perl extension for the c library libbloom.

   :homepage: http://metacpan.org/pod/Bloom-Faster
   :license: unknown
   :recipe: /`perl-bloom-faster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bloom-faster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bloom-faster/meta.yaml>`_

   


.. conda:package:: perl-bloom-faster

   |downloads_perl-bloom-faster| |docker_perl-bloom-faster|

   :versions:
      
      

      ``1.7-2``,  ``1.7-1``,  ``1.7-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bloom-faster

   and update with::

      conda update perl-bloom-faster

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bloom-faster:<tag>

   (see `perl-bloom-faster/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bloom-faster| image:: https://img.shields.io/conda/dn/bioconda/perl-bloom-faster.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bloom-faster
   :alt:   (downloads)
.. |docker_perl-bloom-faster| image:: https://quay.io/repository/biocontainers/perl-bloom-faster/status
   :target: https://quay.io/repository/biocontainers/perl-bloom-faster
.. _`perl-bloom-faster/tags`: https://quay.io/repository/biocontainers/perl-bloom-faster?tab=tags


.. raw:: html

    <script>
        var package = "perl-bloom-faster";
        var versions = ["1.7","1.7","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bloom-faster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bloom-faster/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-versions'
.. highlight: bash

perl-sort-versions
==================

.. conda:recipe:: perl-sort-versions
   :replaces_section_title:
   :noindex:

   a perl 5 module for sorting of revision\-like numbers

   :homepage: https://github.com/neilb/Sort-Versions
   :license: perl_5
   :recipe: /`perl-sort-versions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-versions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-versions/meta.yaml>`_

   


.. conda:package:: perl-sort-versions

   |downloads_perl-sort-versions| |docker_perl-sort-versions|

   :versions:
      
      

      ``1.62-2``,  ``1.62-1``,  ``1.62-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sort-versions

   and update with::

      conda update perl-sort-versions

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sort-versions:<tag>

   (see `perl-sort-versions/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sort-versions| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-versions.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-versions
   :alt:   (downloads)
.. |docker_perl-sort-versions| image:: https://quay.io/repository/biocontainers/perl-sort-versions/status
   :target: https://quay.io/repository/biocontainers/perl-sort-versions
.. _`perl-sort-versions/tags`: https://quay.io/repository/biocontainers/perl-sort-versions?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-versions";
        var versions = ["1.62","1.62","1.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-versions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-versions/README.html
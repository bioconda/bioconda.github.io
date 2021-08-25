:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-mergesort'
.. highlight: bash

perl-sort-mergesort
===================

.. conda:recipe:: perl-sort-mergesort
   :replaces_section_title:
   :noindex:

   Merge sorted streams to create a new stream

   :homepage: http://metacpan.org/pod/Sort::MergeSort
   :license: Artistic-2.0
   :recipe: /`perl-sort-mergesort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-mergesort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-mergesort/meta.yaml>`_

   


.. conda:package:: perl-sort-mergesort

   |downloads_perl-sort-mergesort| |docker_perl-sort-mergesort|

   :versions:
      
      

      ``0.31-1``,  ``0.31-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-test-nowarnings: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sort-mergesort

   and update with::

      conda update perl-sort-mergesort

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sort-mergesort:<tag>

   (see `perl-sort-mergesort/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sort-mergesort| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-mergesort.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-mergesort
   :alt:   (downloads)
.. |docker_perl-sort-mergesort| image:: https://quay.io/repository/biocontainers/perl-sort-mergesort/status
   :target: https://quay.io/repository/biocontainers/perl-sort-mergesort
.. _`perl-sort-mergesort/tags`: https://quay.io/repository/biocontainers/perl-sort-mergesort?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-mergesort";
        var versions = ["0.31","0.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-mergesort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-mergesort/README.html
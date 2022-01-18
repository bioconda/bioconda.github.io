:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-algorithm-diff'
.. highlight: bash

perl-algorithm-diff
===================

.. conda:recipe:: perl-algorithm-diff
   :replaces_section_title:
   :noindex:

   Compute intelligent differences between two files \/ lists but use the old \(\<\=0.59\) interface.

   :homepage: http://metacpan.org/pod/Algorithm-Diff
   :license: unknown
   :recipe: /`perl-algorithm-diff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-diff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-diff/meta.yaml>`_

   


.. conda:package:: perl-algorithm-diff

   |downloads_perl-algorithm-diff| |docker_perl-algorithm-diff|

   :versions:
      
      

      ``1.1903-3``,  ``1.1903-2``,  ``1.1903-1``,  ``1.1903-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-algorithm-diff

   and update with::

      conda update perl-algorithm-diff

   or use the docker container::

      docker pull quay.io/biocontainers/perl-algorithm-diff:<tag>

   (see `perl-algorithm-diff/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-algorithm-diff| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-diff.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-algorithm-diff
   :alt:   (downloads)
.. |docker_perl-algorithm-diff| image:: https://quay.io/repository/biocontainers/perl-algorithm-diff/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-diff
.. _`perl-algorithm-diff/tags`: https://quay.io/repository/biocontainers/perl-algorithm-diff?tab=tags


.. raw:: html

    <script>
        var package = "perl-algorithm-diff";
        var versions = ["1.1903","1.1903","1.1903","1.1903"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-diff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-diff/README.html
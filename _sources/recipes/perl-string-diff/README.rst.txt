:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-string-diff'
.. highlight: bash

perl-string-diff
================

.. conda:recipe:: perl-string-diff
   :replaces_section_title:
   :noindex:

   Simple diff to String

   :homepage: https://github.com/yappo/p5-String-Diff
   :license: perl_5
   :recipe: /`perl-string-diff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-diff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-string-diff/meta.yaml>`_

   


.. conda:package:: perl-string-diff

   |downloads_perl-string-diff| |docker_perl-string-diff|

   :versions:
      
      

      ``0.07-1``,  ``0.07-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-algorithm-diff: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-string-diff

   and update with::

      conda update perl-string-diff

   or use the docker container::

      docker pull quay.io/biocontainers/perl-string-diff:<tag>

   (see `perl-string-diff/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-string-diff| image:: https://img.shields.io/conda/dn/bioconda/perl-string-diff.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-string-diff
   :alt:   (downloads)
.. |docker_perl-string-diff| image:: https://quay.io/repository/biocontainers/perl-string-diff/status
   :target: https://quay.io/repository/biocontainers/perl-string-diff
.. _`perl-string-diff/tags`: https://quay.io/repository/biocontainers/perl-string-diff?tab=tags


.. raw:: html

    <script>
        var package = "perl-string-diff";
        var versions = ["0.07","0.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-string-diff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-string-diff/README.html
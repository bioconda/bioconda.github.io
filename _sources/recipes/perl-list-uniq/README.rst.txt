:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-uniq'
.. highlight: bash

perl-list-uniq
==============

.. conda:recipe:: perl-list-uniq
   :replaces_section_title:
   :noindex:

   extract the unique elements of a list

   :homepage: http://metacpan.org/pod/List::Uniq
   :license: perl_5
   :recipe: /`perl-list-uniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-uniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-uniq/meta.yaml>`_

   


.. conda:package:: perl-list-uniq

   |downloads_perl-list-uniq| |docker_perl-list-uniq|

   :versions:
      
      

      ``0.20-2``,  ``0.20-1``,  ``0.20-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-list-uniq

   and update with::

      conda update perl-list-uniq

   or use the docker container::

      docker pull quay.io/biocontainers/perl-list-uniq:<tag>

   (see `perl-list-uniq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-uniq| image:: https://img.shields.io/conda/dn/bioconda/perl-list-uniq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-uniq
   :alt:   (downloads)
.. |docker_perl-list-uniq| image:: https://quay.io/repository/biocontainers/perl-list-uniq/status
   :target: https://quay.io/repository/biocontainers/perl-list-uniq
.. _`perl-list-uniq/tags`: https://quay.io/repository/biocontainers/perl-list-uniq?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-uniq";
        var versions = ["0.20","0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-uniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-uniq/README.html
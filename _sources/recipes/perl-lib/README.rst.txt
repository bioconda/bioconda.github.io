:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lib'
.. highlight: bash

perl-lib
========

.. conda:recipe:: perl-lib/0.63
   :replaces_section_title:
   :noindex:

   manipulate \@INC at compile time

   :homepage: http://metacpan.org/pod/lib
   :license: perl_5
   :recipe: /`perl-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lib>`_/`0.63 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lib/0.63>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lib/0.63/meta.yaml>`_

   


.. conda:package:: perl-lib

   |downloads_perl-lib| |docker_perl-lib|

   :versions:
      
      

      ``0.63-1``,  ``0.63-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-lib

   and update with::

      conda update perl-lib

   or use the docker container::

      docker pull quay.io/biocontainers/perl-lib:<tag>

   (see `perl-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lib| image:: https://img.shields.io/conda/dn/bioconda/perl-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lib
   :alt:   (downloads)
.. |docker_perl-lib| image:: https://quay.io/repository/biocontainers/perl-lib/status
   :target: https://quay.io/repository/biocontainers/perl-lib
.. _`perl-lib/tags`: https://quay.io/repository/biocontainers/perl-lib?tab=tags


.. raw:: html

    <script>
        var package = "perl-lib";
        var versions = ["0.63","0.63"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lib/README.html
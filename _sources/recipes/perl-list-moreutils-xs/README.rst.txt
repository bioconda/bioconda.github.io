:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-moreutils-xs'
.. highlight: bash

perl-list-moreutils-xs
======================

.. conda:recipe:: perl-list-moreutils-xs
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util in XS

   :homepage: https://metacpan.org/release/List-MoreUtils-XS
   :license: apache_2_0
   :recipe: /`perl-list-moreutils-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils-xs/meta.yaml>`_

   


.. conda:package:: perl-list-moreutils-xs

   |downloads_perl-list-moreutils-xs| |docker_perl-list-moreutils-xs|

   :versions:
      
      

      ``0.428-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-list-moreutils-xs

   and update with::

      conda update perl-list-moreutils-xs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-list-moreutils-xs:<tag>

   (see `perl-list-moreutils-xs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-moreutils-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-list-moreutils-xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-moreutils-xs
   :alt:   (downloads)
.. |docker_perl-list-moreutils-xs| image:: https://quay.io/repository/biocontainers/perl-list-moreutils-xs/status
   :target: https://quay.io/repository/biocontainers/perl-list-moreutils-xs
.. _`perl-list-moreutils-xs/tags`: https://quay.io/repository/biocontainers/perl-list-moreutils-xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-moreutils-xs";
        var versions = ["0.428"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-moreutils-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-moreutils-xs/README.html
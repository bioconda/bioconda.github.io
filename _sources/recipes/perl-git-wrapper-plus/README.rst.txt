:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-git-wrapper-plus'
.. highlight: bash

perl-git-wrapper-plus
=====================

.. conda:recipe:: perl-git-wrapper-plus
   :replaces_section_title:
   :noindex:

   A Toolkit for working with Git\:\:Wrapper in an Object Oriented Way.

   :homepage: https://github.com/kentnl/Git-Wrapper-Plus
   :license: perl_5
   :recipe: /`perl-git-wrapper-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper-plus/meta.yaml>`_

   


.. conda:package:: perl-git-wrapper-plus

   |downloads_perl-git-wrapper-plus| |docker_perl-git-wrapper-plus|

   :versions:
      
      

      ``0.004011-0``,  ``0.004010-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :depends perl-git-wrapper: 
   :depends perl-moo: 
   :depends perl-path-tiny: 
   :depends perl-sort-versions: 
   :depends perl-sub-exporter-progressive: 
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-git-wrapper-plus

   and update with::

      conda update perl-git-wrapper-plus

   or use the docker container::

      docker pull quay.io/biocontainers/perl-git-wrapper-plus:<tag>

   (see `perl-git-wrapper-plus/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-git-wrapper-plus| image:: https://img.shields.io/conda/dn/bioconda/perl-git-wrapper-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-git-wrapper-plus
   :alt:   (downloads)
.. |docker_perl-git-wrapper-plus| image:: https://quay.io/repository/biocontainers/perl-git-wrapper-plus/status
   :target: https://quay.io/repository/biocontainers/perl-git-wrapper-plus
.. _`perl-git-wrapper-plus/tags`: https://quay.io/repository/biocontainers/perl-git-wrapper-plus?tab=tags


.. raw:: html

    <script>
        var package = "perl-git-wrapper-plus";
        var versions = ["0.004011","0.004010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-git-wrapper-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-git-wrapper-plus/README.html
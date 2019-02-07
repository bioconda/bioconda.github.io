.. title:: Package Recipe 'perl-git-wrapper-plus'
.. highlight: bash


perl-git-wrapper-plus
=====================

.. conda:recipe:: perl-git-wrapper-plus
   :replaces_section_title:

   A Toolkit for working with Git\:\:Wrapper in an Object Oriented Way.

   :homepage: https://github.com/kentnl/Git-Wrapper-Plus
   :license: perl_5
   :recipe: /`perl-git-wrapper-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper-plus/meta.yaml>`_

   


.. conda:package:: perl-git-wrapper-plus

   |downloads_perl-git-wrapper-plus| |docker_perl-git-wrapper-plus|

   :versions: 0.004011, 0.004010

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-git-wrapper`  :conda:package:`perl-moo`  :conda:package:`perl-path-tiny`  :conda:package:`perl-sort-versions`  :conda:package:`perl-sub-exporter-progressive`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-git-wrapper-plus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-git-wrapper-plus

   and update with::

      conda update perl-git-wrapper-plus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-git-wrapper-plus


.. |required_by_perl-git-wrapper-plus| conda:required_by:: perl-git-wrapper-plus
.. |downloads_perl-git-wrapper-plus| image:: https://img.shields.io/conda/dn/bioconda/perl-git-wrapper-plus.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-git-wrapper-plus| image:: https://quay.io/repository/biocontainers/perl-git-wrapper-plus/status
   :target: https://quay.io/repository/biocontainers/perl-git-wrapper-plus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-git-wrapper-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-git-wrapper-plus/README.html


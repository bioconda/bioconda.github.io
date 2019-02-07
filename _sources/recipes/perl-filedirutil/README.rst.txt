.. title:: Package Recipe 'perl-filedirutil'
.. highlight: bash


perl-filedirutil
================

.. conda:recipe:: perl-filedirutil
   :replaces_section_title:

   A Moose Role for basic File IO

   :homepage: http://metacpan.org/pod/FileDirUtil
   :license: agpl_3
   :recipe: /`perl-filedirutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filedirutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filedirutil/meta.yaml>`_

   


.. conda:package:: perl-filedirutil

   |downloads_perl-filedirutil| |docker_perl-filedirutil|

   :versions: v0.03

   :depends: :conda:package:`perl` >5.22,<6.0 :conda:package:`perl-moose`  :conda:package:`perl-namespace-autoclean`  :conda:package:`perl-params-coerce`  :conda:package:`perl-path-class`  

   :required~by: |required_by_perl-filedirutil|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-filedirutil

   and update with::

      conda update perl-filedirutil

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-filedirutil


.. |required_by_perl-filedirutil| conda:required_by:: perl-filedirutil
.. |downloads_perl-filedirutil| image:: https://img.shields.io/conda/dn/bioconda/perl-filedirutil.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-filedirutil| image:: https://quay.io/repository/biocontainers/perl-filedirutil/status
   :target: https://quay.io/repository/biocontainers/perl-filedirutil







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-filedirutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-filedirutil/README.html


:orphan:  .. only available via index, not via toctree

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

   :versions: v0.04-0, v0.03-2, v0.03-1, v0.03-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-coerce: 
   :depends perl-path-class: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-filedirutil

   and update with::

      conda update perl-filedirutil

   or use the docker container::

      docker pull quay.io/biocontainers/perl-filedirutil:<tag>

   (see `perl-filedirutil/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-filedirutil| image:: https://img.shields.io/conda/dn/bioconda/perl-filedirutil.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-filedirutil
   :alt:   (downloads)
.. |docker_perl-filedirutil| image:: https://quay.io/repository/biocontainers/perl-filedirutil/status
   :target: https://quay.io/repository/biocontainers/perl-filedirutil
.. _`perl-filedirutil/tags`: https://quay.io/repository/biocontainers/perl-filedirutil?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-filedirutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-filedirutil/README.html
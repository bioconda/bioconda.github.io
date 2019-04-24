:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-uplevel'
.. highlight: bash

perl-sub-uplevel
================

.. conda:recipe:: perl-sub-uplevel
   :replaces_section_title:

   apparently run a function in a higher stack frame

   :homepage: https://github.com/dagolden/Sub-Uplevel
   :license: perl_5
   :recipe: /`perl-sub-uplevel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-uplevel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-uplevel/meta.yaml>`_

   


.. conda:package:: perl-sub-uplevel

   |downloads_perl-sub-uplevel| |docker_perl-sub-uplevel|

   :versions: 0.2800-1, 0.2800-0, 0.25-3, 0.25-2, 0.25-1, 0.25-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-uplevel

   and update with::

      conda update perl-sub-uplevel

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-uplevel:<tag>

   (see `perl-sub-uplevel/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-uplevel| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-uplevel.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-sub-uplevel| image:: https://quay.io/repository/biocontainers/perl-sub-uplevel/status
   :target: https://quay.io/repository/biocontainers/perl-sub-uplevel
.. _`perl-sub-uplevel/tags`: https://quay.io/repository/biocontainers/perl-sub-uplevel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-uplevel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-uplevel/README.html
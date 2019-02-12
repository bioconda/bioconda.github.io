:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-import-into'
.. highlight: bash

perl-import-into
================

.. conda:recipe:: perl-import-into
   :replaces_section_title:

   Import packages into other packages

   :homepage: http://metacpan.org/pod/Import::Into
   :license: perl_5
   :recipe: /`perl-import-into <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-import-into>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-import-into/meta.yaml>`_

   


.. conda:package:: perl-import-into

   |downloads_perl-import-into| |docker_perl-import-into|

   :versions: 1.002005-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-module-runtime: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-import-into

   and update with::

      conda update perl-import-into

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-import-into:<tag>

   (see `perl-import-into/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-import-into| image:: https://img.shields.io/conda/dn/bioconda/perl-import-into.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-import-into| image:: https://quay.io/repository/biocontainers/perl-import-into/status
   :target: https://quay.io/repository/biocontainers/perl-import-into
.. _`perl-import-into/tags`: https://quay.io/repository/biocontainers/perl-import-into?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-import-into/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-import-into/README.html
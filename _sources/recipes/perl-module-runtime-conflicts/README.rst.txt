:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-runtime-conflicts'
.. highlight: bash

perl-module-runtime-conflicts
=============================

.. conda:recipe:: perl-module-runtime-conflicts
   :replaces_section_title:

   Provide information on conflicts for Module\:\:Runtime

   :homepage: https://github.com/karenetheridge/Module-Runtime-Conflicts
   :license: perl_5
   :recipe: /`perl-module-runtime-conflicts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-runtime-conflicts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-runtime-conflicts/meta.yaml>`_

   


.. conda:package:: perl-module-runtime-conflicts

   |downloads_perl-module-runtime-conflicts| |docker_perl-module-runtime-conflicts|

   :versions: 0.003-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-dist-checkconflicts: 
   
   :depends perl-module-runtime: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-module-runtime-conflicts

   and update with::

      conda update perl-module-runtime-conflicts

   or use the docker container::

      docker pull quay.io/biocontainers/perl-module-runtime-conflicts:<tag>

   (see `perl-module-runtime-conflicts/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-runtime-conflicts| image:: https://img.shields.io/conda/dn/bioconda/perl-module-runtime-conflicts.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-module-runtime-conflicts| image:: https://quay.io/repository/biocontainers/perl-module-runtime-conflicts/status
   :target: https://quay.io/repository/biocontainers/perl-module-runtime-conflicts
.. _`perl-module-runtime-conflicts/tags`: https://quay.io/repository/biocontainers/perl-module-runtime-conflicts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-runtime-conflicts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-runtime-conflicts/README.html
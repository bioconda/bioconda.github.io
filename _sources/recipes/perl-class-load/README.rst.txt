:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-load'
.. highlight: bash

perl-class-load
===============

.. conda:recipe:: perl-class-load
   :replaces_section_title:

   A working \(require \"Class\:\:Name\"\) and more

   :homepage: https://github.com/moose/Class-Load
   :license: perl_5
   :recipe: /`perl-class-load <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-load>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-load/meta.yaml>`_

   


.. conda:package:: perl-class-load

   |downloads_perl-class-load| |docker_perl-class-load|

   :versions: 0.25-0, 0.23-1, 0.23-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-data-optlist: 
   :depends perl-exporter: 
   :depends perl-module-implementation: 
   :depends perl-module-runtime: 
   :depends perl-package-stash: 
   :depends perl-try-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-load

   and update with::

      conda update perl-class-load

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-load:<tag>

   (see `perl-class-load/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-load| image:: https://img.shields.io/conda/dn/bioconda/perl-class-load.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-class-load
   :alt:   (downloads)
.. |docker_perl-class-load| image:: https://quay.io/repository/biocontainers/perl-class-load/status
   :target: https://quay.io/repository/biocontainers/perl-class-load
.. _`perl-class-load/tags`: https://quay.io/repository/biocontainers/perl-class-load?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-load/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-load/README.html
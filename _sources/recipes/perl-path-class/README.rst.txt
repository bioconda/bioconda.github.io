:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-path-class'
.. highlight: bash

perl-path-class
===============

.. conda:recipe:: perl-path-class
   :replaces_section_title:

   Cross\-platform path specification manipulation

   :homepage: http://metacpan.org/pod/Path::Class
   :license: perl_5
   :recipe: /`perl-path-class <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-class>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-class/meta.yaml>`_

   


.. conda:package:: perl-path-class

   |downloads_perl-path-class| |docker_perl-path-class|

   :versions: 0.37-1, 0.37-0, 0.36-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :depends perl-file-path: 
   
   :depends perl-file-temp: 
   
   :depends perl-parent: 
   
   :depends perl-perl-ostype: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-path-class

   and update with::

      conda update perl-path-class

   or use the docker container::

      docker pull quay.io/biocontainers/perl-path-class:<tag>

   (see `perl-path-class/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-path-class| image:: https://img.shields.io/conda/dn/bioconda/perl-path-class.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-path-class| image:: https://quay.io/repository/biocontainers/perl-path-class/status
   :target: https://quay.io/repository/biocontainers/perl-path-class
.. _`perl-path-class/tags`: https://quay.io/repository/biocontainers/perl-path-class?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-path-class/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-path-class/README.html
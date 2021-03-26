:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-yaml-pp'
.. highlight: bash

perl-yaml-pp
============

.. conda:recipe:: perl-yaml-pp/0.021
   :replaces_section_title:
   :noindex:

   YAML 1.2 Processor

   :homepage: http://metacpan.org/pod/YAML::PP
   :license: perl artistic
   :recipe: /`perl-yaml-pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-pp>`_/`0.021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-pp/0.021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-pp/0.021/meta.yaml>`_

   


.. conda:package:: perl-yaml-pp

   |downloads_perl-yaml-pp| |docker_perl-yaml-pp|

   :versions:
      
      

      ``0.021-1``,  ``0.021-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-data-dumper: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :depends perl-mime-base64: 
   :depends perl-module-load: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-yaml-pp

   and update with::

      conda update perl-yaml-pp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-yaml-pp:<tag>

   (see `perl-yaml-pp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-yaml-pp| image:: https://img.shields.io/conda/dn/bioconda/perl-yaml-pp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-yaml-pp
   :alt:   (downloads)
.. |docker_perl-yaml-pp| image:: https://quay.io/repository/biocontainers/perl-yaml-pp/status
   :target: https://quay.io/repository/biocontainers/perl-yaml-pp
.. _`perl-yaml-pp/tags`: https://quay.io/repository/biocontainers/perl-yaml-pp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-yaml-pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-yaml-pp/README.html
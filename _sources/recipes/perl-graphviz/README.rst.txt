:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphviz'
.. highlight: bash

perl-graphviz
=============

.. conda:recipe:: perl-graphviz
   :replaces_section_title:

   Interface to AT\&T\'s GraphViz. Deprecated. See GraphViz2

   :homepage: http://metacpan.org/pod/GraphViz
   :license: perl_5
   :recipe: /`perl-graphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphviz/meta.yaml>`_

   


.. conda:package:: perl-graphviz

   |downloads_perl-graphviz| |docker_perl-graphviz|

   :versions: 2.24-0, 2.20-1
   
   :depends graphviz: >=2.38.0,<3.0a0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-ipc-run: 
   :depends perl-lib: 
   :depends perl-parse-recdescent: 
   :depends perl-pod-usage: 
   :depends perl-time-hires: 
   :depends perl-xml-twig: 
   :depends perl-xml-xpath: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-graphviz

   and update with::

      conda update perl-graphviz

   or use the docker container::

      docker pull quay.io/biocontainers/perl-graphviz:<tag>

   (see `perl-graphviz/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graphviz| image:: https://img.shields.io/conda/dn/bioconda/perl-graphviz.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-graphviz| image:: https://quay.io/repository/biocontainers/perl-graphviz/status
   :target: https://quay.io/repository/biocontainers/perl-graphviz
.. _`perl-graphviz/tags`: https://quay.io/repository/biocontainers/perl-graphviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphviz/README.html
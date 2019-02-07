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

   :versions: 2.24, 2.20

   :depends: :conda:package:`graphviz` >=2.38.0,<3.0a0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-file-which`  :conda:package:`perl-getopt-long`  :conda:package:`perl-ipc-run`  :conda:package:`perl-lib`  :conda:package:`perl-parse-recdescent`  :conda:package:`perl-pod-usage`  :conda:package:`perl-time-hires`  :conda:package:`perl-xml-twig`  :conda:package:`perl-xml-xpath`  

   :required~by: |required_by_perl-graphviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-graphviz

   and update with::

      conda update perl-graphviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-graphviz


.. |required_by_perl-graphviz| conda:required_by:: perl-graphviz
.. |downloads_perl-graphviz| image:: https://img.shields.io/conda/dn/bioconda/perl-graphviz.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-graphviz| image:: https://quay.io/repository/biocontainers/perl-graphviz/status
   :target: https://quay.io/repository/biocontainers/perl-graphviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphviz/README.html


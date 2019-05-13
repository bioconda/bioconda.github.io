:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graph'
.. highlight: bash

perl-graph
==========

.. conda:recipe:: perl-graph
   :replaces_section_title:

   a Perl extension for keeping data partially sorted

   :homepage: http://metacpan.org/pod/Graph
   :license: perl_5
   :recipe: /`perl-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graph/meta.yaml>`_

   


.. conda:package:: perl-graph

   |downloads_perl-graph| |docker_perl-graph|

   :versions: 0.9704-1, 0.9704-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-graph

   and update with::

      conda update perl-graph

   or use the docker container::

      docker pull quay.io/biocontainers/perl-graph:<tag>

   (see `perl-graph/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-graph| image:: https://img.shields.io/conda/dn/bioconda/perl-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graph
   :alt:   (downloads)
.. |docker_perl-graph| image:: https://quay.io/repository/biocontainers/perl-graph/status
   :target: https://quay.io/repository/biocontainers/perl-graph
.. _`perl-graph/tags`: https://quay.io/repository/biocontainers/perl-graph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graph/README.html
.. title:: Package Recipe 'perl-gdgraph'
.. highlight: bash


perl-gdgraph
============

.. conda:recipe:: perl-gdgraph
   :replaces_section_title:

   Produces charts with GD

   :homepage: http://metacpan.org/pod/GDGraph
   :license: perl_5
   :recipe: /`perl-gdgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gdgraph/meta.yaml>`_

   


.. conda:package:: perl-gdgraph

   |downloads_perl-gdgraph| |docker_perl-gdgraph|

   :versions: 1.54, 1.49

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-gd`  :conda:package:`perl-gdtextutil`  

   :required~by: |required_by_perl-gdgraph|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gdgraph

   and update with::

      conda update perl-gdgraph

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-gdgraph


.. |required_by_perl-gdgraph| conda:required_by:: perl-gdgraph
.. |downloads_perl-gdgraph| image:: https://img.shields.io/conda/dn/bioconda/perl-gdgraph.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-gdgraph| image:: https://quay.io/repository/biocontainers/perl-gdgraph/status
   :target: https://quay.io/repository/biocontainers/perl-gdgraph







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gdgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gdgraph/README.html


.. title:: Package Recipe 'perl-algorithm-cluster'
.. highlight: bash


perl-algorithm-cluster
======================

.. conda:recipe:: perl-algorithm-cluster
   :replaces_section_title:

   Perl interface to the C Clustering Library

   :homepage: http://metacpan.org/pod/Algorithm::Cluster
   :license: unknown
   :recipe: /`perl-algorithm-cluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-cluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-cluster/meta.yaml>`_

   


.. conda:package:: perl-algorithm-cluster

   |downloads_perl-algorithm-cluster| |docker_perl-algorithm-cluster|

   :versions: 1.57, 1.56, 1.52

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-algorithm-cluster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-algorithm-cluster

   and update with::

      conda update perl-algorithm-cluster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-algorithm-cluster


.. |required_by_perl-algorithm-cluster| conda:required_by:: perl-algorithm-cluster
.. |downloads_perl-algorithm-cluster| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-cluster.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-algorithm-cluster| image:: https://quay.io/repository/biocontainers/perl-algorithm-cluster/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-cluster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-cluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-cluster/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-algorithm-cluster'
.. highlight: bash

perl-algorithm-cluster
======================

.. conda:recipe:: perl-algorithm-cluster
   :replaces_section_title:
   :noindex:

   Perl interface to the C Clustering Library

   :homepage: http://metacpan.org/pod/Algorithm::Cluster
   :license: unknown
   :recipe: /`perl-algorithm-cluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-cluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-cluster/meta.yaml>`_

   


.. conda:package:: perl-algorithm-cluster

   |downloads_perl-algorithm-cluster| |docker_perl-algorithm-cluster|

   :versions:
      
      

      ``1.58-0``,  ``1.57-0``,  ``1.56-0``,  ``1.52-1``,  ``1.52-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-algorithm-cluster

   and update with::

      conda update perl-algorithm-cluster

   or use the docker container::

      docker pull quay.io/biocontainers/perl-algorithm-cluster:<tag>

   (see `perl-algorithm-cluster/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-algorithm-cluster| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-cluster.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-algorithm-cluster
   :alt:   (downloads)
.. |docker_perl-algorithm-cluster| image:: https://quay.io/repository/biocontainers/perl-algorithm-cluster/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-cluster
.. _`perl-algorithm-cluster/tags`: https://quay.io/repository/biocontainers/perl-algorithm-cluster?tab=tags


.. raw:: html

    <script>
        var package = "perl-algorithm-cluster";
        var versions = ["1.58","1.57","1.56","1.52","1.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-cluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-cluster/README.html
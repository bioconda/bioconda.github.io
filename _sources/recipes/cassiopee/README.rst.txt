.. title:: Package Recipe 'cassiopee'
.. highlight: bash


cassiopee
=========

.. conda:recipe:: cassiopee
   :replaces_section_title:

   scan an input genomic sequence \(dna\/rna\/protein\) and search for a subsequence with exact match or allowing substitutions \(Hamming distance\) and\/or insertion\/deletions

   :homepage: https://github.com/osallou/cassiopee-c
   :license: GPL-3+
   :recipe: /`cassiopee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee/meta.yaml>`_

   


.. conda:package:: cassiopee

   |downloads_cassiopee| |docker_cassiopee|

   :versions: 1.0.5

   :depends: :conda:package:`boost` ==1.64 :conda:package:`bzip2` 1.0.* :conda:package:`glog`  :conda:package:`icu` 58.* :conda:package:`zlib` ==1.2.8 

   :required~by: |required_by_cassiopee|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cassiopee

   and update with::

      conda update cassiopee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cassiopee


.. |required_by_cassiopee| conda:required_by:: cassiopee
.. |downloads_cassiopee| image:: https://img.shields.io/conda/dn/bioconda/cassiopee.svg?style=flat
   :alt:   (downloads)
.. |docker_cassiopee| image:: https://quay.io/repository/biocontainers/cassiopee/status
   :target: https://quay.io/repository/biocontainers/cassiopee







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassiopee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassiopee/README.html


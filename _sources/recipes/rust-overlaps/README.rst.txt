.. title:: Package Recipe 'rust-overlaps'
.. highlight: bash


rust-overlaps
=============

.. conda:recipe:: rust-overlaps
   :replaces_section_title:

   A fast and secure command line utilility for enumerating all suffix\-prefix
   overlaps within a set of sequences\, satisfying a user\-specified minimal
   overlap length and maximal error rate.

   :homepage: https://github.com/jbaaijens/rust-overlaps
   :license: MIT
   :recipe: /`rust-overlaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-overlaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-overlaps/meta.yaml>`_

   


.. conda:package:: rust-overlaps

   |downloads_rust-overlaps| |docker_rust-overlaps|

   :versions: 0.1.1

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_rust-overlaps|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rust-overlaps

   and update with::

      conda update rust-overlaps

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rust-overlaps


.. |required_by_rust-overlaps| conda:required_by:: rust-overlaps
.. |downloads_rust-overlaps| image:: https://img.shields.io/conda/dn/bioconda/rust-overlaps.svg?style=flat
   :alt:   (downloads)
.. |docker_rust-overlaps| image:: https://quay.io/repository/biocontainers/rust-overlaps/status
   :target: https://quay.io/repository/biocontainers/rust-overlaps







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-overlaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-overlaps/README.html


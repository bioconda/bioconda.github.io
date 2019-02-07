.. title:: Package Recipe 'cluster-picker'
.. highlight: bash


cluster-picker
==============

.. conda:recipe:: cluster-picker
   :replaces_section_title:

   The Cluster Picker identifies clusters in newick\-formatted trees containing thousands of sequences within a few minutes. Cut\-offs for within cluster genetic distance and bootstrap support are selected by the user.

   :homepage: http://hiv.bio.ed.ac.uk/software.html
   :license: GPLv3
   :recipe: /`cluster-picker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cluster-picker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cluster-picker/meta.yaml>`_

   


.. conda:package:: cluster-picker

   |downloads_cluster-picker| |docker_cluster-picker|

   :versions: 1.2.3

   :depends: :conda:package:`java-jdk`  

   :required~by: |required_by_cluster-picker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cluster-picker

   and update with::

      conda update cluster-picker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cluster-picker


.. |required_by_cluster-picker| conda:required_by:: cluster-picker
.. |downloads_cluster-picker| image:: https://img.shields.io/conda/dn/bioconda/cluster-picker.svg?style=flat
   :alt:   (downloads)
.. |docker_cluster-picker| image:: https://quay.io/repository/biocontainers/cluster-picker/status
   :target: https://quay.io/repository/biocontainers/cluster-picker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cluster-picker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cluster-picker/README.html


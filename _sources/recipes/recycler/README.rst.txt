.. title:: Package Recipe 'recycler'
.. highlight: bash


recycler
========

.. conda:recipe:: recycler
   :replaces_section_title:

   Recycler is a tool designed for extracting circular sequences from de novo assembly graphs

   :homepage: https://github.com/Shamir-Lab/Recycler
   :license: BSD / BSD-3-Clause
   :recipe: /`recycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recycler/meta.yaml>`_

   


.. conda:package:: recycler

   |downloads_recycler| |docker_recycler|

   :versions: 0.7, 0.6.2, 0.6, 0.6p1

   :depends: :conda:package:`networkx`  :conda:package:`nose`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 2.7* 

   :required~by: |required_by_recycler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install recycler

   and update with::

      conda update recycler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/recycler


.. |required_by_recycler| conda:required_by:: recycler
.. |downloads_recycler| image:: https://img.shields.io/conda/dn/bioconda/recycler.svg?style=flat
   :alt:   (downloads)
.. |docker_recycler| image:: https://quay.io/repository/biocontainers/recycler/status
   :target: https://quay.io/repository/biocontainers/recycler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recycler/README.html


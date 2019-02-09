.. title:: Package Recipe 'minnow'
.. highlight: bash


minnow
======

.. conda:recipe:: minnow
   :replaces_section_title:

   A principled framework for rapid simulation of dscRNA\-seq data at the read level

   :homepage: https://github.com/COMBINE-lab/minnow
   :license: GPLv3
   :recipe: /`minnow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minnow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minnow/meta.yaml>`_

   


.. conda:package:: minnow

   |downloads_minnow| |docker_minnow|

   :versions: 1.2, 1.1

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libcxx` >=4.0.1 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_minnow|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minnow

   and update with::

      conda update minnow

   or use the docker container::

      docker pull quay.io/repository/biocontainers/minnow


.. |required_by_minnow| conda:required_by:: minnow
.. |downloads_minnow| image:: https://img.shields.io/conda/dn/bioconda/minnow.svg?style=flat
   :alt:   (downloads)
.. |docker_minnow| image:: https://quay.io/repository/biocontainers/minnow/status
   :target: https://quay.io/repository/biocontainers/minnow







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minnow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minnow/README.html


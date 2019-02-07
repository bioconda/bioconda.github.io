.. title:: Package Recipe 'canu'
.. highlight: bash


canu
====

.. conda:recipe:: canu
   :replaces_section_title:

   Canu is a fork of the Celera Assembler designed for high\-noise single\-molecule sequencing.

   :homepage: http://canu.readthedocs.org/
   :developer docs: https://github.com/marbl/canu
   :license: GPL / GPLv2 and others
   :recipe: /`canu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/canu/meta.yaml>`_

   


.. conda:package:: canu

   |downloads_canu| |docker_canu|

   :versions: 1.8, 1.7.1, 1.7, 1.6, 1.5, 1.4, 1.3, 1.1

   :depends: :conda:package:`gnuplot` >=5.0.5 :conda:package:`libgcc-ng` >=4.9 :conda:package:`openjdk`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-filesys-df`  

   :required~by: |required_by_canu|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install canu

   and update with::

      conda update canu

   or use the docker container::

      docker pull quay.io/repository/biocontainers/canu


.. |required_by_canu| conda:required_by:: canu
.. |downloads_canu| image:: https://img.shields.io/conda/dn/bioconda/canu.svg?style=flat
   :alt:   (downloads)
.. |docker_canu| image:: https://quay.io/repository/biocontainers/canu/status
   :target: https://quay.io/repository/biocontainers/canu







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/canu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/canu/README.html


.. title:: Package Recipe 'prosolo'
.. highlight: bash


prosolo
=======

.. conda:recipe:: prosolo
   :replaces_section_title:

   A highly sensitive and accurate Bayesian caller for variants in single cell sequencing data.

   :homepage: https://github.com/prosolo/prosolo/tree/v0.6.1
   :license: GPLv3
   :recipe: /`prosolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosolo/meta.yaml>`_

   


.. conda:package:: prosolo

   |downloads_prosolo| |docker_prosolo|

   :versions: 0.6.1, 0.6.0, 0.5.0, 0.4.0, 0.3.1, 0.2.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`clangdev`  :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_prosolo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prosolo

   and update with::

      conda update prosolo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/prosolo


.. |required_by_prosolo| conda:required_by:: prosolo
.. |downloads_prosolo| image:: https://img.shields.io/conda/dn/bioconda/prosolo.svg?style=flat
   :alt:   (downloads)
.. |docker_prosolo| image:: https://quay.io/repository/biocontainers/prosolo/status
   :target: https://quay.io/repository/biocontainers/prosolo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosolo/README.html


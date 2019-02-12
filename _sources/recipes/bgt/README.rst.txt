.. title:: Package Recipe 'bgt'
.. highlight: bash


bgt
===

.. conda:recipe:: bgt
   :replaces_section_title:

   Flexible genotype query among 30\,000\+ samples whole\-genome.

   :homepage: https://github.com/lh3/bgt
   :license: MIT
   :recipe: /`bgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgt/meta.yaml>`_

   


.. conda:package:: bgt

   |downloads_bgt| |docker_bgt|

   :versions: r283, r277

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_bgt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bgt

   and update with::

      conda update bgt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bgt


.. |required_by_bgt| conda:required_by:: bgt
.. |downloads_bgt| image:: https://img.shields.io/conda/dn/bioconda/bgt.svg?style=flat
   :alt:   (downloads)
.. |docker_bgt| image:: https://quay.io/repository/biocontainers/bgt/status
   :target: https://quay.io/repository/biocontainers/bgt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgt/README.html


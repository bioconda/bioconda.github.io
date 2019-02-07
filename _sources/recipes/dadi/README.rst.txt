.. title:: Package Recipe 'dadi'
.. highlight: bash


dadi
====

.. conda:recipe:: dadi
   :replaces_section_title:

   DADI implements methods for demographic history and selection inference from genetic data\, based on diffusion approximations to the allele frequency spectrum.

   :homepage: https://bitbucket.org/gutenkunstlab/dadi
   :license: Custom
   :recipe: /`dadi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadi/meta.yaml>`_

   


.. conda:package:: dadi

   |downloads_dadi| |docker_dadi|

   :versions: 1.7.0

   :depends: :conda:package:`ipython`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_dadi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dadi

   and update with::

      conda update dadi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dadi


.. |required_by_dadi| conda:required_by:: dadi
.. |downloads_dadi| image:: https://img.shields.io/conda/dn/bioconda/dadi.svg?style=flat
   :alt:   (downloads)
.. |docker_dadi| image:: https://quay.io/repository/biocontainers/dadi/status
   :target: https://quay.io/repository/biocontainers/dadi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadi/README.html


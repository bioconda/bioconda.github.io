:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepac'
.. highlight: bash

deepac
======

.. conda:recipe:: deepac
   :replaces_section_title:

   Predicting pathogenic potentials of novel DNA with reverse\-complement neural networks.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :license: MIT / MIT
   :recipe: /`deepac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac/meta.yaml>`_

   


.. conda:package:: deepac

   |downloads_deepac| |docker_deepac|

   :versions: 0.9.2-0, 0.9.1-0
   
   :depends biopython: 
   :depends h5py: 
   :depends keras: >=2.2.4
   :depends matplotlib: 
   :depends numpy: >=1.15
   :depends psutil: >=5.6.1
   :depends python: >=3,<3.7
   :depends scikit-learn: 
   :depends tensorflow: >=1.12
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepac

   and update with::

      conda update deepac

   or use the docker container::

      docker pull quay.io/biocontainers/deepac:<tag>

   (see `deepac/tags`_ for valid values for ``<tag>``)


.. |downloads_deepac| image:: https://img.shields.io/conda/dn/bioconda/deepac.svg?style=flat
   :target: https://anaconda.org/bioconda/deepac
   :alt:   (downloads)
.. |docker_deepac| image:: https://quay.io/repository/biocontainers/deepac/status
   :target: https://quay.io/repository/biocontainers/deepac
.. _`deepac/tags`: https://quay.io/repository/biocontainers/deepac?tab=tags






Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepac/README.html
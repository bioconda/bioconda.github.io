:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepacvir'
.. highlight: bash

deepacvir
=========

.. conda:recipe:: deepacvir
   :replaces_section_title:

   Detecting novel human viruses from DNA reads with reverse\-complement neural networks.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :developer docs: https://gitlab.com/JakubBartoszewicz/deepac-vir
   :license: MIT / MIT
   :recipe: /`deepacvir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacvir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacvir/meta.yaml>`_

   


.. conda:package:: deepacvir

   |downloads_deepacvir| |docker_deepacvir|

   :versions: 0.2.0-0, 0.1.0-0
   
   :depends deepac: >=0.11.0
   :depends numpy: >=1.18.1
   :depends python: >=3.6
   :depends scikit-learn: >=0.22.1
   :depends tensorflow: >=2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepacvir

   and update with::

      conda update deepacvir

   or use the docker container::

      docker pull quay.io/biocontainers/deepacvir:<tag>

   (see `deepacvir/tags`_ for valid values for ``<tag>``)


.. |downloads_deepacvir| image:: https://img.shields.io/conda/dn/bioconda/deepacvir.svg?style=flat
   :target: https://anaconda.org/bioconda/deepacvir
   :alt:   (downloads)
.. |docker_deepacvir| image:: https://quay.io/repository/biocontainers/deepacvir/status
   :target: https://quay.io/repository/biocontainers/deepacvir
.. _`deepacvir/tags`: https://quay.io/repository/biocontainers/deepacvir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepacvir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepacvir/README.html
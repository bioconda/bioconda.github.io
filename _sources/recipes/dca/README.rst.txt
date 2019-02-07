.. title:: Package Recipe 'dca'
.. highlight: bash


dca
===

.. conda:recipe:: dca
   :replaces_section_title:

   Count autoencoder for scRNA\-seq denoising

   :homepage: https://github.com/theislab/dca
   :license: APACHE / Apache Software
   :recipe: /`dca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca/meta.yaml>`_
   :links: doi: :doi:`10.1101/300681`

   


.. conda:package:: dca

   |downloads_dca| |docker_dca|

   :versions: 0.2.2

   :depends: :conda:package:`h5py`  :conda:package:`keras` >=2.0.8 :conda:package:`kopt`  :conda:package:`numpy` >=1.7 :conda:package:`pandas`  :conda:package:`python` >=3.6 :conda:package:`scanpy`  :conda:package:`scikit-learn`  :conda:package:`six` >=1.10.0 

   :required~by: |required_by_dca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dca

   and update with::

      conda update dca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dca


.. |required_by_dca| conda:required_by:: dca
.. |downloads_dca| image:: https://img.shields.io/conda/dn/bioconda/dca.svg?style=flat
   :alt:   (downloads)
.. |docker_dca| image:: https://quay.io/repository/biocontainers/dca/status
   :target: https://quay.io/repository/biocontainers/dca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dca/README.html


.. title:: Package Recipe 'scvi'
.. highlight: bash


scvi
====

.. conda:recipe:: scvi
   :replaces_section_title:

   Single\-cell Variational Inference

   :homepage: https://github.com/YosefLab/scVI
   :documentation: https://scvi.readthedocs.io
   
   :license: MIT / MIT License
   :recipe: /`scvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi/meta.yaml>`_

   Single\-cell Variational Inference


.. conda:package:: scvi

   |downloads_scvi| |docker_scvi|

   :versions: 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.6, 0.1.5, 0.1.4, 0.1.3, 0.1.2

   :depends: :conda:package:`anndata` >=0.6 :conda:package:`h5py` >=2.8 :conda:package:`ipython` >=7 :conda:package:`jupyter` >=1.0.0 :conda:package:`loompy` 2.0.9 :conda:package:`matplotlib` >=2.0 :conda:package:`nbconvert` >=5.4.0 :conda:package:`nbformat` >=4.4.0 :conda:package:`numpy` >=1.0 :conda:package:`pandas` >=0.2 :conda:package:`python` >=3.6 :conda:package:`pytorch` >=0.4.1 :conda:package:`scikit-learn` >=0.18 :conda:package:`scipy` >=1.1 :conda:package:`tqdm` >=4 :conda:package:`xlrd` >=1.0 

   :required~by: |required_by_scvi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scvi

   and update with::

      conda update scvi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scvi


.. |required_by_scvi| conda:required_by:: scvi
.. |downloads_scvi| image:: https://img.shields.io/conda/dn/bioconda/scvi.svg?style=flat
   :alt:   (downloads)
.. |docker_scvi| image:: https://quay.io/repository/biocontainers/scvi/status
   :target: https://quay.io/repository/biocontainers/scvi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvi/README.html


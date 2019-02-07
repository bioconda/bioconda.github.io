.. title:: Package Recipe 'selene-sdk'
.. highlight: bash


selene-sdk
==========

.. conda:recipe:: selene-sdk
   :replaces_section_title:

   Framework for developing sequence\-level deep learning networks.

   :homepage: https://github.com/FunctionLab/selene
   :license: BSD 3-clause clear
   :recipe: /`selene-sdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selene-sdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selene-sdk/meta.yaml>`_

   


.. conda:package:: selene-sdk

   |downloads_selene-sdk| |docker_selene-sdk|

   :versions: 0.2.0, 0.1.3, 0.1.2, 0.0.1

   :depends: :conda:package:`h5py`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`plotly`  :conda:package:`pyfaidx`  :conda:package:`pytabix`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pytorch`  :conda:package:`pyyaml`  :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`statsmodels`  :conda:package:`torchvision`  

   :required~by: |required_by_selene-sdk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selene-sdk

   and update with::

      conda update selene-sdk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/selene-sdk


.. |required_by_selene-sdk| conda:required_by:: selene-sdk
.. |downloads_selene-sdk| image:: https://img.shields.io/conda/dn/bioconda/selene-sdk.svg?style=flat
   :alt:   (downloads)
.. |docker_selene-sdk| image:: https://quay.io/repository/biocontainers/selene-sdk/status
   :target: https://quay.io/repository/biocontainers/selene-sdk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selene-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selene-sdk/README.html


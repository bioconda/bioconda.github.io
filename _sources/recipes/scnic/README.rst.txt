.. title:: Package Recipe 'scnic'
.. highlight: bash


scnic
=====

.. conda:recipe:: scnic
   :replaces_section_title:

   SCNIC\: Sparse Cooccurence Network Investigation for Compositional data

   :homepage: https://github.com/shafferm/SCNIC
   :license: BSD
   :recipe: /`scnic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic/meta.yaml>`_

   


.. conda:package:: scnic

   |downloads_scnic| |docker_scnic|

   :versions: 0.6.0, 0.5.3, 0.5.1

   :depends: :conda:package:`armadillo` 8.* :conda:package:`biom-format`  :conda:package:`fastspar` 0.0.6.* :conda:package:`h5py`  :conda:package:`matplotlib`  :conda:package:`networkx` >2 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3 :conda:package:`scikit-bio`  :conda:package:`scipy`  :conda:package:`seaborn`  :conda:package:`statsmodels`  :conda:package:`tqdm`  

   :required~by: |required_by_scnic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scnic

   and update with::

      conda update scnic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scnic


.. |required_by_scnic| conda:required_by:: scnic
.. |downloads_scnic| image:: https://img.shields.io/conda/dn/bioconda/scnic.svg?style=flat
   :alt:   (downloads)
.. |docker_scnic| image:: https://quay.io/repository/biocontainers/scnic/status
   :target: https://quay.io/repository/biocontainers/scnic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scnic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scnic/README.html


.. title:: Package Recipe 'kipoi_veff'
.. highlight: bash


kipoi_veff
==========

.. conda:recipe:: kipoi_veff
   :replaces_section_title:

   kipoi\_veff\: variant effect prediction plugin for Kipoi

   :homepage: https://github.com/kipoi/kipoi-veff
   :documentation: https://kipoi.org/veff-docs/
   
   :license: MIT / MIT license
   :recipe: /`kipoi_veff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi_veff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi_veff/meta.yaml>`_

   kipoi\_veff\: variant effect prediction plugin for Kipoi


.. conda:package:: kipoi_veff

   |downloads_kipoi_veff| |docker_kipoi_veff|

   :versions: 0.2.1, 0.2.0, 0.1.2

   :depends: :conda:package:`colorlog`  :conda:package:`cookiecutter`  :conda:package:`cyvcf2`  :conda:package:`deepdish`  :conda:package:`descartes`  :conda:package:`future`  :conda:package:`h5py`  :conda:package:`intervaltree`  :conda:package:`kipoi` >=0.5.5 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python`  :conda:package:`pyvcf`  :conda:package:`seaborn`  :conda:package:`shapely`  :conda:package:`tqdm`  :conda:package:`urllib3` >=1.21.1,<1.23 

   :required~by: |required_by_kipoi_veff|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoi_veff

   and update with::

      conda update kipoi_veff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kipoi_veff


.. |required_by_kipoi_veff| conda:required_by:: kipoi_veff
.. |downloads_kipoi_veff| image:: https://img.shields.io/conda/dn/bioconda/kipoi_veff.svg?style=flat
   :alt:   (downloads)
.. |docker_kipoi_veff| image:: https://quay.io/repository/biocontainers/kipoi_veff/status
   :target: https://quay.io/repository/biocontainers/kipoi_veff







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi_veff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi_veff/README.html


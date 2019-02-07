.. title:: Package Recipe 'anndata'
.. highlight: bash


anndata
=======

.. conda:recipe:: anndata
   :replaces_section_title:

   An annotated data matrix.

   :homepage: https://github.com/theislab/anndata
   :documentation: http://anndata.rtfd.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`anndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anndata/meta.yaml>`_

   An annotated data matrix.


.. conda:package:: anndata

   |downloads_anndata| |docker_anndata|

   :versions: 0.6.17, 0.6.16, 0.6.15, 0.6.14, 0.6.13, 0.6.11, 0.6.10, 0.6.9, 0.6.8, 0.6.6, 0.6.5, 0.6.4

   :depends: :conda:package:`h5py`  :conda:package:`natsort`  :conda:package:`pandas` >=0.21.0 :conda:package:`python` >=3.5 :conda:package:`scipy`  

   :required~by: |required_by_anndata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anndata

   and update with::

      conda update anndata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/anndata


.. |required_by_anndata| conda:required_by:: anndata
.. |downloads_anndata| image:: https://img.shields.io/conda/dn/bioconda/anndata.svg?style=flat
   :alt:   (downloads)
.. |docker_anndata| image:: https://quay.io/repository/biocontainers/anndata/status
   :target: https://quay.io/repository/biocontainers/anndata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anndata/README.html


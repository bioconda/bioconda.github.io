.. title:: Package Recipe 'plantcv'
.. highlight: bash


plantcv
=======

.. conda:recipe:: plantcv
   :replaces_section_title:

   An image processing package for plant phenotyping.

   :homepage: https://plantcv.danforthcenter.org
   :documentation: https://plantcv.readthedocs.io
   
   :developer docs: https://github.com/danforthcenter/plantcv
   :license: MIT / MIT License
   :recipe: /`plantcv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plantcv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plantcv/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.molp.2015.06.005`, doi: :doi:`10.1109/WNYIPW.2016.7904790`, doi: :doi:`10.7717/peerj.4088`, doi: :doi:`10.7717/peerj.5727`

   PlantCV is a Python package for building modular image analysis workflows for plant phenotyping.


.. conda:package:: plantcv

   |downloads_plantcv| |docker_plantcv|

   :versions: 3.0.5, 3.0.3

   :depends: :conda:package:`matplotlib` >=1.5 :conda:package:`numpy` >=1.11 :conda:package:`opencv` <4 :conda:package:`pandas`  :conda:package:`plotnine`  :conda:package:`python`  :conda:package:`python-dateutil`  :conda:package:`scikit-image`  :conda:package:`scipy`  

   :required~by: |required_by_plantcv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plantcv

   and update with::

      conda update plantcv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plantcv


.. |required_by_plantcv| conda:required_by:: plantcv
.. |downloads_plantcv| image:: https://img.shields.io/conda/dn/bioconda/plantcv.svg?style=flat
   :alt:   (downloads)
.. |docker_plantcv| image:: https://quay.io/repository/biocontainers/plantcv/status
   :target: https://quay.io/repository/biocontainers/plantcv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plantcv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plantcv/README.html


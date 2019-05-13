:orphan:  .. only available via index, not via toctree

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

   :versions: 3.2.0-0, 3.1.0-0, 3.0.5-0, 3.0.3-0
   
   :depends matplotlib: >=1.5
   :depends numpy: >=1.11
   :depends opencv: 3.4.4
   :depends pandas: 
   :depends plotnine: 
   :depends python: 
   :depends python-dateutil: 
   :depends scikit-image: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plantcv

   and update with::

      conda update plantcv

   or use the docker container::

      docker pull quay.io/biocontainers/plantcv:<tag>

   (see `plantcv/tags`_ for valid values for ``<tag>``)


.. |downloads_plantcv| image:: https://img.shields.io/conda/dn/bioconda/plantcv.svg?style=flat
   :target: https://anaconda.org/bioconda/plantcv
   :alt:   (downloads)
.. |docker_plantcv| image:: https://quay.io/repository/biocontainers/plantcv/status
   :target: https://quay.io/repository/biocontainers/plantcv
.. _`plantcv/tags`: https://quay.io/repository/biocontainers/plantcv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plantcv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plantcv/README.html
.. title:: Package Recipe 'slicedimage'
.. highlight: bash


slicedimage
===========

.. conda:recipe:: slicedimage
   :replaces_section_title:

   sliced imaging data

   :homepage: https://github.com/spacetx/slicedimage
   :license: MIT
   :recipe: /`slicedimage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slicedimage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slicedimage/meta.yaml>`_

   


.. conda:package:: slicedimage

   |downloads_slicedimage| |docker_slicedimage|

   :versions: 1.0.3, 1.0.2, 1.0.1, 1.0.0, 0.1.0, 0.0.7, 0.0.6, 0.0.5, 0.0.4, 0.0.3, 0.0.2, 0.0.1

   :depends: :conda:package:`diskcache`  :conda:package:`numpy` !=1.13.0 :conda:package:`packaging`  :conda:package:`python` >=3.6 :conda:package:`requests`  :conda:package:`scikit-image`  :conda:package:`six`  

   :required~by: |required_by_slicedimage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slicedimage

   and update with::

      conda update slicedimage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/slicedimage


.. |required_by_slicedimage| conda:required_by:: slicedimage
.. |downloads_slicedimage| image:: https://img.shields.io/conda/dn/bioconda/slicedimage.svg?style=flat
   :alt:   (downloads)
.. |docker_slicedimage| image:: https://quay.io/repository/biocontainers/slicedimage/status
   :target: https://quay.io/repository/biocontainers/slicedimage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slicedimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slicedimage/README.html


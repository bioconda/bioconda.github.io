.. title:: Package Recipe 'iced'
.. highlight: bash


iced
====

.. conda:recipe:: iced
   :replaces_section_title:

   The python module iced implements the ICE normalization of hic data.

   :homepage: https://github.com/hiclib/iced
   :license: BSD / new BSD
   :recipe: /`iced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iced/meta.yaml>`_

   


.. conda:package:: iced

   |downloads_iced| |docker_iced|

   :versions: 0.5.0, 0.4.2

   :depends: :conda:package:`cython`  :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`numpy` >=1.9 :conda:package:`pandas`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scikit-learn`  :conda:package:`scipy` >=0.14 

   :required~by: |required_by_iced|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iced

   and update with::

      conda update iced

   or use the docker container::

      docker pull quay.io/repository/biocontainers/iced


.. |required_by_iced| conda:required_by:: iced
.. |downloads_iced| image:: https://img.shields.io/conda/dn/bioconda/iced.svg?style=flat
   :alt:   (downloads)
.. |docker_iced| image:: https://quay.io/repository/biocontainers/iced/status
   :target: https://quay.io/repository/biocontainers/iced







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iced/README.html


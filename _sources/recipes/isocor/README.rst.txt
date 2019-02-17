:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isocor'
.. highlight: bash

isocor
======

.. conda:recipe:: isocor
   :replaces_section_title:

   A Isotope Correction for mass spectrometry labeling experiments

   :homepage: https://github.com/MetaSys-LISBP/IsoCor/
   :documentation: https://isocor.readthedocs.io/
   
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`isocor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isocor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isocor/meta.yaml>`_

   


.. conda:package:: isocor

   |downloads_isocor| |docker_isocor|

   :versions: 2.1.0-0
   
   :depends numpy: >=1.15
   
   :depends pandas: >=0.17.1
   
   :depends python: >=3.7,<3.8.0a0
   
   :depends scipy: >=0.12.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isocor

   and update with::

      conda update isocor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/isocor:<tag>

   (see `isocor/tags`_ for valid values for ``<tag>``)


.. |downloads_isocor| image:: https://img.shields.io/conda/dn/bioconda/isocor.svg?style=flat
   :alt:   (downloads)
.. |docker_isocor| image:: https://quay.io/repository/biocontainers/isocor/status
   :target: https://quay.io/repository/biocontainers/isocor
.. _`isocor/tags`: https://quay.io/repository/biocontainers/isocor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isocor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isocor/README.html
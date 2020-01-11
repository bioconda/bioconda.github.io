:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libis_moabs'
.. highlight: bash

libis_moabs
===========

.. conda:recipe:: libis_moabs
   :replaces_section_title:

   Low input Bisulfite sequencing alignment

   :homepage: https://github.com/Dangertrip/LiBis
   :license: MIT / MIT
   :recipe: /`libis_moabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libis_moabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libis_moabs/meta.yaml>`_

   


.. conda:package:: libis_moabs

   |downloads_libis_moabs| |docker_libis_moabs|

   :versions: 0.0.7-0
   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: >=3
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libis_moabs

   and update with::

      conda update libis_moabs

   or use the docker container::

      docker pull quay.io/biocontainers/libis_moabs:<tag>

   (see `libis_moabs/tags`_ for valid values for ``<tag>``)


.. |downloads_libis_moabs| image:: https://img.shields.io/conda/dn/bioconda/libis_moabs.svg?style=flat
   :target: https://anaconda.org/bioconda/libis_moabs
   :alt:   (downloads)
.. |docker_libis_moabs| image:: https://quay.io/repository/biocontainers/libis_moabs/status
   :target: https://quay.io/repository/biocontainers/libis_moabs
.. _`libis_moabs/tags`: https://quay.io/repository/biocontainers/libis_moabs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libis_moabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libis_moabs/README.html
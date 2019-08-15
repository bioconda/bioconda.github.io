:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blacksheep-outliers'
.. highlight: bash

blacksheep-outliers
===================

.. conda:recipe:: blacksheep-outliers
   :replaces_section_title:

   A package for differential extreme values analysis

   :homepage: https://github.com/ruggleslab/blackSheep/
   :documentation: https://github.com/ruggleslab/blackSheep/wiki
   
   :license: MIT / MIT
   :recipe: /`blacksheep-outliers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blacksheep-outliers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blacksheep-outliers/meta.yaml>`_

   


.. conda:package:: blacksheep-outliers

   |downloads_blacksheep-outliers| |docker_blacksheep-outliers|

   :versions: 0.0.8-0
   
   :depends matplotlib: >=3.1.0
   :depends numpy: >=1.16.4
   :depends pandas: >=0.24.2
   :depends python: 
   :depends scikit-learn: >=0.21.2
   :depends scipy: >=1.2.1
   :depends seaborn: >=0.9.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blacksheep-outliers

   and update with::

      conda update blacksheep-outliers

   or use the docker container::

      docker pull quay.io/biocontainers/blacksheep-outliers:<tag>

   (see `blacksheep-outliers/tags`_ for valid values for ``<tag>``)


.. |downloads_blacksheep-outliers| image:: https://img.shields.io/conda/dn/bioconda/blacksheep-outliers.svg?style=flat
   :target: https://anaconda.org/bioconda/blacksheep-outliers
   :alt:   (downloads)
.. |docker_blacksheep-outliers| image:: https://quay.io/repository/biocontainers/blacksheep-outliers/status
   :target: https://quay.io/repository/biocontainers/blacksheep-outliers
.. _`blacksheep-outliers/tags`: https://quay.io/repository/biocontainers/blacksheep-outliers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blacksheep-outliers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blacksheep-outliers/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tasmanian-mismatch'
.. highlight: bash

tasmanian-mismatch
==================

.. conda:recipe:: tasmanian-mismatch
   :replaces_section_title:

   Tasmanian tool to analyze mismatches at read and position in high throughput sequencing data

   :homepage: https://github.com/nebiolabs/tasmanian-mismatch
   :license: GNU Affero General Public License
   :recipe: /`tasmanian-mismatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tasmanian-mismatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tasmanian-mismatch/meta.yaml>`_

   


.. conda:package:: tasmanian-mismatch

   |downloads_tasmanian-mismatch| |docker_tasmanian-mismatch|

   :versions: 0.1.1-0
   
   :depends matplotlib-base: 3.1.1
   :depends numpy: 
   :depends numpy: 1.16.4
   :depends pandas: 0.25.1
   :depends plotly: 4.3.0
   :depends python: >=3.6
   :depends scikit-learn: 0.21.2
   :depends scipy: 1.2.1
   :depends seaborn: 0.9.0
   :depends statsmodels: 0.10.1
   :depends termcolor: 1.1.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tasmanian-mismatch

   and update with::

      conda update tasmanian-mismatch

   or use the docker container::

      docker pull quay.io/biocontainers/tasmanian-mismatch:<tag>

   (see `tasmanian-mismatch/tags`_ for valid values for ``<tag>``)


.. |downloads_tasmanian-mismatch| image:: https://img.shields.io/conda/dn/bioconda/tasmanian-mismatch.svg?style=flat
   :target: https://anaconda.org/bioconda/tasmanian-mismatch
   :alt:   (downloads)
.. |docker_tasmanian-mismatch| image:: https://quay.io/repository/biocontainers/tasmanian-mismatch/status
   :target: https://quay.io/repository/biocontainers/tasmanian-mismatch
.. _`tasmanian-mismatch/tags`: https://quay.io/repository/biocontainers/tasmanian-mismatch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tasmanian-mismatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tasmanian-mismatch/README.html
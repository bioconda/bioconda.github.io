:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blksheep'
.. highlight: bash

blksheep
========

.. conda:recipe:: blksheep
   :replaces_section_title:

   A package for differential extreme values analysis

   :homepage: https://github.com/ruggleslab/blackSheep/
   :documentation: https://blacksheep.readthedocs.io/en/master/
   
   :developer docs: https://github.com/ruggleslab/blackSheep
   :license: MIT / MIT
   :recipe: /`blksheep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blksheep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blksheep/meta.yaml>`_

   


.. conda:package:: blksheep

   |downloads_blksheep| |docker_blksheep|

   :versions: 0.0.2-0
   
   :depends matplotlib: >=3.1.0
   :depends numpy: >=1.16.4
   :depends pandas: >=0.24.2
   :depends scikit-learn: >=0.21.2
   :depends scipy: >=1.2.1
   :depends seaborn: >=0.9.0
   :depends statsmodels: >=0.10.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blksheep

   and update with::

      conda update blksheep

   or use the docker container::

      docker pull quay.io/biocontainers/blksheep:<tag>

   (see `blksheep/tags`_ for valid values for ``<tag>``)


.. |downloads_blksheep| image:: https://img.shields.io/conda/dn/bioconda/blksheep.svg?style=flat
   :target: https://anaconda.org/bioconda/blksheep
   :alt:   (downloads)
.. |docker_blksheep| image:: https://quay.io/repository/biocontainers/blksheep/status
   :target: https://quay.io/repository/biocontainers/blksheep
.. _`blksheep/tags`: https://quay.io/repository/biocontainers/blksheep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blksheep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blksheep/README.html
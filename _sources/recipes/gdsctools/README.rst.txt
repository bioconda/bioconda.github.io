:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdsctools'
.. highlight: bash

gdsctools
=========

.. conda:recipe:: gdsctools
   :replaces_section_title:

   Set of tools and pipelines to analyse GDSC data \(cancerrxgene.org\)

   :homepage: ['http://pypi.python.org/pypi/gdsctools']
   :license: BSD / BSD 3-clause
   :recipe: /`gdsctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools/meta.yaml>`_

   


.. conda:package:: gdsctools

   |downloads_gdsctools| |docker_gdsctools|

   :versions: 0.20.1-0, 0.19.0-0
   
   :depends biokit: ==0.4.1
   
   :depends colorlog: 
   
   :depends colormap: ==1.0.1
   
   :depends easydev: >=0.9.34
   
   :depends jinja2: 
   
   :depends matplotlib: >=1.4.3
   
   :depends numexpr: 
   
   :depends numpy: 
   
   :depends pandas: ==0.20.1
   
   :depends python: 3.5*
   
   :depends reports: >=0.3.1
   
   :depends reports: >=0.3.1
   
   :depends scikit-learn: ==0.18.2
   
   :depends scipy: ==0.19.1
   
   :depends statsmodels: ==0.8.0
   
   :depends xlrd: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gdsctools

   and update with::

      conda update gdsctools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gdsctools:<tag>

   (see `gdsctools/tags`_ for valid values for ``<tag>``)


.. |downloads_gdsctools| image:: https://img.shields.io/conda/dn/bioconda/gdsctools.svg?style=flat
   :alt:   (downloads)
.. |docker_gdsctools| image:: https://quay.io/repository/biocontainers/gdsctools/status
   :target: https://quay.io/repository/biocontainers/gdsctools
.. _`gdsctools/tags`: https://quay.io/repository/biocontainers/gdsctools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdsctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdsctools/README.html
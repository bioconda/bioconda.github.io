:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dreamtools'
.. highlight: bash

dreamtools
==========

.. conda:recipe:: dreamtools
   :replaces_section_title:

   Scoring functions for the DREAM \/ SAGE challenges

   :homepage: https://github.com/dreamtools/dreamtools
   :license: BSD License
   :recipe: /`dreamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dreamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dreamtools/meta.yaml>`_

   


.. conda:package:: dreamtools

   |downloads_dreamtools| |docker_dreamtools|

   :versions: 1.3.0-0, 1.2.5-0
   
   :depends biokit: 
   
   :depends bioservices: >=1.4.5
   
   :depends colormap: 
   
   :depends cython: 
   
   :depends easydev: >=0.9.14
   
   :depends fitter: 
   
   :depends numexpr: 
   
   :depends pandas: 
   
   :depends python: 2.7*
   
   :depends scikit-learn: 
   
   :depends scipy: 
   
   :depends synapseclient: 
   
   :depends tabulate: 
   
   :depends xlrd: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dreamtools

   and update with::

      conda update dreamtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dreamtools:<tag>

   (see `dreamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_dreamtools| image:: https://img.shields.io/conda/dn/bioconda/dreamtools.svg?style=flat
   :alt:   (downloads)
.. |docker_dreamtools| image:: https://quay.io/repository/biocontainers/dreamtools/status
   :target: https://quay.io/repository/biocontainers/dreamtools
.. _`dreamtools/tags`: https://quay.io/repository/biocontainers/dreamtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dreamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dreamtools/README.html
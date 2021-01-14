:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simba'
.. highlight: bash

simba
=====

.. conda:recipe:: simba
   :replaces_section_title:
   :noindex:

   SIMBA \- SIngle\-cell eMBedding Along with features

   :homepage: https://github.com/pinellolab/simba
   :license: BSD / BSD-3
   :recipe: /`simba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simba/meta.yaml>`_

   


.. conda:package:: simba

   |downloads_simba| |docker_simba|

   :versions:
      
      

      ``0.1a-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends kneed: ``>=0.7``
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=1.0,!=1.1``
   :depends python: 
   :depends scikit-learn: ``>=0.19``
   :depends scipy: ``>=1.4``
   :depends seaborn: ``>=0.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simba

   and update with::

      conda update simba

   or use the docker container::

      docker pull quay.io/biocontainers/simba:<tag>

   (see `simba/tags`_ for valid values for ``<tag>``)


.. |downloads_simba| image:: https://img.shields.io/conda/dn/bioconda/simba.svg?style=flat
   :target: https://anaconda.org/bioconda/simba
   :alt:   (downloads)
.. |docker_simba| image:: https://quay.io/repository/biocontainers/simba/status
   :target: https://quay.io/repository/biocontainers/simba
.. _`simba/tags`: https://quay.io/repository/biocontainers/simba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simba/README.html
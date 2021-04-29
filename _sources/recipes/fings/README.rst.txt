:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fings'
.. highlight: bash

fings
=====

.. conda:recipe:: fings
   :replaces_section_title:
   :noindex:

   Filters for Next Generation Sequencing

   :homepage: https://github.com/cpwardell/FiNGS
   :license: APACHE / Apache Software
   :recipe: /`fings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fings/meta.yaml>`_

   


.. conda:package:: fings

   |downloads_fings| |docker_fings|

   :versions:
      
      

      ``1.6.8-0``,  ``1.6.7-0``

      

   
   :depends editdistance: 
   :depends joblib: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends pyvcf: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fings

   and update with::

      conda update fings

   or use the docker container::

      docker pull quay.io/biocontainers/fings:<tag>

   (see `fings/tags`_ for valid values for ``<tag>``)


.. |downloads_fings| image:: https://img.shields.io/conda/dn/bioconda/fings.svg?style=flat
   :target: https://anaconda.org/bioconda/fings
   :alt:   (downloads)
.. |docker_fings| image:: https://quay.io/repository/biocontainers/fings/status
   :target: https://quay.io/repository/biocontainers/fings
.. _`fings/tags`: https://quay.io/repository/biocontainers/fings?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fings/README.html
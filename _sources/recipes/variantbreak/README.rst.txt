:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variantbreak'
.. highlight: bash

variantbreak
============

.. conda:recipe:: variantbreak
   :replaces_section_title:
   :noindex:

   Structural variant analyzer for data visualization on VariantMap

   :homepage: https://github.com/cytham/variantbreak
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`variantbreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variantbreak/meta.yaml>`_

   


.. conda:package:: variantbreak

   |downloads_variantbreak| |docker_variantbreak|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends bedtools: ``>=2.26.0``
   :depends fastcluster: ``>=1.1.26``
   :depends numpy: ``>=1.18.3``
   :depends pandas: ``>=1.0.3``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.15.3``
   :depends pytables: ``>=3.6.1``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install variantbreak

   and update with::

      conda update variantbreak

   or use the docker container::

      docker pull quay.io/biocontainers/variantbreak:<tag>

   (see `variantbreak/tags`_ for valid values for ``<tag>``)


.. |downloads_variantbreak| image:: https://img.shields.io/conda/dn/bioconda/variantbreak.svg?style=flat
   :target: https://anaconda.org/bioconda/variantbreak
   :alt:   (downloads)
.. |docker_variantbreak| image:: https://quay.io/repository/biocontainers/variantbreak/status
   :target: https://quay.io/repository/biocontainers/variantbreak
.. _`variantbreak/tags`: https://quay.io/repository/biocontainers/variantbreak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variantbreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variantbreak/README.html
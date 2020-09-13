:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smaca'
.. highlight: bash

smaca
=====

.. conda:recipe:: smaca
   :replaces_section_title:
   :noindex:

   smaca is a python tool to detect putative SMA carriers and estimate the absolute SMN1 copy\-number in a population.

   :homepage: https://github.com/babelomics/SMAca
   :license: GPL-3.0
   :recipe: /`smaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smaca/meta.yaml>`_
   :links: doi: :doi:`https://zenodo.org/badge/latestdoi/250259934`

   


.. conda:package:: smaca

   |downloads_smaca| |docker_smaca|

   :versions:
      
      

      ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends click: 
   :depends joblib: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smaca

   and update with::

      conda update smaca

   or use the docker container::

      docker pull quay.io/biocontainers/smaca:<tag>

   (see `smaca/tags`_ for valid values for ``<tag>``)


.. |downloads_smaca| image:: https://img.shields.io/conda/dn/bioconda/smaca.svg?style=flat
   :target: https://anaconda.org/bioconda/smaca
   :alt:   (downloads)
.. |docker_smaca| image:: https://quay.io/repository/biocontainers/smaca/status
   :target: https://quay.io/repository/biocontainers/smaca
.. _`smaca/tags`: https://quay.io/repository/biocontainers/smaca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smaca/README.html
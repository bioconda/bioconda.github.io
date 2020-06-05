:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rna-cd'
.. highlight: bash

rna-cd
======

.. conda:recipe:: rna-cd
   :replaces_section_title:
   :noindex:

   RNA contamination detector

   :homepage: https://github.com/LUMC/rna_cd
   :documentation: https://rna-cd.readthedocs.io/en/latest/
   
   :license: AGPL / GNU Affero General Public v3 or later (AGPLv3+)
   :recipe: /`rna-cd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-cd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-cd/meta.yaml>`_

   


.. conda:package:: rna-cd

   |downloads_rna-cd| |docker_rna-cd|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends joblib: 
   :depends matplotlib: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rna-cd

   and update with::

      conda update rna-cd

   or use the docker container::

      docker pull quay.io/biocontainers/rna-cd:<tag>

   (see `rna-cd/tags`_ for valid values for ``<tag>``)


.. |downloads_rna-cd| image:: https://img.shields.io/conda/dn/bioconda/rna-cd.svg?style=flat
   :target: https://anaconda.org/bioconda/rna-cd
   :alt:   (downloads)
.. |docker_rna-cd| image:: https://quay.io/repository/biocontainers/rna-cd/status
   :target: https://quay.io/repository/biocontainers/rna-cd
.. _`rna-cd/tags`: https://quay.io/repository/biocontainers/rna-cd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-cd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-cd/README.html
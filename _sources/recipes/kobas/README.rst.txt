.. title:: Package Recipe 'kobas'
.. highlight: bash


kobas
=====

.. conda:recipe:: kobas
   :replaces_section_title:

   KEGG Orthology Based Annotation System

   :homepage: http://kobas.cbi.pku.edu.cn
   :license: Biopython License Agreement
   :recipe: /`kobas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kobas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kobas/meta.yaml>`_
   :links: biotools: :biotools:`kobas`

   


.. conda:package:: kobas

   |downloads_kobas| |docker_kobas|

   :versions: 3.0.3, 2.1.1

   :depends: :conda:package:`bioconductor-qvalue`  :conda:package:`biopython`  :conda:package:`blast`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base`  :conda:package:`rpy2` >=2.8.5 :conda:package:`sqlite` >=3.20.1,<4.0a0 

   :required~by: |required_by_kobas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kobas

   and update with::

      conda update kobas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kobas


.. |required_by_kobas| conda:required_by:: kobas
.. |downloads_kobas| image:: https://img.shields.io/conda/dn/bioconda/kobas.svg?style=flat
   :alt:   (downloads)
.. |docker_kobas| image:: https://quay.io/repository/biocontainers/kobas/status
   :target: https://quay.io/repository/biocontainers/kobas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kobas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kobas/README.html


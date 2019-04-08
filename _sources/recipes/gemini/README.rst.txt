:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemini'
.. highlight: bash

gemini
======

.. conda:recipe:: gemini
   :replaces_section_title:

   a lightweight db framework for disease and population genetics.

   :homepage: https://github.com/arq5x/gemini
   :license: MIT License
   :recipe: /`gemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemini/meta.yaml>`_
   :links: biotools: :biotools:`GEMINI`, doi: :doi:`10.1371/journal.pcbi.1003153`

   


.. conda:package:: gemini

   |downloads_gemini| |docker_gemini|

   :versions: 0.30.1-0, 0.20.1-1, 0.20.1-0, 0.20.0-0, 0.20.0a0-0, 0.19.2a-2, 0.19.2a-1, 0.19.2a-0, 0.19.1-3, 0.19.1-2, 0.19.1-1, 0.19.1-0, 0.19.0-0, 0.18.3-1, 0.18.2-1, 0.18.1-3, 0.18.1-2, 0.18.1-1, 0.18.0-8, 0.18.0-7, 0.18.0-6, 0.18.0-5, 0.18.0-4, 0.18a-4, 0.17.3dev1-4, 0.17.3dev1-3, 0.17.3dev0-2, 0.17.3dev0-1
   
   :depends bcolz: 
   :depends bottle: 
   :depends bx-python: 
   :depends cyordereddict: 
   :depends cython: 
   :depends cyvcf2: >0.6.5
   :depends geneimpacts: 
   :depends grabix: 
   :depends inheritance: 
   :depends ipyparallel: 
   :depends ipython-cluster-helper: 
   :depends jinja2: 
   :depends networkx: 
   :depends numexpr: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: >=2.7,<2.8.0a0
   :depends python-snappy: 
   :depends pyyaml: 
   :depends scipy: 
   :depends snappy: >=1.1.7,<1.1.8.0a0
   :depends sqlalchemy: 
   :depends unidecode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gemini

   and update with::

      conda update gemini

   or use the docker container::

      docker pull quay.io/biocontainers/gemini:<tag>

   (see `gemini/tags`_ for valid values for ``<tag>``)


.. |downloads_gemini| image:: https://img.shields.io/conda/dn/bioconda/gemini.svg?style=flat
   :alt:   (downloads)
.. |docker_gemini| image:: https://quay.io/repository/biocontainers/gemini/status
   :target: https://quay.io/repository/biocontainers/gemini
.. _`gemini/tags`: https://quay.io/repository/biocontainers/gemini?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemini/README.html
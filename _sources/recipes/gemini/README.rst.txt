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

   :versions: 0.20.1, 0.20.0, 0.20.0a0, 0.19.2a, 0.19.1, 0.19.0, 0.18.3, 0.18.2, 0.18.1, 0.18.0, 0.18a, 0.17.3dev1, 0.17.3dev0

   :depends: :conda:package:`bcolz`  :conda:package:`bottle`  :conda:package:`bx-python`  :conda:package:`cyordereddict`  :conda:package:`cython`  :conda:package:`cyvcf2` >0.6.5 :conda:package:`geneimpacts`  :conda:package:`grabix`  :conda:package:`inheritance`  :conda:package:`ipyparallel`  :conda:package:`ipython-cluster-helper`  :conda:package:`jinja2`  :conda:package:`networkx`  :conda:package:`numexpr`  :conda:package:`numpy`  :conda:package:`openpyxl`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`python-snappy`  :conda:package:`pyyaml`  :conda:package:`scipy`  :conda:package:`snappy`  :conda:package:`sqlalchemy`  :conda:package:`unidecode`  

   :required~by: |required_by_gemini|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gemini

   and update with::

      conda update gemini

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gemini


.. |required_by_gemini| conda:required_by:: gemini
.. |downloads_gemini| image:: https://img.shields.io/conda/dn/bioconda/gemini.svg?style=flat
   :alt:   (downloads)
.. |docker_gemini| image:: https://quay.io/repository/biocontainers/gemini/status
   :target: https://quay.io/repository/biocontainers/gemini







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemini/README.html


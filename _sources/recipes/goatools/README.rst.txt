.. title:: Package Recipe 'goatools'
.. highlight: bash


goatools
========

.. conda:recipe:: goatools
   :replaces_section_title:

   Python scripts to find enrichment of GO terms

   :homepage: https://github.com/tanghaibao/goatools
   :license: BSD / BSD-2-Clause
   :recipe: /`goatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goatools/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.31628`

   


.. conda:package:: goatools

   |downloads_goatools| |docker_goatools|

   :versions: 0.8.12, 0.8.11, 0.8.9, 0.8.4, 0.7.11, 0.6.10, 0.6.4, 0.5.9

   :depends: :conda:package:`numpy`  :conda:package:`pydot`  :conda:package:`pygraphviz`  :conda:package:`python`  :conda:package:`python-wget`  :conda:package:`scipy`  :conda:package:`statsmodels`  :conda:package:`xlsxwriter`  

   :required~by: |required_by_goatools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goatools

   and update with::

      conda update goatools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/goatools


.. |required_by_goatools| conda:required_by:: goatools
.. |downloads_goatools| image:: https://img.shields.io/conda/dn/bioconda/goatools.svg?style=flat
   :alt:   (downloads)
.. |docker_goatools| image:: https://quay.io/repository/biocontainers/goatools/status
   :target: https://quay.io/repository/biocontainers/goatools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goatools/README.html


.. title:: Package Recipe 'shmlast'
.. highlight: bash


shmlast
=======

.. conda:recipe:: shmlast
   :replaces_section_title:

   conditional reciprocal best hits with LAST

   :homepage: https://github.com/camillescott/shmlast
   :license: BSD-3-Clause
   :recipe: /`shmlast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast/meta.yaml>`_

   


.. conda:package:: shmlast

   |downloads_shmlast| |docker_shmlast|

   :versions: 1.4, 1.3, 1.2.1

   :depends: :conda:package:`doit` >=0.29.0 :conda:package:`ficus` >=0.5 :conda:package:`filelock` >=2.0.6 :conda:package:`last` <=874 :conda:package:`matplotlib`  :conda:package:`numexpr` >=2.3.1 :conda:package:`numpy` >=1.9.0 :conda:package:`pandas` >=0.17.0 :conda:package:`parallel`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scipy` >=0.16.0 :conda:package:`screed` >=0.9 :conda:package:`seaborn` >=0.6.0 

   :required~by: |required_by_shmlast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shmlast

   and update with::

      conda update shmlast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shmlast


.. |required_by_shmlast| conda:required_by:: shmlast
.. |downloads_shmlast| image:: https://img.shields.io/conda/dn/bioconda/shmlast.svg?style=flat
   :alt:   (downloads)
.. |docker_shmlast| image:: https://quay.io/repository/biocontainers/shmlast/status
   :target: https://quay.io/repository/biocontainers/shmlast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shmlast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shmlast/README.html


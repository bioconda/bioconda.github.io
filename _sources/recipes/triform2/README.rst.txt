.. title:: Package Recipe 'triform2'
.. highlight: bash


triform2
========

.. conda:recipe:: triform2
   :replaces_section_title:

   Improved sensitivity\, specificity and control of false discovery rates in ChIP\-Seq peak finding.

   :homepage: http://github.com/endrebak/epic
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`triform2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triform2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/triform2/meta.yaml>`_

   


.. conda:package:: triform2

   |downloads_triform2| |docker_triform2|

   :versions: 0.0.5

   :depends: :conda:package:`bioconductor-biocgenerics`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-iranges`  :conda:package:`bx-python`  :conda:package:`joblib`  :conda:package:`natsort`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`r` 3.2.2* :conda:package:`rpy2`  :conda:package:`scipy`  :conda:package:`setuptools`  

   :required~by: |required_by_triform2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install triform2

   and update with::

      conda update triform2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/triform2


.. |required_by_triform2| conda:required_by:: triform2
.. |downloads_triform2| image:: https://img.shields.io/conda/dn/bioconda/triform2.svg?style=flat
   :alt:   (downloads)
.. |docker_triform2| image:: https://quay.io/repository/biocontainers/triform2/status
   :target: https://quay.io/repository/biocontainers/triform2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/triform2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/triform2/README.html


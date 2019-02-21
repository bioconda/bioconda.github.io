:orphan:  .. only available via index, not via toctree

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

   :versions: 0.0.5-1, 0.0.5-0
   
   :depends bioconductor-biocgenerics: 
   
   :depends bioconductor-genomicranges: 
   
   :depends bioconductor-iranges: 
   
   :depends bx-python: 
   
   :depends joblib: 
   
   :depends natsort: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends rpy2: >=2.4.2
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install triform2

   and update with::

      conda update triform2

   or use the docker container::

      docker pull quay.io/biocontainers/triform2:<tag>

   (see `triform2/tags`_ for valid values for ``<tag>``)


.. |downloads_triform2| image:: https://img.shields.io/conda/dn/bioconda/triform2.svg?style=flat
   :alt:   (downloads)
.. |docker_triform2| image:: https://quay.io/repository/biocontainers/triform2/status
   :target: https://quay.io/repository/biocontainers/triform2
.. _`triform2/tags`: https://quay.io/repository/biocontainers/triform2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/triform2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/triform2/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-perfmeas'
.. highlight: bash

r-perfmeas
==========

.. conda:recipe:: r-perfmeas
   :replaces_section_title:

   Package that implements different performance measures for classification and ranking tasks. AUC\, precision at a given recall\, F\-score for single and multiple classes are available.

   :homepage: https://CRAN.R-project.org/package=PerfMeas
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-perfmeas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-perfmeas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-perfmeas/meta.yaml>`_

   


.. conda:package:: r-perfmeas

   |downloads_r-perfmeas| |docker_r-perfmeas|

   :versions: 1.2.1-3, 1.2.1-2, 1.2.1-0
   
   :depends bioconductor-graph: 
   
   :depends bioconductor-limma: 
   
   :depends bioconductor-rbgl: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-perfmeas

   and update with::

      conda update r-perfmeas

   or use the docker container::

      docker pull quay.io/biocontainers/r-perfmeas:<tag>

   (see `r-perfmeas/tags`_ for valid values for ``<tag>``)


.. |downloads_r-perfmeas| image:: https://img.shields.io/conda/dn/bioconda/r-perfmeas.svg?style=flat
   :alt:   (downloads)
.. |docker_r-perfmeas| image:: https://quay.io/repository/biocontainers/r-perfmeas/status
   :target: https://quay.io/repository/biocontainers/r-perfmeas
.. _`r-perfmeas/tags`: https://quay.io/repository/biocontainers/r-perfmeas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-perfmeas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-perfmeas/README.html
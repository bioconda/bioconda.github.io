:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panphlan'
.. highlight: bash

panphlan
========

.. conda:recipe:: panphlan
   :replaces_section_title:
   :noindex:

   PanPhlAn is a strain\-level metagenomic profiling tool for identifying the gene composition and \*in\-vivo\* transcriptional activity of individual strains in metagenomic samples.

   :homepage: http://github.com/SegataLab/panphlan/
   :license: MIT / MIT
   :recipe: /`panphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan/meta.yaml>`_

   


.. conda:package:: panphlan

   |downloads_panphlan| |docker_panphlan|

   :versions:
      
      

      ``3.0-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panphlan

   and update with::

      conda update panphlan

   or use the docker container::

      docker pull quay.io/biocontainers/panphlan:<tag>

   (see `panphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_panphlan| image:: https://img.shields.io/conda/dn/bioconda/panphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/panphlan
   :alt:   (downloads)
.. |docker_panphlan| image:: https://quay.io/repository/biocontainers/panphlan/status
   :target: https://quay.io/repository/biocontainers/panphlan
.. _`panphlan/tags`: https://quay.io/repository/biocontainers/panphlan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panphlan/README.html
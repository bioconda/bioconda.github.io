:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'labrat'
.. highlight: bash

labrat
======

.. conda:recipe:: labrat
   :replaces_section_title:
   :noindex:

   A package to quantify changes in alternative polyadenylation isoform abundance using RNAseq data

   :homepage: https://github.com/TaliaferroLab/LABRAT
   :license: MIT / MIT
   :recipe: /`labrat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/labrat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/labrat/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1101/2020.10.05.326702`

   


.. conda:package:: labrat

   |downloads_labrat| |docker_labrat|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends biopython: ``>=1.76``
   :depends gffutils: ``>=0.9``
   :depends numpy: ``>=1.15.4``
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.6``
   :depends salmon: ``0.14.*``
   :depends scipy: ``>=1.3.0``
   :depends statsmodels: ``>=0.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install labrat

   and update with::

      conda update labrat

   or use the docker container::

      docker pull quay.io/biocontainers/labrat:<tag>

   (see `labrat/tags`_ for valid values for ``<tag>``)


.. |downloads_labrat| image:: https://img.shields.io/conda/dn/bioconda/labrat.svg?style=flat
   :target: https://anaconda.org/bioconda/labrat
   :alt:   (downloads)
.. |docker_labrat| image:: https://quay.io/repository/biocontainers/labrat/status
   :target: https://quay.io/repository/biocontainers/labrat
.. _`labrat/tags`: https://quay.io/repository/biocontainers/labrat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/labrat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/labrat/README.html
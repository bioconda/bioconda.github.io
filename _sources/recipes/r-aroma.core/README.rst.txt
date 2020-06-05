:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aroma.core'
.. highlight: bash

r-aroma.core
============

.. conda:recipe:: r-aroma.core
   :replaces_section_title:
   :noindex:

   Core methods and classes used by higher\-level \'aroma.\*\' packages part of the Aroma Project\, e.g. \'aroma.affymetrix\' and \'aroma.cn\'.

   :homepage: https://github.com/HenrikBengtsson/aroma.core, http://www.aroma-project.org/
   :license: LGPL / LGPL (>= 2.1)
   :recipe: /`r-aroma.core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core/meta.yaml>`_

   


.. conda:package:: r-aroma.core

   |downloads_r-aroma.core| |docker_r-aroma.core|

   :versions:
      
      

      ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.1-0``,  ``3.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-biocmanager: 
   :depends r-future: 
   :depends r-listenv: 
   :depends r-matrixstats: ``>=0.55.0``
   :depends r-pscbs: ``>=0.65.0``
   :depends r-r.cache: ``>=0.14.0``
   :depends r-r.devices: ``>=2.16.0``
   :depends r-r.filesets: ``>=2.13.0``
   :depends r-r.methodss3: ``>=1.7.1``
   :depends r-r.oo: ``>=1.23.0``
   :depends r-r.rsp: ``>=0.43.2``
   :depends r-r.utils: ``>=2.9.0``
   :depends r-rcolorbrewer: ``>=1.1_2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-aroma.core

   and update with::

      conda update r-aroma.core

   or use the docker container::

      docker pull quay.io/biocontainers/r-aroma.core:<tag>

   (see `r-aroma.core/tags`_ for valid values for ``<tag>``)


.. |downloads_r-aroma.core| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.core.svg?style=flat
   :target: https://anaconda.org/bioconda/r-aroma.core
   :alt:   (downloads)
.. |docker_r-aroma.core| image:: https://quay.io/repository/biocontainers/r-aroma.core/status
   :target: https://quay.io/repository/biocontainers/r-aroma.core
.. _`r-aroma.core/tags`: https://quay.io/repository/biocontainers/r-aroma.core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.core/README.html
.. title:: Package Recipe 'r-aroma.core'
.. highlight: bash


r-aroma.core
============

.. conda:recipe:: r-aroma.core
   :replaces_section_title:

   Core methods and classes used by higher\-level \'aroma.\*\' packages part of the Aroma Project\, e.g. \'aroma.affymetrix\' and \'aroma.cn\'.

   :homepage: https://github.com/HenrikBengtsson/aroma.core, http://www.aroma-project.org/
   :license: LGPL / LGPL (>= 2.1)
   :recipe: /`r-aroma.core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.core/meta.yaml>`_

   


.. conda:package:: r-aroma.core

   |downloads_r-aroma.core| |docker_r-aroma.core|

   :versions: 3.1.3, 3.1.1, 3.0.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-future`  :conda:package:`r-listenv`  :conda:package:`r-matrixstats` >=0.53.1 :conda:package:`r-pscbs` >=0.63.0 :conda:package:`r-r.cache` >=0.13.0 :conda:package:`r-r.devices` >=2.15.1 :conda:package:`r-r.filesets` >=2.12.1 :conda:package:`r-r.methodss3` >=1.7.1 :conda:package:`r-r.oo` >=1.22.0 :conda:package:`r-r.rsp` >=0.42.0 :conda:package:`r-r.utils` >=2.6.0 :conda:package:`r-rcolorbrewer` >=1.1_2 

   :required~by: |required_by_r-aroma.core|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-aroma.core

   and update with::

      conda update r-aroma.core

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-aroma.core


.. |required_by_r-aroma.core| conda:required_by:: r-aroma.core
.. |downloads_r-aroma.core| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.core.svg?style=flat
   :alt:   (downloads)
.. |docker_r-aroma.core| image:: https://quay.io/repository/biocontainers/r-aroma.core/status
   :target: https://quay.io/repository/biocontainers/r-aroma.core







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.core/README.html


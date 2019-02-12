:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytest-marks'
.. highlight: bash

pytest-marks
============

.. conda:recipe:: pytest-marks
   :replaces_section_title:

   set marks on py.test test methods

   :homepage: https://github.com/adamgoucher/pytest-marks
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`pytest-marks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-marks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytest-marks/meta.yaml>`_

   


.. conda:package:: pytest-marks

   |downloads_pytest-marks| |docker_pytest-marks|

   :versions: 0.4-0
   
   :depends pytest: >2.0.2
   
   :depends python: 2.7*
   
   :depends setuptools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytest-marks

   and update with::

      conda update pytest-marks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pytest-marks:<tag>

   (see `pytest-marks/tags`_ for valid values for ``<tag>``)


.. |downloads_pytest-marks| image:: https://img.shields.io/conda/dn/bioconda/pytest-marks.svg?style=flat
   :alt:   (downloads)
.. |docker_pytest-marks| image:: https://quay.io/repository/biocontainers/pytest-marks/status
   :target: https://quay.io/repository/biocontainers/pytest-marks
.. _`pytest-marks/tags`: https://quay.io/repository/biocontainers/pytest-marks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytest-marks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytest-marks/README.html
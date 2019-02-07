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

   :versions: 0.4

   :depends: :conda:package:`pytest` >2.0.2 :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_pytest-marks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytest-marks

   and update with::

      conda update pytest-marks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pytest-marks


.. |required_by_pytest-marks| conda:required_by:: pytest-marks
.. |downloads_pytest-marks| image:: https://img.shields.io/conda/dn/bioconda/pytest-marks.svg?style=flat
   :alt:   (downloads)
.. |docker_pytest-marks| image:: https://quay.io/repository/biocontainers/pytest-marks/status
   :target: https://quay.io/repository/biocontainers/pytest-marks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytest-marks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytest-marks/README.html


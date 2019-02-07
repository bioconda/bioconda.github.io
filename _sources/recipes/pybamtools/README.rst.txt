.. title:: Package Recipe 'pybamtools'
.. highlight: bash


pybamtools
==========

.. conda:recipe:: pybamtools
   :replaces_section_title:

   Tools for working on BAM data

   :homepage: https://github.com/blankenberg/pyBamTools
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`pybamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamtools/meta.yaml>`_

   


.. conda:package:: pybamtools

   |downloads_pybamtools| |docker_pybamtools|

   :versions: 0.0.4, 0.0.3

   :depends: :conda:package:`numpy`  :conda:package:`pybamparser` ==0.0.3 :conda:package:`python` 2.7* 

   :required~by: |required_by_pybamtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybamtools

   and update with::

      conda update pybamtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pybamtools


.. |required_by_pybamtools| conda:required_by:: pybamtools
.. |downloads_pybamtools| image:: https://img.shields.io/conda/dn/bioconda/pybamtools.svg?style=flat
   :alt:   (downloads)
.. |docker_pybamtools| image:: https://quay.io/repository/biocontainers/pybamtools/status
   :target: https://quay.io/repository/biocontainers/pybamtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybamtools/README.html


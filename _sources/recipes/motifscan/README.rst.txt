.. title:: Package Recipe 'motifscan'
.. highlight: bash


motifscan
=========

.. conda:recipe:: motifscan
   :replaces_section_title:

   A motif discovery tool to search for candidate targets of given motifs.

   :homepage: https://github.com/shao-lab/MotifScan
   :license: BSD / BSD License
   :recipe: /`motifscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifscan/meta.yaml>`_

   


.. conda:package:: motifscan

   |downloads_motifscan| |docker_motifscan|

   :versions: 1.1.2, 1.1

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas` >=0.17.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_motifscan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install motifscan

   and update with::

      conda update motifscan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/motifscan


.. |required_by_motifscan| conda:required_by:: motifscan
.. |downloads_motifscan| image:: https://img.shields.io/conda/dn/bioconda/motifscan.svg?style=flat
   :alt:   (downloads)
.. |docker_motifscan| image:: https://quay.io/repository/biocontainers/motifscan/status
   :target: https://quay.io/repository/biocontainers/motifscan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motifscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motifscan/README.html


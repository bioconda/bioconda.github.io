.. title:: Package Recipe 'hichipper'
.. highlight: bash


hichipper
=========

.. conda:recipe:: hichipper
   :replaces_section_title:

   Processing HiChIP data into loops.

   :homepage: https://github.com/aryeelab/hichipper
   :license: BSD / BSD License
   :recipe: /`hichipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hichipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hichipper/meta.yaml>`_

   


.. conda:package:: hichipper

   |downloads_hichipper| |docker_hichipper|

   :versions: 0.7.0

   :depends: :conda:package:`click`  :conda:package:`macs2`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`pyyaml`  

   :required~by: |required_by_hichipper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hichipper

   and update with::

      conda update hichipper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hichipper


.. |required_by_hichipper| conda:required_by:: hichipper
.. |downloads_hichipper| image:: https://img.shields.io/conda/dn/bioconda/hichipper.svg?style=flat
   :alt:   (downloads)
.. |docker_hichipper| image:: https://quay.io/repository/biocontainers/hichipper/status
   :target: https://quay.io/repository/biocontainers/hichipper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hichipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hichipper/README.html


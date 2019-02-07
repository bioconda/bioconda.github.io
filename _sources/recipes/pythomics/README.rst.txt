.. title:: Package Recipe 'pythomics'
.. highlight: bash


pythomics
=========

.. conda:recipe:: pythomics
   :replaces_section_title:

   A multi\-omic python package

   :homepage: https://github.com/pandeylab/pythomics
   :license: GPL3 / GPL3
   :recipe: /`pythomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythomics/meta.yaml>`_

   


.. conda:package:: pythomics

   |downloads_pythomics| |docker_pythomics|

   :versions: 0.3.42, 0.3.40

   :depends: :conda:package:`python` 2.7* :conda:package:`six`  

   :required~by: |required_by_pythomics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pythomics

   and update with::

      conda update pythomics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pythomics


.. |required_by_pythomics| conda:required_by:: pythomics
.. |downloads_pythomics| image:: https://img.shields.io/conda/dn/bioconda/pythomics.svg?style=flat
   :alt:   (downloads)
.. |docker_pythomics| image:: https://quay.io/repository/biocontainers/pythomics/status
   :target: https://quay.io/repository/biocontainers/pythomics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pythomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pythomics/README.html


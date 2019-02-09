.. title:: Package Recipe 'pyani'
.. highlight: bash


pyani
=====

.. conda:recipe:: pyani
   :replaces_section_title:

   pyani provides a package and script for calculation of genome\-scale average nucleotide identity.

   :homepage: http://widdowquinn.github.io/pyani/
   :license: MIT / MIT License
   :recipe: /`pyani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani/meta.yaml>`_

   


.. conda:package:: pyani

   |downloads_pyani| |docker_pyani|

   :versions: 0.2.7, 0.2.3, 0.2.0

   :depends: :conda:package:`biopython`  :conda:package:`blast`  :conda:package:`matplotlib`  :conda:package:`mummer`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 3.5* :conda:package:`scipy`  :conda:package:`seaborn`  

   :required~by: |required_by_pyani|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyani

   and update with::

      conda update pyani

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyani


.. |required_by_pyani| conda:required_by:: pyani
.. |downloads_pyani| image:: https://img.shields.io/conda/dn/bioconda/pyani.svg?style=flat
   :alt:   (downloads)
.. |docker_pyani| image:: https://quay.io/repository/biocontainers/pyani/status
   :target: https://quay.io/repository/biocontainers/pyani







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyani/README.html


.. title:: Package Recipe 'mirge'
.. highlight: bash


mirge
=====

.. conda:recipe:: mirge
   :replaces_section_title:

   comprehensive analysis of miRNA sequencing data

   :homepage: https://github.com/mhalushka/miRge
   :license: MIT License
   :recipe: /`mirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge/meta.yaml>`_

   


.. conda:package:: mirge

   |downloads_mirge| |docker_mirge|

   :versions: 2.0.6, 2.0.5, 2.0.4, 2.0.3, 2.0

   :depends: :conda:package:`biopython` >=1.68 :conda:package:`cutadapt` >=1.11 :conda:package:`matplotlib` >=2.1.1 :conda:package:`numpy` >=1.11.3 :conda:package:`pandas` >=0.21.1 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`reportlab` >=3.3.0 :conda:package:`scikit-learn` >=0.18.1 :conda:package:`scipy` >=0.17.0 :conda:package:`setuptools`  

   :required~by: |required_by_mirge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirge

   and update with::

      conda update mirge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mirge


.. |required_by_mirge| conda:required_by:: mirge
.. |downloads_mirge| image:: https://img.shields.io/conda/dn/bioconda/mirge.svg?style=flat
   :alt:   (downloads)
.. |docker_mirge| image:: https://quay.io/repository/biocontainers/mirge/status
   :target: https://quay.io/repository/biocontainers/mirge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge/README.html


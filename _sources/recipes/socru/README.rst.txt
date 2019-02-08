.. title:: Package Recipe 'socru'
.. highlight: bash


socru
=====

.. conda:recipe:: socru
   :replaces_section_title:

   Order and orientation of complete bacterial genomes

   :homepage: https://github.com/quadram-institute-bioscience/socru
   :license: GPLv3
   :recipe: /`socru <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/socru>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/socru/meta.yaml>`_

   


.. conda:package:: socru

   |downloads_socru| |docker_socru|

   :versions: 1.0.0, 0.0.5

   :depends: :conda:package:`barrnap`  :conda:package:`biopython` >=1.68 :conda:package:`blast`  :conda:package:`numpy`  :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`pyyaml`  

   :required~by: |required_by_socru|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install socru

   and update with::

      conda update socru

   or use the docker container::

      docker pull quay.io/repository/biocontainers/socru


.. |required_by_socru| conda:required_by:: socru
.. |downloads_socru| image:: https://img.shields.io/conda/dn/bioconda/socru.svg?style=flat
   :alt:   (downloads)
.. |docker_socru| image:: https://quay.io/repository/biocontainers/socru/status
   :target: https://quay.io/repository/biocontainers/socru







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/socru/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/socru/README.html


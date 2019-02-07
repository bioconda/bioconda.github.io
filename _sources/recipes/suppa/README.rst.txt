.. title:: Package Recipe 'suppa'
.. highlight: bash


suppa
=====

.. conda:recipe:: suppa
   :replaces_section_title:

   A tool to study splicing across multiple conditions at high speed and accuracy.

   :homepage: https://github.com/comprna/SUPPA
   :license: MIT / MIT License
   :recipe: /`suppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suppa/meta.yaml>`_

   


.. conda:package:: suppa

   |downloads_suppa| |docker_suppa|

   :versions: 2.3

   :depends: :conda:package:`numpy` >=1.11.0 :conda:package:`pandas` >=0.18.0 :conda:package:`python` 3.5* :conda:package:`scikit-learn` >=0.16.1 :conda:package:`scipy` >=0.15.1 :conda:package:`statsmodels` >=0.6.1 

   :required~by: |required_by_suppa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install suppa

   and update with::

      conda update suppa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/suppa


.. |required_by_suppa| conda:required_by:: suppa
.. |downloads_suppa| image:: https://img.shields.io/conda/dn/bioconda/suppa.svg?style=flat
   :alt:   (downloads)
.. |docker_suppa| image:: https://quay.io/repository/biocontainers/suppa/status
   :target: https://quay.io/repository/biocontainers/suppa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suppa/README.html


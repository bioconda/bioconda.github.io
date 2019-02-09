.. title:: Package Recipe 'pyquant-ms'
.. highlight: bash


pyquant-ms
==========

.. conda:recipe:: pyquant-ms
   :replaces_section_title:

   A framework for the analysis of quantitative mass spectrometry data

   :homepage: https://chris7.github.io/pyquant/
   :license: MIT / MIT
   :recipe: /`pyquant-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyquant-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyquant-ms/meta.yaml>`_

   


.. conda:package:: pyquant-ms

   |downloads_pyquant-ms| |docker_pyquant-ms|

   :versions: 0.2.3, 0.2.1, 0.1.43rc3, 0.1.42

   :depends: :conda:package:`cython`  :conda:package:`lxml`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`patsy`  :conda:package:`pythomics` >=0.3.41 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scikit-learn`  :conda:package:`scipy` >=0.18.* :conda:package:`simplejson`  

   :required~by: |required_by_pyquant-ms|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyquant-ms

   and update with::

      conda update pyquant-ms

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyquant-ms


.. |required_by_pyquant-ms| conda:required_by:: pyquant-ms
.. |downloads_pyquant-ms| image:: https://img.shields.io/conda/dn/bioconda/pyquant-ms.svg?style=flat
   :alt:   (downloads)
.. |docker_pyquant-ms| image:: https://quay.io/repository/biocontainers/pyquant-ms/status
   :target: https://quay.io/repository/biocontainers/pyquant-ms







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyquant-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyquant-ms/README.html


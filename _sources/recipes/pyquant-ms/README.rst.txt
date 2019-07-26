:orphan:  .. only available via index, not via toctree

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

   :versions: 0.2.3-0, 0.2.1-1, 0.2.1-0, 0.1.43rc3-0, 0.1.42-0
   
   :depends cython: 
   :depends lxml: 
   :depends numpy: 
   :depends pandas: 
   :depends patsy: 
   :depends pythomics: >=0.3.41
   :depends python: >=2.7,<2.8.0a0
   :depends scikit-learn: 
   :depends scipy: >=0.18.*
   :depends simplejson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyquant-ms

   and update with::

      conda update pyquant-ms

   or use the docker container::

      docker pull quay.io/biocontainers/pyquant-ms:<tag>

   (see `pyquant-ms/tags`_ for valid values for ``<tag>``)


.. |downloads_pyquant-ms| image:: https://img.shields.io/conda/dn/bioconda/pyquant-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyquant-ms
   :alt:   (downloads)
.. |docker_pyquant-ms| image:: https://quay.io/repository/biocontainers/pyquant-ms/status
   :target: https://quay.io/repository/biocontainers/pyquant-ms
.. _`pyquant-ms/tags`: https://quay.io/repository/biocontainers/pyquant-ms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyquant-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyquant-ms/README.html
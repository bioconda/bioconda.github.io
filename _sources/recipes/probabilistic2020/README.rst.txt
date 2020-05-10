:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probabilistic2020'
.. highlight: bash

probabilistic2020
=================

.. conda:recipe:: probabilistic2020
   :replaces_section_title:

   Simulates somatic mutations\, and calls statistically significant oncogenes and tumor suppressor genes based on a randomization\-based test

   :homepage: https://github.com/KarchinLab/probabilistic2020
   :license: APACHE / Apache-2-0
   :recipe: /`probabilistic2020 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probabilistic2020>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probabilistic2020/meta.yaml>`_

   


.. conda:package:: probabilistic2020

   |downloads_probabilistic2020| |docker_probabilistic2020|

   :versions: 1.2.3-1, 1.2.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: >=1.14.6,<2.0a0
   :depends pandas: >=0.17.0
   :depends pysam: 
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends scipy: <1.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install probabilistic2020

   and update with::

      conda update probabilistic2020

   or use the docker container::

      docker pull quay.io/biocontainers/probabilistic2020:<tag>

   (see `probabilistic2020/tags`_ for valid values for ``<tag>``)


.. |downloads_probabilistic2020| image:: https://img.shields.io/conda/dn/bioconda/probabilistic2020.svg?style=flat
   :target: https://anaconda.org/bioconda/probabilistic2020
   :alt:   (downloads)
.. |docker_probabilistic2020| image:: https://quay.io/repository/biocontainers/probabilistic2020/status
   :target: https://quay.io/repository/biocontainers/probabilistic2020
.. _`probabilistic2020/tags`: https://quay.io/repository/biocontainers/probabilistic2020?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probabilistic2020/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probabilistic2020/README.html
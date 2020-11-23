:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grafimo'
.. highlight: bash

grafimo
=======

.. conda:recipe:: grafimo
   :replaces_section_title:
   :noindex:

   GRAFIMO\, GRAph\-based Finding of Indivividual Motif Occurrences

   :homepage: https://github.com/pinellolab/GRAFIMO
   :license: MIT
   :recipe: /`grafimo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grafimo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grafimo/meta.yaml>`_

   


.. conda:package:: grafimo

   |downloads_grafimo| |docker_grafimo|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.1-0``,  ``1.0.1-0``

      

   
   :depends graphviz: ``>=2.40.1,<3.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends numba: ``>=0.47,<1``
   :depends numpy: ``>=1.16,<1.17``
   :depends pandas: ``>=0.24.2,<0.25``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends statsmodels: ``>=0.10.0,<0.11``
   :depends tabix: 
   :depends vg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grafimo

   and update with::

      conda update grafimo

   or use the docker container::

      docker pull quay.io/biocontainers/grafimo:<tag>

   (see `grafimo/tags`_ for valid values for ``<tag>``)


.. |downloads_grafimo| image:: https://img.shields.io/conda/dn/bioconda/grafimo.svg?style=flat
   :target: https://anaconda.org/bioconda/grafimo
   :alt:   (downloads)
.. |docker_grafimo| image:: https://quay.io/repository/biocontainers/grafimo/status
   :target: https://quay.io/repository/biocontainers/grafimo
.. _`grafimo/tags`: https://quay.io/repository/biocontainers/grafimo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grafimo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grafimo/README.html
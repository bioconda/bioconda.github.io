:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vispr'
.. highlight: bash

vispr
=====

.. conda:recipe:: vispr
   :replaces_section_title:

   VISPR is a visualization framework and analysis workflow for CRISPR\/Cas9 knockout screens. VISPR is designed to display results calculated by MAGeCK.

   :homepage: https://bitbucket.org/liulab/vispr
   :license: MIT / MIT
   :recipe: /`vispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vispr/meta.yaml>`_

   


.. conda:package:: vispr

   |downloads_vispr| |docker_vispr|

   :versions: 0.4.15-0, 0.4.14-2, 0.4.14-1, 0.4.14-0, 0.4.13-0, 0.4.12-0, 0.4.11-0, 0.4.10-0, 0.4.9-0, 0.4.8-0, 0.4.7-0, 0.4.6-0
   
   :depends appdirs: 
   :depends flask: 
   :depends numpy: >=1.10
   :depends pandas: 
   :depends python: >=3
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vispr

   and update with::

      conda update vispr

   or use the docker container::

      docker pull quay.io/biocontainers/vispr:<tag>

   (see `vispr/tags`_ for valid values for ``<tag>``)


.. |downloads_vispr| image:: https://img.shields.io/conda/dn/bioconda/vispr.svg?style=flat
   :target: https://anaconda.org/bioconda/vispr
   :alt:   (downloads)
.. |docker_vispr| image:: https://quay.io/repository/biocontainers/vispr/status
   :target: https://quay.io/repository/biocontainers/vispr
.. _`vispr/tags`: https://quay.io/repository/biocontainers/vispr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vispr/README.html
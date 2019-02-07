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

   :versions: 0.4.14, 0.4.13, 0.4.12, 0.4.11, 0.4.10, 0.4.9, 0.4.8, 0.4.7, 0.4.6

   :depends: :conda:package:`appdirs`  :conda:package:`flask`  :conda:package:`libgcc`  :conda:package:`numpy`  :conda:package:`pandas` >=0.17.1 :conda:package:`python` 3.4* :conda:package:`pyyaml`  :conda:package:`scikit-learn`  :conda:package:`scipy`  

   :required~by: |required_by_vispr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vispr

   and update with::

      conda update vispr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vispr


.. |required_by_vispr| conda:required_by:: vispr
.. |downloads_vispr| image:: https://img.shields.io/conda/dn/bioconda/vispr.svg?style=flat
   :alt:   (downloads)
.. |docker_vispr| image:: https://quay.io/repository/biocontainers/vispr/status
   :target: https://quay.io/repository/biocontainers/vispr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vispr/README.html


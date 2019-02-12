.. title:: Package Recipe 'cmfinder'
.. highlight: bash


cmfinder
========

.. conda:recipe:: cmfinder
   :replaces_section_title:

   CMfinder \- A Covariance Model Based RNA Motif Finding Algorithm

   :homepage: https://sourceforge.net/projects/weinberg-cmfinder/
   :license: GPL3
   :recipe: /`cmfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmfinder/meta.yaml>`_

   


.. conda:package:: cmfinder

   |downloads_cmfinder| |docker_cmfinder|

   :versions: 0.4.1.9, 0.2

   :depends: :conda:package:`blast`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  

   :required~by: |required_by_cmfinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmfinder

   and update with::

      conda update cmfinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cmfinder


.. |required_by_cmfinder| conda:required_by:: cmfinder
.. |downloads_cmfinder| image:: https://img.shields.io/conda/dn/bioconda/cmfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_cmfinder| image:: https://quay.io/repository/biocontainers/cmfinder/status
   :target: https://quay.io/repository/biocontainers/cmfinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmfinder/README.html


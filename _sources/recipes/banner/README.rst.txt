.. title:: Package Recipe 'banner'
.. highlight: bash


banner
======

.. conda:recipe:: banner
   :replaces_section_title:

   BANNER is a tool that lives inside HULK and aims to make sense of hulk histosketches.

   :homepage: https://www.github.com/will-rowe/banner
   :license: MIT
   :recipe: /`banner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/banner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/banner/meta.yaml>`_

   


.. conda:package:: banner

   |downloads_banner| |docker_banner|

   :versions: 0.0.2, 0.0.1

   :depends: :conda:package:`numpy` 1.15.0 :conda:package:`pandas` 0.23.4 :conda:package:`pytest` 3.7.1 :conda:package:`python`  :conda:package:`scikit-learn`  :conda:package:`scipy` 1.1.0 

   :required~by: |required_by_banner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install banner

   and update with::

      conda update banner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/banner


.. |required_by_banner| conda:required_by:: banner
.. |downloads_banner| image:: https://img.shields.io/conda/dn/bioconda/banner.svg?style=flat
   :alt:   (downloads)
.. |docker_banner| image:: https://quay.io/repository/biocontainers/banner/status
   :target: https://quay.io/repository/biocontainers/banner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/banner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/banner/README.html


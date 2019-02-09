.. title:: Package Recipe 'r-sads'
.. highlight: bash


r-sads
======

.. conda:recipe:: r-sads
   :replaces_section_title:

   Maximum likelihood tools to fit and compare models of species abundance distributions and of species rank\-abundance distributions.

   :homepage: http://piLaboratory.github.io/sads, https://github.com/piklprado/sads
   :license: GPL2 / GPL-2
   :recipe: /`r-sads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sads/meta.yaml>`_

   


.. conda:package:: r-sads

   |downloads_r-sads| |docker_r-sads|

   :versions: 0.4.2

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bbmle` >=1.0.19 :conda:package:`r-guilds`  :conda:package:`r-mass`  :conda:package:`r-poilog`  :conda:package:`r-vgam`  

   :required~by: |required_by_r-sads|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sads

   and update with::

      conda update r-sads

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sads


.. |required_by_r-sads| conda:required_by:: r-sads
.. |downloads_r-sads| image:: https://img.shields.io/conda/dn/bioconda/r-sads.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sads| image:: https://quay.io/repository/biocontainers/r-sads/status
   :target: https://quay.io/repository/biocontainers/r-sads







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sads/README.html


.. title:: Package Recipe 'r-zerone'
.. highlight: bash


r-zerone
========

.. conda:recipe:: r-zerone
   :replaces_section_title:

   Zerone discretizes several ChIP\-seq replicates simultaneously and resolves conflicts between them.

   :homepage: https://github.com/nanakiksc/zerone
   :license: GPL / GPL-3
   :recipe: /`r-zerone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-zerone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-zerone/meta.yaml>`_

   


.. conda:package:: r-zerone

   |downloads_r-zerone| |docker_r-zerone|

   :versions: 1.0

   :depends: :conda:package:`r-base` 3.4.1* 

   :required~by: |required_by_r-zerone|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-zerone

   and update with::

      conda update r-zerone

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-zerone


.. |required_by_r-zerone| conda:required_by:: r-zerone
.. |downloads_r-zerone| image:: https://img.shields.io/conda/dn/bioconda/r-zerone.svg?style=flat
   :alt:   (downloads)
.. |docker_r-zerone| image:: https://quay.io/repository/biocontainers/r-zerone/status
   :target: https://quay.io/repository/biocontainers/r-zerone







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-zerone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-zerone/README.html


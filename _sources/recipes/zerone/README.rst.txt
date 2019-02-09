.. title:: Package Recipe 'zerone'
.. highlight: bash


zerone
======

.. conda:recipe:: zerone
   :replaces_section_title:

   Zerone discretizes several ChIP\-seq replicates simultaneously and resolves conflicts between them.

   :homepage: https://github.com/nanakiksc/zerone
   :license: GPL / GPL-3
   :recipe: /`zerone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zerone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zerone/meta.yaml>`_

   


.. conda:package:: zerone

   |downloads_zerone| |docker_zerone|

   :versions: 1.0

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_zerone|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zerone

   and update with::

      conda update zerone

   or use the docker container::

      docker pull quay.io/repository/biocontainers/zerone


.. |required_by_zerone| conda:required_by:: zerone
.. |downloads_zerone| image:: https://img.shields.io/conda/dn/bioconda/zerone.svg?style=flat
   :alt:   (downloads)
.. |docker_zerone| image:: https://quay.io/repository/biocontainers/zerone/status
   :target: https://quay.io/repository/biocontainers/zerone







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zerone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zerone/README.html


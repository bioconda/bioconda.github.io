.. title:: Package Recipe 'damageprofiler'
.. highlight: bash


damageprofiler
==============

.. conda:recipe:: damageprofiler
   :replaces_section_title:

   A Java based tool to determine damage patterns on ancient DNA as a replacement for mapDamage

   :homepage: https://github.com/Integrative-Transcriptomics/DamageProfiler
   :license: GPL / GPL-3.0
   :recipe: /`damageprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damageprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damageprofiler/meta.yaml>`_

   


.. conda:package:: damageprofiler

   |downloads_damageprofiler| |docker_damageprofiler|

   :versions: 0.4.4, 0.4.3, 0.4.2, 0.3.11

   :depends: :conda:package:`openjdk`  :conda:package:`python`  

   :required~by: |required_by_damageprofiler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install damageprofiler

   and update with::

      conda update damageprofiler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/damageprofiler


.. |required_by_damageprofiler| conda:required_by:: damageprofiler
.. |downloads_damageprofiler| image:: https://img.shields.io/conda/dn/bioconda/damageprofiler.svg?style=flat
   :alt:   (downloads)
.. |docker_damageprofiler| image:: https://quay.io/repository/biocontainers/damageprofiler/status
   :target: https://quay.io/repository/biocontainers/damageprofiler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damageprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damageprofiler/README.html


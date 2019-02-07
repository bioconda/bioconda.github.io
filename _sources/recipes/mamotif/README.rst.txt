.. title:: Package Recipe 'mamotif'
.. highlight: bash


mamotif
=======

.. conda:recipe:: mamotif
   :replaces_section_title:

   An integrative toolkit for searching cell type\-specific co\-factors associated with differential binding.

   :homepage: https://github.com/shao-lab/MAmotif
   :license: BSD / BSD License
   :recipe: /`mamotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mamotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mamotif/meta.yaml>`_

   


.. conda:package:: mamotif

   |downloads_mamotif| |docker_mamotif|

   :versions: 1.0.1, 1.0

   :depends: :conda:package:`manorm` >=1.1.4 :conda:package:`motifscan` >=1.1.2 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_mamotif|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mamotif

   and update with::

      conda update mamotif

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mamotif


.. |required_by_mamotif| conda:required_by:: mamotif
.. |downloads_mamotif| image:: https://img.shields.io/conda/dn/bioconda/mamotif.svg?style=flat
   :alt:   (downloads)
.. |docker_mamotif| image:: https://quay.io/repository/biocontainers/mamotif/status
   :target: https://quay.io/repository/biocontainers/mamotif







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mamotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mamotif/README.html


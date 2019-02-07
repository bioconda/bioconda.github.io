.. title:: Package Recipe 'neptune'
.. highlight: bash


neptune
=======

.. conda:recipe:: neptune
   :replaces_section_title:

   Neptune\: Genomic Signature Discovery

   :homepage: https://github.com/phac-nml/neptune
   :license: Apache 2.0
   :recipe: /`neptune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune/meta.yaml>`_

   


.. conda:package:: neptune

   |downloads_neptune| |docker_neptune|

   :versions: 1.2.5, 1.2.3

   :depends: :conda:package:`biopython`  :conda:package:`blast`  :conda:package:`drmaa`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_neptune|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install neptune

   and update with::

      conda update neptune

   or use the docker container::

      docker pull quay.io/repository/biocontainers/neptune


.. |required_by_neptune| conda:required_by:: neptune
.. |downloads_neptune| image:: https://img.shields.io/conda/dn/bioconda/neptune.svg?style=flat
   :alt:   (downloads)
.. |docker_neptune| image:: https://quay.io/repository/biocontainers/neptune/status
   :target: https://quay.io/repository/biocontainers/neptune







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neptune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neptune/README.html


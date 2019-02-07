.. title:: Package Recipe 'snns'
.. highlight: bash


snns
====

.. conda:recipe:: snns
   :replaces_section_title:

   Stuttgart Neural Network Simulator \(SNNS\)

   :homepage: http://www.ra.cs.uni-tuebingen.de/SNNS/
   :license: LGPL v2.1
   :recipe: /`snns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snns/meta.yaml>`_

   


.. conda:package:: snns

   |downloads_snns| |docker_snns|

   :versions: 4.3

   :depends: :conda:package:`bison`  :conda:package:`flex`  :conda:package:`xorg-libxaw3d`  

   :required~by: |required_by_snns|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snns

   and update with::

      conda update snns

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snns


.. |required_by_snns| conda:required_by:: snns
.. |downloads_snns| image:: https://img.shields.io/conda/dn/bioconda/snns.svg?style=flat
   :alt:   (downloads)
.. |docker_snns| image:: https://quay.io/repository/biocontainers/snns/status
   :target: https://quay.io/repository/biocontainers/snns







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snns/README.html


.. title:: Package Recipe 'epic'
.. highlight: bash


epic
====

.. conda:recipe:: epic
   :replaces_section_title:

   Chip\-Seq broad peak\/domain finder.

   :homepage: http://github.com/endrebak/epic
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic/meta.yaml>`_

   


.. conda:package:: epic

   |downloads_epic| |docker_epic|

   :versions: 0.2.12, 0.2.9, 0.2.8, 0.2.7, 0.2.5, 0.2.4, 0.2.2, 0.2.1, 0.2.0, 0.1.28, 0.1.27, 0.1.26, 0.1.25, 0.1.24, 0.1.20, 0.1.17

   :depends: :conda:package:`bedtools`  :conda:package:`cython`  :conda:package:`docopt`  :conda:package:`functools32`  :conda:package:`joblib`  :conda:package:`natsort`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pybigwig`  :conda:package:`pyfaidx`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  :conda:package:`typing`  

   :required~by: |required_by_epic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epic

   and update with::

      conda update epic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/epic


.. |required_by_epic| conda:required_by:: epic
.. |downloads_epic| image:: https://img.shields.io/conda/dn/bioconda/epic.svg?style=flat
   :alt:   (downloads)
.. |docker_epic| image:: https://quay.io/repository/biocontainers/epic/status
   :target: https://quay.io/repository/biocontainers/epic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epic/README.html


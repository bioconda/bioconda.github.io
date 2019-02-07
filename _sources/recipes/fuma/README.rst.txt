.. title:: Package Recipe 'fuma'
.. highlight: bash


fuma
====

.. conda:recipe:: fuma
   :replaces_section_title:

   FuMa\: reporting overlap in RNA\-seq detected fusion genes

   :homepage: https://github.com/yhoogstrate/fuma/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`fuma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fuma/meta.yaml>`_

   


.. conda:package:: fuma

   |downloads_fuma| |docker_fuma|

   :versions: 3.0.5, 3.0.3

   :depends: :conda:package:`htseq`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_fuma|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fuma

   and update with::

      conda update fuma

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fuma


.. |required_by_fuma| conda:required_by:: fuma
.. |downloads_fuma| image:: https://img.shields.io/conda/dn/bioconda/fuma.svg?style=flat
   :alt:   (downloads)
.. |docker_fuma| image:: https://quay.io/repository/biocontainers/fuma/status
   :target: https://quay.io/repository/biocontainers/fuma







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fuma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fuma/README.html


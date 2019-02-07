.. title:: Package Recipe 'biom-format'
.. highlight: bash


biom-format
===========

.. conda:recipe:: biom-format
   :replaces_section_title:

   Biological Observation Matrix \(BIOM\) format

   :homepage: http://www.biom-format.org
   :license: BSD License
   :recipe: /`biom-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biom-format>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biom-format/meta.yaml>`_

   


.. conda:package:: biom-format

   |downloads_biom-format| |docker_biom-format|

   :versions: 2.1.7, 2.1.6, 2.1.5, 2.1.4, 1.3.1

   :depends: :conda:package:`click`  :conda:package:`future` >=0.15.0 :conda:package:`h5py`  :conda:package:`numpy` >=1.3.0 :conda:package:`pandas` >=0.20.0 :conda:package:`pyqi` 0.3.2 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy` >=0.13.0 

   :required~by: |required_by_biom-format|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biom-format

   and update with::

      conda update biom-format

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biom-format


.. |required_by_biom-format| conda:required_by:: biom-format
.. |downloads_biom-format| image:: https://img.shields.io/conda/dn/bioconda/biom-format.svg?style=flat
   :alt:   (downloads)
.. |docker_biom-format| image:: https://quay.io/repository/biocontainers/biom-format/status
   :target: https://quay.io/repository/biocontainers/biom-format







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biom-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biom-format/README.html


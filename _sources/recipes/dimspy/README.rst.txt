.. title:: Package Recipe 'dimspy'
.. highlight: bash


dimspy
======

.. conda:recipe:: dimspy
   :replaces_section_title:

   Python package for data processing of direct\-infusion mass spectrometry\-based metabolomics and lipidomics data

   :homepage: https://github.com/computational-metabolomics/dimspy
   :license: GPL3 / GPLv3
   :recipe: /`dimspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimspy/meta.yaml>`_

   


.. conda:package:: dimspy

   |downloads_dimspy| |docker_dimspy|

   :versions: 1.3.0, 1.2.0, 1.1.0, 1.0.0

   :depends: :conda:package:`fastcluster`  :conda:package:`h5py`  :conda:package:`numpy`  :conda:package:`pymzml` <=2.0.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pythonnet`  :conda:package:`scipy`  

   :required~by: |required_by_dimspy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dimspy

   and update with::

      conda update dimspy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dimspy


.. |required_by_dimspy| conda:required_by:: dimspy
.. |downloads_dimspy| image:: https://img.shields.io/conda/dn/bioconda/dimspy.svg?style=flat
   :alt:   (downloads)
.. |docker_dimspy| image:: https://quay.io/repository/biocontainers/dimspy/status
   :target: https://quay.io/repository/biocontainers/dimspy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dimspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dimspy/README.html


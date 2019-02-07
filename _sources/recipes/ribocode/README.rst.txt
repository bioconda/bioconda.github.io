.. title:: Package Recipe 'ribocode'
.. highlight: bash


ribocode
========

.. conda:recipe:: ribocode
   :replaces_section_title:

   A package for identifying the translated ORFs using ribosome\-profiling data

   :homepage: https://github.com/xryanglab/RiboCode
   :license: MIT / MIT
   :recipe: /`ribocode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocode/meta.yaml>`_

   


.. conda:package:: ribocode

   |downloads_ribocode| |docker_ribocode|

   :versions: 1.2.11, 1.2.10, 1.2.9, 1.2.8, 1.2.7, 1.2.6

   :depends: :conda:package:`biopython`  :conda:package:`future`  :conda:package:`h5py`  :conda:package:`htseq`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pyfasta`  :conda:package:`pysam` >0.8.4 :conda:package:`python`  :conda:package:`scipy`  

   :required~by: |required_by_ribocode|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribocode

   and update with::

      conda update ribocode

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ribocode


.. |required_by_ribocode| conda:required_by:: ribocode
.. |downloads_ribocode| image:: https://img.shields.io/conda/dn/bioconda/ribocode.svg?style=flat
   :alt:   (downloads)
.. |docker_ribocode| image:: https://quay.io/repository/biocontainers/ribocode/status
   :target: https://quay.io/repository/biocontainers/ribocode







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribocode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribocode/README.html


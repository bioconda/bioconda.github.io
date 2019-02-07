.. title:: Package Recipe 'optitype'
.. highlight: bash


optitype
========

.. conda:recipe:: optitype
   :replaces_section_title:

   Precision HLA typing from next\-generation sequencing data

   :homepage: https://github.com/FRED-2/OptiType
   :license: BSD
   :recipe: /`optitype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optitype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optitype/meta.yaml>`_

   


.. conda:package:: optitype

   |downloads_optitype| |docker_optitype|

   :versions: 1.3.2, 1.3.1, 1.2.1, 1.2

   :depends: :conda:package:`future`  :conda:package:`glpk`  :conda:package:`hdf5`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pyomo`  :conda:package:`pysam`  :conda:package:`pytables`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`razers3`  :conda:package:`samtools`  :conda:package:`six`  

   :required~by: |required_by_optitype|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install optitype

   and update with::

      conda update optitype

   or use the docker container::

      docker pull quay.io/repository/biocontainers/optitype


.. |required_by_optitype| conda:required_by:: optitype
.. |downloads_optitype| image:: https://img.shields.io/conda/dn/bioconda/optitype.svg?style=flat
   :alt:   (downloads)
.. |docker_optitype| image:: https://quay.io/repository/biocontainers/optitype/status
   :target: https://quay.io/repository/biocontainers/optitype







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optitype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optitype/README.html


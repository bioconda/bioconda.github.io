.. title:: Package Recipe 'stringmlst'
.. highlight: bash


stringmlst
==========

.. conda:recipe:: stringmlst
   :replaces_section_title:

   Fast k\-mer based tool for multi locus sequence typing \(MLST\) directly from genome sequencing reads

   :homepage: https://github.com/jordanlab/stringMLST
   :license: CC BY-NC-SA 4.0
   :recipe: /`stringmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmlst/meta.yaml>`_

   


.. conda:package:: stringmlst

   |downloads_stringmlst| |docker_stringmlst|

   :versions: 0.5.1, 0.5.1a, 0.4.2, 0.4.1, 0.4, 0.3.7, 0.3.6.1

   :depends: :conda:package:`bedtools`  :conda:package:`bwa`  :conda:package:`lxml`  :conda:package:`pyfaidx`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`samtools` >=1.0 

   :required~by: |required_by_stringmlst|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stringmlst

   and update with::

      conda update stringmlst

   or use the docker container::

      docker pull quay.io/repository/biocontainers/stringmlst


.. |required_by_stringmlst| conda:required_by:: stringmlst
.. |downloads_stringmlst| image:: https://img.shields.io/conda/dn/bioconda/stringmlst.svg?style=flat
   :alt:   (downloads)
.. |docker_stringmlst| image:: https://quay.io/repository/biocontainers/stringmlst/status
   :target: https://quay.io/repository/biocontainers/stringmlst







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringmlst/README.html


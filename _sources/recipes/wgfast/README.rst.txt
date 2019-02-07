.. title:: Package Recipe 'wgfast'
.. highlight: bash


wgfast
======

.. conda:recipe:: wgfast
   :replaces_section_title:

   The whole genome focused array SNP typing \(WG\-FAST\) pipeline

   :homepage: https://github.com/jasonsahl/wgfast
   :license: GPL / GPL v3
   :recipe: /`wgfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgfast/meta.yaml>`_

   


.. conda:package:: wgfast

   |downloads_wgfast| |docker_wgfast|

   :versions: 1.0.3

   :depends: :conda:package:`bbmap`  :conda:package:`biopython`  :conda:package:`bwa` 0.7.8 :conda:package:`dendropy`  :conda:package:`picard`  :conda:package:`python` 3.6.0 :conda:package:`raxml`  :conda:package:`samtools`  

   :required~by: |required_by_wgfast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgfast

   and update with::

      conda update wgfast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wgfast


.. |required_by_wgfast| conda:required_by:: wgfast
.. |downloads_wgfast| image:: https://img.shields.io/conda/dn/bioconda/wgfast.svg?style=flat
   :alt:   (downloads)
.. |docker_wgfast| image:: https://quay.io/repository/biocontainers/wgfast/status
   :target: https://quay.io/repository/biocontainers/wgfast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgfast/README.html


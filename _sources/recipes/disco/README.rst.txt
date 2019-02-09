.. title:: Package Recipe 'disco'
.. highlight: bash


disco
=====

.. conda:recipe:: disco/1.0
   :replaces_section_title:

   Multi\-threaded Distributed Memory Overlap\-Layout\-Consensus \(OLC\) Metagenome Assembler

   :homepage: http://disco.omicsbio.org/
   :license: GPL-3.0
   :recipe: /`disco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco>`_/`1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco/1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disco/1.0/meta.yaml>`_

   


.. conda:package:: disco

   |downloads_disco| |docker_disco|

   :versions: 1.2, 1.0

   :depends: :conda:package:`bbmap`  :conda:package:`biopython`  :conda:package:`openmpi` >=1.8 :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_disco|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install disco

   and update with::

      conda update disco

   or use the docker container::

      docker pull quay.io/repository/biocontainers/disco


.. |required_by_disco| conda:required_by:: disco
.. |downloads_disco| image:: https://img.shields.io/conda/dn/bioconda/disco.svg?style=flat
   :alt:   (downloads)
.. |docker_disco| image:: https://quay.io/repository/biocontainers/disco/status
   :target: https://quay.io/repository/biocontainers/disco







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disco/README.html


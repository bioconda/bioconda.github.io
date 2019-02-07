.. title:: Package Recipe 'svim'
.. highlight: bash


svim
====

.. conda:recipe:: svim
   :replaces_section_title:

   SVIM is a structural variant caller for long reads.

   :homepage: https://github.com/eldariont/svim
   :license: GPL / GPL-3.0
   :recipe: /`svim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim/meta.yaml>`_

   


.. conda:package:: svim

   |downloads_svim| |docker_svim|

   :versions: 0.4.3, 0.4.2, 0.4.1

   :depends: :conda:package:`biopython`  :conda:package:`matplotlib`  :conda:package:`minimap2`  :conda:package:`networkx`  :conda:package:`ngmlr`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` 3.6.* :conda:package:`samtools`  :conda:package:`scipy`  

   :required~by: |required_by_svim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svim

   and update with::

      conda update svim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/svim


.. |required_by_svim| conda:required_by:: svim
.. |downloads_svim| image:: https://img.shields.io/conda/dn/bioconda/svim.svg?style=flat
   :alt:   (downloads)
.. |docker_svim| image:: https://quay.io/repository/biocontainers/svim/status
   :target: https://quay.io/repository/biocontainers/svim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svim/README.html


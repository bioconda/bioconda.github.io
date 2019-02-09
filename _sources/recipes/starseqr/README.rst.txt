.. title:: Package Recipe 'starseqr'
.. highlight: bash


starseqr
========

.. conda:recipe:: starseqr
   :replaces_section_title:

   RNA Fusion Detection and Quantification

   :homepage: https://github.com/ExpressionAnalysis/STAR-SEQR
   :license: ../../LICENSE
   :recipe: /`starseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starseqr/meta.yaml>`_

   


.. conda:package:: starseqr

   |downloads_starseqr| |docker_starseqr|

   :versions: 0.6.7, 0.6.6, 0.6.3, 0.5.0

   :depends: :conda:package:`cython`  :conda:package:`gffread`  :conda:package:`intervaltree_bio`  :conda:package:`networkx`  :conda:package:`numpy`  :conda:package:`pandas` >=0.18.1 :conda:package:`primer3-py`  :conda:package:`pysam` >=0.9.1.4 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`six`  

   :required~by: |required_by_starseqr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install starseqr

   and update with::

      conda update starseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/starseqr


.. |required_by_starseqr| conda:required_by:: starseqr
.. |downloads_starseqr| image:: https://img.shields.io/conda/dn/bioconda/starseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_starseqr| image:: https://quay.io/repository/biocontainers/starseqr/status
   :target: https://quay.io/repository/biocontainers/starseqr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starseqr/README.html


.. title:: Package Recipe 'bracken'
.. highlight: bash


bracken
=======

.. conda:recipe:: bracken
   :replaces_section_title:

   Bracken \(Bayesian Reestimation of Abundance with KrakEN\) is a highly accurate statistical method that computes the abundance of species in DNA sequences from a metagenomics sample.

   :homepage: https://github.com/jenniferlu717/Bracken
   :license: GPL-3.0
   :recipe: /`bracken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bracken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bracken/meta.yaml>`_
   :links: biotools: :biotools:`Bracken`, doi: :doi:`10.7717/peerj-cs.104`

   


.. conda:package:: bracken

   |downloads_bracken| |docker_bracken|

   :versions: 2.2, 1.0.0

   :depends: :conda:package:`kraken`  :conda:package:`kraken2`  :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_bracken|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bracken

   and update with::

      conda update bracken

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bracken


.. |required_by_bracken| conda:required_by:: bracken
.. |downloads_bracken| image:: https://img.shields.io/conda/dn/bioconda/bracken.svg?style=flat
   :alt:   (downloads)
.. |docker_bracken| image:: https://quay.io/repository/biocontainers/bracken/status
   :target: https://quay.io/repository/biocontainers/bracken







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bracken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bracken/README.html


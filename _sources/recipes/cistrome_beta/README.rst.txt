.. title:: Package Recipe 'cistrome_beta'
.. highlight: bash


cistrome_beta
=============

.. conda:recipe:: cistrome_beta
   :replaces_section_title:

   Binding and Expression Target Analysis of ChIP\-seq TF with differential gene expression

   :homepage: https://github.com/hanfeisun/BETA
   :license: This code is free software; you can redistribute it and/or modify it.
   :recipe: /`cistrome_beta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome_beta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome_beta/meta.yaml>`_

   


.. conda:package:: cistrome_beta

   |downloads_cistrome_beta| |docker_cistrome_beta|

   :versions: 1.0.7

   :depends: :conda:package:`argparse`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base`  

   :required~by: |required_by_cistrome_beta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cistrome_beta

   and update with::

      conda update cistrome_beta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cistrome_beta


.. |required_by_cistrome_beta| conda:required_by:: cistrome_beta
.. |downloads_cistrome_beta| image:: https://img.shields.io/conda/dn/bioconda/cistrome_beta.svg?style=flat
   :alt:   (downloads)
.. |docker_cistrome_beta| image:: https://quay.io/repository/biocontainers/cistrome_beta/status
   :target: https://quay.io/repository/biocontainers/cistrome_beta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cistrome_beta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cistrome_beta/README.html


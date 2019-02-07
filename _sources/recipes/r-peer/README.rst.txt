.. title:: Package Recipe 'r-peer'
.. highlight: bash


r-peer
======

.. conda:recipe:: r-peer
   :replaces_section_title:

   PEER is a collection of Bayesian approaches to infer hidden determinants and their effects from gene expression profiles using factor analysis methods. Applications of PEER have \(i\) detected batch effects and experimental confounders \(ii\) increased the number of expression QTL findings by threefold and \(iii\) allowed inference of intermediate cellular traits\, such as transcription factor or pathway activations. This project offers an efficient and versatile C\+\+ implementation of the underlying algorithms with user\-friendly interfaces to R and python. 

   :homepage: 
   :license: GPL 2.0
   :recipe: /`r-peer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-peer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-peer/meta.yaml>`_

   


.. conda:package:: r-peer

   |downloads_r-peer| |docker_r-peer|

   :versions: 1.3

   :depends: :conda:package:`libgcc`  :conda:package:`r` 3.3.1* 

   :required~by: |required_by_r-peer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-peer

   and update with::

      conda update r-peer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-peer


.. |required_by_r-peer| conda:required_by:: r-peer
.. |downloads_r-peer| image:: https://img.shields.io/conda/dn/bioconda/r-peer.svg?style=flat
   :alt:   (downloads)
.. |docker_r-peer| image:: https://quay.io/repository/biocontainers/r-peer/status
   :target: https://quay.io/repository/biocontainers/r-peer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-peer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-peer/README.html


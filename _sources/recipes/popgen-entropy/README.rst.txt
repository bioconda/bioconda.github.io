:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popgen-entropy'
.. highlight: bash

popgen-entropy
==============

.. conda:recipe:: popgen-entropy
   :replaces_section_title:
   :noindex:

   This program is for inferring population structure from autopolyploid and mixed\-ploidy individuals\, similar to structure\, for low\- to medium\-coverage sequencing depth.

   :homepage: https://bitbucket.org/buerklelab/mixedploidy-entropy/src/master/
   :license: GPLv3
   :recipe: /`popgen-entropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popgen-entropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popgen-entropy/meta.yaml>`_
   :links: biotools: :biotools:`popgen-entropy`, doi: :doi:`10.1101/2020.07.31.231514`

   entropy performs model\-based genotype and ancestry estimation software for detecting hybridization in mixed\-ploidy species using genotype\-likelihood data as input. Information about the  model and testing can be found in the pre\-print at \[bioRxiv\]\(https\:\/\/biorxiv.org\/content\/10.1101\/2020.07.31.231514v1\). The vignette\_entropy.pdf file in the Bitbucket repo contains instructions on how to process and analyze genomic data.


.. conda:package:: popgen-entropy

   |downloads_popgen-entropy| |docker_popgen-entropy|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends mkl: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install popgen-entropy

   and update with::

      conda update popgen-entropy

   or use the docker container::

      docker pull quay.io/biocontainers/popgen-entropy:<tag>

   (see `popgen-entropy/tags`_ for valid values for ``<tag>``)


.. |downloads_popgen-entropy| image:: https://img.shields.io/conda/dn/bioconda/popgen-entropy.svg?style=flat
   :target: https://anaconda.org/bioconda/popgen-entropy
   :alt:   (downloads)
.. |docker_popgen-entropy| image:: https://quay.io/repository/biocontainers/popgen-entropy/status
   :target: https://quay.io/repository/biocontainers/popgen-entropy
.. _`popgen-entropy/tags`: https://quay.io/repository/biocontainers/popgen-entropy?tab=tags


.. raw:: html

    <script>
        var package = "popgen-entropy";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popgen-entropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popgen-entropy/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayedtensor'
.. highlight: bash

bioconductor-delayedtensor
==========================

.. conda:recipe:: bioconductor-delayedtensor
   :replaces_section_title:
   :noindex:

   R package for sparse and out\-of\-core arithmetic and decomposition of Tensor

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/DelayedTensor.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-delayedtensor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedtensor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayedtensor/meta.yaml>`_

   DelayedTensor operates Tensor arithmetic directly on DelayedArray object. DelayedTensor provides some generic function related to Tensor arithmetic\/decompotision and dispatches it on the DelayedArray class. DelayedTensor also suppors Tensor contraction by einsum function\, which is inspired by numpy einsum.


.. conda:package:: bioconductor-delayedtensor

   |downloads_bioconductor-delayedtensor| |docker_bioconductor-delayedtensor|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocsingular: ``>=1.14.0,<1.15.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-delayedrandomarray: ``>=1.6.0,<1.7.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-einsum: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-rtensor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-delayedtensor

   and update with::

      conda update bioconductor-delayedtensor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-delayedtensor:<tag>

   (see `bioconductor-delayedtensor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-delayedtensor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayedtensor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayedtensor
   :alt:   (downloads)
.. |docker_bioconductor-delayedtensor| image:: https://quay.io/repository/biocontainers/bioconductor-delayedtensor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayedtensor
.. _`bioconductor-delayedtensor/tags`: https://quay.io/repository/biocontainers/bioconductor-delayedtensor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayedtensor";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayedtensor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayedtensor/README.html
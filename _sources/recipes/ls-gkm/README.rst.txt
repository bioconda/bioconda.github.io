:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ls-gkm'
.. highlight: bash

ls-gkm
======

.. conda:recipe:: ls-gkm
   :replaces_section_title:

   gkm\-SVM\, a sequence\-based method for predicting regulatory DNA elements\, is a useful tool for studying gene regulatory mechanisms. In continuous efforts to improve the method\, new software\, LS\-GKM\, is introduced. It offers much better scalability and provides further advanced gapped k\-mer based kernel functions. As a result\, LS\-GKM achieves considerably higher accuracy than the original gkm\-SVM.

   :homepage: https://github.com/Dongwon-Lee/lsgkm
   :license: GPL3
   :recipe: /`ls-gkm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ls-gkm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ls-gkm/meta.yaml>`_

   


.. conda:package:: ls-gkm

   |downloads_ls-gkm| |docker_ls-gkm|

   :versions: 0.0.1-1, 0.0.1-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ls-gkm

   and update with::

      conda update ls-gkm

   or use the docker container::

      docker pull quay.io/biocontainers/ls-gkm:<tag>

   (see `ls-gkm/tags`_ for valid values for ``<tag>``)


.. |downloads_ls-gkm| image:: https://img.shields.io/conda/dn/bioconda/ls-gkm.svg?style=flat
   :alt:   (downloads)
.. |docker_ls-gkm| image:: https://quay.io/repository/biocontainers/ls-gkm/status
   :target: https://quay.io/repository/biocontainers/ls-gkm
.. _`ls-gkm/tags`: https://quay.io/repository/biocontainers/ls-gkm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ls-gkm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ls-gkm/README.html
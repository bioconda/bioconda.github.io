:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcnvkernel'
.. highlight: bash

gcnvkernel
==========

.. conda:recipe:: gcnvkernel
   :replaces_section_title:

   Python package to support GATK gCNV calling.

   :homepage: https://www.broadinstitute.org/gatk/
   :developer docs: https://github.com/broadinstitute/gatk
   :license: BSD / BSD-3-Clause
   :recipe: /`gcnvkernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcnvkernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcnvkernel/meta.yaml>`_

   


.. conda:package:: gcnvkernel

   |downloads_gcnvkernel| |docker_gcnvkernel|

   :versions: 0.7-0
   
   :depends mkl: 
   :depends numpy: 
   :depends pymc3: 3.1.*
   :depends python: 3.*
   :depends scipy: <1.3.0
   :depends theano: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gcnvkernel

   and update with::

      conda update gcnvkernel

   or use the docker container::

      docker pull quay.io/biocontainers/gcnvkernel:<tag>

   (see `gcnvkernel/tags`_ for valid values for ``<tag>``)


.. |downloads_gcnvkernel| image:: https://img.shields.io/conda/dn/bioconda/gcnvkernel.svg?style=flat
   :target: https://anaconda.org/bioconda/gcnvkernel
   :alt:   (downloads)
.. |docker_gcnvkernel| image:: https://quay.io/repository/biocontainers/gcnvkernel/status
   :target: https://quay.io/repository/biocontainers/gcnvkernel
.. _`gcnvkernel/tags`: https://quay.io/repository/biocontainers/gcnvkernel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcnvkernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcnvkernel/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepvariant'
.. highlight: bash

deepvariant
===========

.. conda:recipe:: deepvariant
   :replaces_section_title:
   :noindex:

   DeepVariant is an analysis pipeline that uses a deep neural network to call genetic variants from next\-generation DNA sequencing data

   :homepage: https://github.com/google/deepvariant
   :license: MIT
   :recipe: /`deepvariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepvariant/meta.yaml>`_

   


.. conda:package:: deepvariant

   |downloads_deepvariant| |docker_deepvariant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.10.0-4</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends absl-py: 
   :depends altair: 
   :depends boost: 
   :depends contextlib2: 
   :depends crcmod: 
   :depends curl: ``>=7.78.0,<8.0a0``
   :depends enum34: 
   :depends google-cloud-sdk: 
   :depends htslib: 
   :depends intervaltree: 
   :depends mock: 
   :depends numpy: ``1.16.*``
   :depends oauth2client: 
   :depends openjdk: ``>=8,<9``
   :depends parallel: 
   :depends protobuf: 
   :depends psutil: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends requests: 
   :depends scipy: 
   :depends six: 
   :depends tensorflow-estimator: ``2.0.*``
   :depends tensorflow-gpu: ``2.0.*``
   :depends unzip: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepvariant

   and update with::

      conda update deepvariant

   or use the docker container::

      docker pull quay.io/biocontainers/deepvariant:<tag>

   (see `deepvariant/tags`_ for valid values for ``<tag>``)


.. |downloads_deepvariant| image:: https://img.shields.io/conda/dn/bioconda/deepvariant.svg?style=flat
   :target: https://anaconda.org/bioconda/deepvariant
   :alt:   (downloads)
.. |docker_deepvariant| image:: https://quay.io/repository/biocontainers/deepvariant/status
   :target: https://quay.io/repository/biocontainers/deepvariant
.. _`deepvariant/tags`: https://quay.io/repository/biocontainers/deepvariant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepvariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepvariant/README.html
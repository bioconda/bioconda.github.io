:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megalodon'
.. highlight: bash

megalodon
=========

.. conda:recipe:: megalodon
   :replaces_section_title:
   :noindex:

   Nanopore modified base and sequence variant detection.

   :homepage: https://github.com/nanoporetech/megalodon
   :documentation: https://nanoporetech.github.io/megalodon/index.html
   
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`megalodon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megalodon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megalodon/meta.yaml>`_

   


.. conda:package:: megalodon

   |downloads_megalodon| |docker_megalodon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.7-0</code>,  <code>2.2.6-0</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-1</code>,  </span></summary>
      

      ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=2.2.1``
   :depends libgcc-ng: ``>=7.5.0``
   :depends mappy: ``>=2.16``
   :depends numpy: ``>=1.9.0``
   :depends ont-fast5-api: ``>=1.1``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scikit-learn: 
   :depends scipy: ``>=1.1.0``
   :depends seaborn: 
   :depends setuptools: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megalodon

   and update with::

      conda update megalodon

   or use the docker container::

      docker pull quay.io/biocontainers/megalodon:<tag>

   (see `megalodon/tags`_ for valid values for ``<tag>``)


.. |downloads_megalodon| image:: https://img.shields.io/conda/dn/bioconda/megalodon.svg?style=flat
   :target: https://anaconda.org/bioconda/megalodon
   :alt:   (downloads)
.. |docker_megalodon| image:: https://quay.io/repository/biocontainers/megalodon/status
   :target: https://quay.io/repository/biocontainers/megalodon
.. _`megalodon/tags`: https://quay.io/repository/biocontainers/megalodon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megalodon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megalodon/README.html
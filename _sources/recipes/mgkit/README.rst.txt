:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgkit'
.. highlight: bash

mgkit
=====

.. conda:recipe:: mgkit
   :replaces_section_title:
   :noindex:

   Metagenomics Framework

   :homepage: https://github.com/frubino/mgkit
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`mgkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgkit/meta.yaml>`_
   :links: biotools: :biotools:`mgkit`, doi: :doi:`10.6084/m9.figshare.1588384`

   


.. conda:package:: mgkit

   |downloads_mgkit| |docker_mgkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.0-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: ``>=6``
   :depends future: 
   :depends htseq: ``>=0.9.1``
   :depends libgcc-ng: ``>=7.5.0``
   :depends matplotlib-base: ``>=2``
   :depends msgpack-python: ``>=0.4.6``
   :depends networkx: 
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.24``
   :depends pymongo: ``>=3.1.1``
   :depends pysam: ``>=0.14``
   :depends pytables: ``>=3.4.2``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends requests: 
   :depends scipy: ``>=0.15.1``
   :depends semidbm: ``>=0.5.1``
   :depends statsmodels: ``>=0.8``
   :depends tqdm: ``>=4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgkit

   and update with::

      conda update mgkit

   or use the docker container::

      docker pull quay.io/biocontainers/mgkit:<tag>

   (see `mgkit/tags`_ for valid values for ``<tag>``)


.. |downloads_mgkit| image:: https://img.shields.io/conda/dn/bioconda/mgkit.svg?style=flat
   :target: https://anaconda.org/bioconda/mgkit
   :alt:   (downloads)
.. |docker_mgkit| image:: https://quay.io/repository/biocontainers/mgkit/status
   :target: https://quay.io/repository/biocontainers/mgkit
.. _`mgkit/tags`: https://quay.io/repository/biocontainers/mgkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgkit/README.html
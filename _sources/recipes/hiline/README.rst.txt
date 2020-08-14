:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiline'
.. highlight: bash

hiline
======

.. conda:recipe:: hiline
   :replaces_section_title:
   :noindex:

   HiC alignment and classification pipeline.

   :homepage: https://github.com/wtsi-hpag/HiLine
   :license: MIT / MIT
   :recipe: /`hiline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiline/meta.yaml>`_

   This is a HiC short\-read alignment pipeline. It will perform an alignment\, or read in an external alignment\, perform optional duplicate\-read marking\, perform HiC read classification based on an in\-slico restriction digest of reference sequences and finally split the output alignments based on HiC read\-type. It can also optionally process and output HiC alignment statistics. Under the hood\, it uses bwa mem and samtools to perform and process alignments. It also uses a custom C\+\+ Python extension to perform the in\-slico digest \(using the Hyperscan \(https\:\/\/github.com\/intel\/hyperscan\) regex library\) and subsequent HiC classification.  


.. conda:package:: hiline

   |downloads_hiline| |docker_hiline|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.9-3</code>,  <code>0.0.9-2</code>,  <code>0.0.9-1</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.0.9-3``,  ``0.0.9-2``,  ``0.0.9-1``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.76``
   :depends bwa: ``>=0.7.17``
   :depends click: ``>=7.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends matplotlib-base: ``>=3.2.0``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.0.1``
   :depends pcre: ``>=8.44,<9.0a0``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends samtools: ``>=1.10``
   :depends seaborn: ``>=0.10.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hiline

   and update with::

      conda update hiline

   or use the docker container::

      docker pull quay.io/biocontainers/hiline:<tag>

   (see `hiline/tags`_ for valid values for ``<tag>``)


.. |downloads_hiline| image:: https://img.shields.io/conda/dn/bioconda/hiline.svg?style=flat
   :target: https://anaconda.org/bioconda/hiline
   :alt:   (downloads)
.. |docker_hiline| image:: https://quay.io/repository/biocontainers/hiline/status
   :target: https://quay.io/repository/biocontainers/hiline
.. _`hiline/tags`: https://quay.io/repository/biocontainers/hiline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiline/README.html
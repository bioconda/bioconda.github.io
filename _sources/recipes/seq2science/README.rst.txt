:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2science'
.. highlight: bash

seq2science
===========

.. conda:recipe:: seq2science
   :replaces_section_title:
   :noindex:

   Automated preprocessing of Next\-Generation\-Sequencing data.

   :homepage: https://vanheeringen-lab.github.io/seq2science
   :developer docs: https://github.com/vanheeringen-lab/seq2science
   :license: MIT / MIT
   :recipe: /`seq2science <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2science>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2science/meta.yaml>`_

   


.. conda:package:: seq2science

   |downloads_seq2science| |docker_seq2science|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-1</code>,  </span></summary>
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.74.*``
   :depends conda: ``4.8.4.*``
   :depends filelock: ``3.0.12.*``
   :depends genomepy: ``0.9.1.*``
   :depends matplotlib-base: ``3.3.2.*``
   :depends pandas_schema: ``0.3.5.*``
   :depends pysradb: ``0.11.1.*``
   :depends python: ``>=3.6``
   :depends pyyaml: ``5.3.1.*``
   :depends snakemake: ``5.18.1.*``
   :depends trackhub: ``0.1.2019.12.24.*``
   :depends xdg: ``5.0.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq2science

   and update with::

      conda update seq2science

   or use the docker container::

      docker pull quay.io/biocontainers/seq2science:<tag>

   (see `seq2science/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2science| image:: https://img.shields.io/conda/dn/bioconda/seq2science.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2science
   :alt:   (downloads)
.. |docker_seq2science| image:: https://quay.io/repository/biocontainers/seq2science/status
   :target: https://quay.io/repository/biocontainers/seq2science
.. _`seq2science/tags`: https://quay.io/repository/biocontainers/seq2science?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2science/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2science/README.html
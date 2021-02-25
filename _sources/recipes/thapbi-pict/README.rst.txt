:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thapbi-pict'
.. highlight: bash

thapbi-pict
===========

.. conda:recipe:: thapbi-pict
   :replaces_section_title:
   :noindex:

   THAPBI Phytophthora ITS1 Classifier Tool \(PICT\).

   :homepage: https://github.com/peterjc/thapbi-pict
   :documentation: https://thapbi-pict.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`thapbi-pict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thapbi-pict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thapbi-pict/meta.yaml>`_

   THAPBI Phytophthora ITS1 Classifier Tool \(PICT\) an ITS1\-based
   diagnostic\/profiling tool from the UK BBSRC funded Tree Health
   and Plant Biosecurity Initiative \(THAPBI\) Phyto\-Threats project\,
   focused on identifying Phytophthora species present in Illumina
   sequenced environmental samples.



.. conda:package:: thapbi-pict

   |downloads_thapbi-pict| |docker_thapbi-pict|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.15-0</code>,  </span></summary>
      

      ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.19-0``,  ``0.4.18-0``,  ``0.4.17-0``,  ``0.4.15-0``,  ``0.4.13-0``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.4-0``,  ``0.3.1-0``,  ``0.2.5-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.12-0``,  ``0.1.10-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends blast: 
   :depends cutadapt: ``>=3.0``
   :depends flash: 
   :depends graphviz: 
   :depends hmmer: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends pydot: 
   :depends python: ``>=3.6``
   :depends python-levenshtein: 
   :depends sqlalchemy: 
   :depends swarm: 
   :depends trimmomatic: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install thapbi-pict

   and update with::

      conda update thapbi-pict

   or use the docker container::

      docker pull quay.io/biocontainers/thapbi-pict:<tag>

   (see `thapbi-pict/tags`_ for valid values for ``<tag>``)


.. |downloads_thapbi-pict| image:: https://img.shields.io/conda/dn/bioconda/thapbi-pict.svg?style=flat
   :target: https://anaconda.org/bioconda/thapbi-pict
   :alt:   (downloads)
.. |docker_thapbi-pict| image:: https://quay.io/repository/biocontainers/thapbi-pict/status
   :target: https://quay.io/repository/biocontainers/thapbi-pict
.. _`thapbi-pict/tags`: https://quay.io/repository/biocontainers/thapbi-pict?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thapbi-pict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thapbi-pict/README.html
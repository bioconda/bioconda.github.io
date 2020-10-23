:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pychopper'
.. highlight: bash

pychopper
=========

.. conda:recipe:: pychopper
   :replaces_section_title:
   :noindex:

   A tool to identify\, orient and rescue full length cDNA reads from nanopore data.

   :homepage: https://github.com/nanoporetech/pychopper
   :license: MPL2
   :recipe: /`pychopper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pychopper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pychopper/meta.yaml>`_

   


.. conda:package:: pychopper

   |downloads_pychopper| |docker_pychopper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-1</code>,  </span></summary>
      

      ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``0.6.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends hmmer: ``>=3.2``
   :depends matplotlib-base: 
   :depends pandas: 
   :depends parasail-python: 
   :depends python: ``>=3``
   :depends python-edlib: 
   :depends seaborn: 
   :depends six: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pychopper

   and update with::

      conda update pychopper

   or use the docker container::

      docker pull quay.io/biocontainers/pychopper:<tag>

   (see `pychopper/tags`_ for valid values for ``<tag>``)


.. |downloads_pychopper| image:: https://img.shields.io/conda/dn/bioconda/pychopper.svg?style=flat
   :target: https://anaconda.org/bioconda/pychopper
   :alt:   (downloads)
.. |docker_pychopper| image:: https://quay.io/repository/biocontainers/pychopper/status
   :target: https://quay.io/repository/biocontainers/pychopper
.. _`pychopper/tags`: https://quay.io/repository/biocontainers/pychopper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pychopper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pychopper/README.html
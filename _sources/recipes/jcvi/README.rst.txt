:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jcvi'
.. highlight: bash

jcvi
====

.. conda:recipe:: jcvi
   :replaces_section_title:
   :noindex:

   Python utility libraries on genome assembly\, annotation and comparative genomics

   :homepage: http://github.com/tanghaibao/jcvi
   :license: BSD / BSD-2-Clause
   :recipe: /`jcvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jcvi/meta.yaml>`_

   JCVI utility libraries


.. conda:package:: jcvi

   |downloads_jcvi| |docker_jcvi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.10-0</code>,  <code>1.1.8-0</code>,  <code>1.1.5-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-1</code>,  </span></summary>
      

      ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.14-0``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11-0``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.6-0``,  ``0.8.12-1``,  ``0.8.12-0``,  ``0.8.4-1``,  ``0.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends boto3: 
   :depends coveralls: 
   :depends deap: 
   :depends ete3: 
   :depends gffutils: 
   :depends goatools: 
   :depends graphviz: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pypdf2: 
   :depends pytest: 
   :depends pytest-benchmark: 
   :depends pytest-cov: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyyaml: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jcvi

   and update with::

      conda update jcvi

   or use the docker container::

      docker pull quay.io/biocontainers/jcvi:<tag>

   (see `jcvi/tags`_ for valid values for ``<tag>``)


.. |downloads_jcvi| image:: https://img.shields.io/conda/dn/bioconda/jcvi.svg?style=flat
   :target: https://anaconda.org/bioconda/jcvi
   :alt:   (downloads)
.. |docker_jcvi| image:: https://quay.io/repository/biocontainers/jcvi/status
   :target: https://quay.io/repository/biocontainers/jcvi
.. _`jcvi/tags`: https://quay.io/repository/biocontainers/jcvi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jcvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jcvi/README.html
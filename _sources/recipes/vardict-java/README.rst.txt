:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vardict-java'
.. highlight: bash

vardict-java
============

.. conda:recipe:: vardict-java
   :replaces_section_title:
   :noindex:

   Java port of the VarDict variant discovery program

   :homepage: https://github.com/AstraZeneca-NGS/VarDictJava
   :license: MIT
   :recipe: /`vardict-java <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict-java>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict-java/meta.yaml>`_

   


.. conda:package:: vardict-java

   |downloads_vardict-java| |docker_vardict-java|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.8-1</code>,  <code>1.5.8-0</code>,  <code>1.5.7-0</code>,  <code>1.5.6-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.3-0</code>,  </span></summary>
      

      ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.8-1``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-1``,  ``1.4.5-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends perl: 
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vardict-java

   and update with::

      conda update vardict-java

   or use the docker container::

      docker pull quay.io/biocontainers/vardict-java:<tag>

   (see `vardict-java/tags`_ for valid values for ``<tag>``)


.. |downloads_vardict-java| image:: https://img.shields.io/conda/dn/bioconda/vardict-java.svg?style=flat
   :target: https://anaconda.org/bioconda/vardict-java
   :alt:   (downloads)
.. |docker_vardict-java| image:: https://quay.io/repository/biocontainers/vardict-java/status
   :target: https://quay.io/repository/biocontainers/vardict-java
.. _`vardict-java/tags`: https://quay.io/repository/biocontainers/vardict-java?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardict-java/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardict-java/README.html
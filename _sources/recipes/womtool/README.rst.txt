:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'womtool'
.. highlight: bash

womtool
=======

.. conda:recipe:: womtool
   :replaces_section_title:
   :noindex:

   Command line utilities for interacting with WDL

   :homepage: https://cromwell.readthedocs.io/en/develop/WOMtool/
   :license: BSD / BSD-3-Clause
   :recipe: /`womtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/womtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/womtool/meta.yaml>`_
   :links: biotools: :biotools:`womtool`

   


.. conda:package:: womtool

   |downloads_womtool| |docker_womtool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>60-0</code>,  <code>58-0</code>,  <code>57-0</code>,  <code>56-0</code>,  <code>55-0</code>,  <code>54-0</code>,  <code>53.1-0</code>,  <code>53-0</code>,  <code>52-0</code>,  </span></summary>
      

      ``60-0``,  ``58-0``,  ``57-0``,  ``56-0``,  ``55-0``,  ``54-0``,  ``53.1-0``,  ``53-0``,  ``52-0``,  ``51-0``,  ``50-0``,  ``49-0``,  ``48-0``,  ``47-0``,  ``46.1-0``,  ``46-0``,  ``45.1-0``,  ``45-0``,  ``44-0``,  ``43-0``,  ``42-0``,  ``41-0``,  ``40-0``,  ``38-0``,  ``36-0``,  ``31-1``,  ``31-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``8.*``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install womtool

   and update with::

      conda update womtool

   or use the docker container::

      docker pull quay.io/biocontainers/womtool:<tag>

   (see `womtool/tags`_ for valid values for ``<tag>``)


.. |downloads_womtool| image:: https://img.shields.io/conda/dn/bioconda/womtool.svg?style=flat
   :target: https://anaconda.org/bioconda/womtool
   :alt:   (downloads)
.. |docker_womtool| image:: https://quay.io/repository/biocontainers/womtool/status
   :target: https://quay.io/repository/biocontainers/womtool
.. _`womtool/tags`: https://quay.io/repository/biocontainers/womtool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/womtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/womtool/README.html
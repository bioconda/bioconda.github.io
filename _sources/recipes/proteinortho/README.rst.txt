:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteinortho'
.. highlight: bash

proteinortho
============

.. conda:recipe:: proteinortho
   :replaces_section_title:
   :noindex:

   Proteinortho is a tool to detect orthologous genes within different species.

   :homepage: https://gitlab.com/paulklemm_PHD/proteinortho/
   :license: GPL / GNU GPL-3
   :recipe: /`proteinortho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteinortho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteinortho/meta.yaml>`_

   


.. conda:package:: proteinortho

   |downloads_proteinortho| |docker_proteinortho|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.18-0</code>,  <code>6.0.17-0</code>,  <code>6.0.16-1</code>,  <code>6.0.16-0</code>,  <code>6.0.15-0</code>,  <code>6.0.14-0</code>,  <code>6.0.13-0</code>,  <code>6.0.12-0</code>,  <code>6.0.11-0</code>,  </span></summary>
      

      ``6.0.18-0``,  ``6.0.17-0``,  ``6.0.16-1``,  ``6.0.16-0``,  ``6.0.15-0``,  ``6.0.14-0``,  ``6.0.13-0``,  ``6.0.12-0``,  ``6.0.11-0``,  ``6.0.10-0``,  ``6.0.9-0``,  ``6.0.8-0``,  ``6.0.7-0``,  ``6.0.6-0``,  ``6.0.5-0``,  ``6.0.4-0``,  ``6.0.3-0``,  ``6.0.2c-0``,  ``6.0.1-0``,  ``6.0-0``,  ``6.0b-0``

      
      .. raw:: html

         </details>
      

   
   :depends diamond: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: ``>=7,<8.0a0``
   :depends liblapacke: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openmp: 
   :depends perl: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteinortho

   and update with::

      conda update proteinortho

   or use the docker container::

      docker pull quay.io/biocontainers/proteinortho:<tag>

   (see `proteinortho/tags`_ for valid values for ``<tag>``)


.. |downloads_proteinortho| image:: https://img.shields.io/conda/dn/bioconda/proteinortho.svg?style=flat
   :target: https://anaconda.org/bioconda/proteinortho
   :alt:   (downloads)
.. |docker_proteinortho| image:: https://quay.io/repository/biocontainers/proteinortho/status
   :target: https://quay.io/repository/biocontainers/proteinortho
.. _`proteinortho/tags`: https://quay.io/repository/biocontainers/proteinortho?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteinortho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteinortho/README.html
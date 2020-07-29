:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cobra'
.. highlight: bash

cobra
=====

.. conda:recipe:: cobra
   :replaces_section_title:
   :noindex:

   COBRApy is a package for constraint\-based modeling of biological networks.

   :homepage: https://opencobra.github.io/cobrapy
   :license: GNU Lesser General Public License v2 or later (LGPLv2+) or GNU General Public License v2 or later (GPLv2+)
   :recipe: /`cobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra/meta.yaml>`_

   


.. conda:package:: cobra

   |downloads_cobra| |docker_cobra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.1-1</code>,  <code>0.18.1-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.4-0</code>,  <code>0.10.1-1</code>,  <code>0.10.1-0</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``0.18.1-1``,  ``0.18.1-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.4-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.4.0b6-0``

      
      .. raw:: html

         </details>
      

   
   :depends depinfo: ``>=1.5.1``
   :depends future: 
   :depends numpy: ``>=1.10.0``
   :depends optlang: ``>=1.4.4``
   :depends pandas: ``>=0.23.0``
   :depends python: 
   :depends python-libsbml: ``>=5.18.0``
   :depends ruamel.yaml: ``>=0.15``
   :depends six: 
   :depends swiglpk: ``>=4.65``
   :depends tabulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cobra

   and update with::

      conda update cobra

   or use the docker container::

      docker pull quay.io/biocontainers/cobra:<tag>

   (see `cobra/tags`_ for valid values for ``<tag>``)


.. |downloads_cobra| image:: https://img.shields.io/conda/dn/bioconda/cobra.svg?style=flat
   :target: https://anaconda.org/bioconda/cobra
   :alt:   (downloads)
.. |docker_cobra| image:: https://quay.io/repository/biocontainers/cobra/status
   :target: https://quay.io/repository/biocontainers/cobra
.. _`cobra/tags`: https://quay.io/repository/biocontainers/cobra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobra/README.html
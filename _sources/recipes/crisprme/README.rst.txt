:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprme'
.. highlight: bash

crisprme
========

.. conda:recipe:: crisprme
   :replaces_section_title:
   :noindex:

   CRISPRme\, tool package for CRISPR experiments assessment and analysis.

   :homepage: https://github.com/samuelecancellieri/CRISPRme
   :license: GPL3
   :recipe: /`crisprme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprme/meta.yaml>`_

   


.. conda:package:: crisprme

   |downloads_crisprme| |docker_crisprme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.9-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends crispritz: 
   :depends python: ``>3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crisprme

   and update with::

      conda update crisprme

   or use the docker container::

      docker pull quay.io/biocontainers/crisprme:<tag>

   (see `crisprme/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprme| image:: https://img.shields.io/conda/dn/bioconda/crisprme.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprme
   :alt:   (downloads)
.. |docker_crisprme| image:: https://quay.io/repository/biocontainers/crisprme/status
   :target: https://quay.io/repository/biocontainers/crisprme
.. _`crisprme/tags`: https://quay.io/repository/biocontainers/crisprme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprme/README.html
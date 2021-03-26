:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'raxml'
.. highlight: bash

raxml
=====

.. conda:recipe:: raxml
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Randomized Axelerated Maximum Likelihood.

   :homepage: http://sco.h-its.org/exelixis/web/software/raxml/index.html
   :license: GPL
   :recipe: /`raxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/raxml/meta.yaml>`_
   :links: biotools: :biotools:`raxml`, doi: :doi:`10.1093/bioinformatics/btu033`, usegalaxy-eu: :usegalaxy-eu:`raxml`

   


.. conda:package:: raxml

   |downloads_raxml| |docker_raxml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.2.12-3</code>,  <code>8.2.12-2</code>,  <code>8.2.12-1</code>,  <code>8.2.12-0</code>,  <code>8.2.10-1</code>,  <code>8.2.10-0</code>,  <code>8.2.9-4</code>,  <code>8.2.9-3</code>,  <code>8.2.9-2</code>,  </span></summary>
      

      ``8.2.12-3``,  ``8.2.12-2``,  ``8.2.12-1``,  ``8.2.12-0``,  ``8.2.10-1``,  ``8.2.10-0``,  ``8.2.9-4``,  ``8.2.9-3``,  ``8.2.9-2``,  ``8.2.9-1``,  ``8.2.9-0``,  ``8.2.4-4``,  ``8.2.4-3``,  ``8.2.4-2``,  ``8.2.4-1``,  ``8.2.4-0``,  ``7.3.0-1``,  ``7.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install raxml

   and update with::

      conda update raxml

   or use the docker container::

      docker pull quay.io/biocontainers/raxml:<tag>

   (see `raxml/tags`_ for valid values for ``<tag>``)


.. |downloads_raxml| image:: https://img.shields.io/conda/dn/bioconda/raxml.svg?style=flat
   :target: https://anaconda.org/bioconda/raxml
   :alt:   (downloads)
.. |docker_raxml| image:: https://quay.io/repository/biocontainers/raxml/status
   :target: https://quay.io/repository/biocontainers/raxml
.. _`raxml/tags`: https://quay.io/repository/biocontainers/raxml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/raxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/raxml/README.html
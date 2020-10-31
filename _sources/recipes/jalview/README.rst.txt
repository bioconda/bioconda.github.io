:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jalview'
.. highlight: bash

jalview
=======

.. conda:recipe:: jalview
   :replaces_section_title:
   :noindex:

   Jalview is a free program for multiple sequence alignment editing\, visualisation\, analysis and figure generation.

   :homepage: https://www.jalview.org/
   :license: GPL-3.0-only
   :recipe: /`jalview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jalview/meta.yaml>`_

   Jalview is a free program for multiple sequence alignment editing\, visualisation\, analysis and figure generation.
   Use it to view and edit sequence alignments\, analyse them with phylogenetic trees and principal
   components analysis \(PCA\) plots and explore molecular structures and annotation. It is also able
   to import and annotate DNA and Protein products from VCF files and retrieve data and annotation from
   Uniprot\, Ensembl\, ENA\, Rfam\, Pfam and the PDBe.



.. conda:package:: jalview

   |downloads_jalview| |docker_jalview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.1.3-0</code>,  <code>2.11.1.2-0</code>,  <code>2.11.1.0-1</code>,  <code>2.11.1.0-0</code>,  <code>2.11.0-1</code>,  <code>2.11.0-0</code>,  <code>2.10.5-3</code>,  <code>2.10.4-0</code>,  <code>2.10.4b1-2</code>,  </span></summary>
      

      ``2.11.1.3-0``,  ``2.11.1.2-0``,  ``2.11.1.0-1``,  ``2.11.1.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.5-3``,  ``2.10.4-0``,  ``2.10.4b1-2``,  ``2.10.4b1-0``,  ``2.10.3-1``,  ``2.10.3-0``,  ``2.10.3b1-0``,  ``2.10.2b2-2``,  ``2.10.2b2-1``,  ``2.10.2b2-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8.0.192``
   :depends psutil: 
   :depends xorg-libxtst: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jalview

   and update with::

      conda update jalview

   or use the docker container::

      docker pull quay.io/biocontainers/jalview:<tag>

   (see `jalview/tags`_ for valid values for ``<tag>``)


.. |downloads_jalview| image:: https://img.shields.io/conda/dn/bioconda/jalview.svg?style=flat
   :target: https://anaconda.org/bioconda/jalview
   :alt:   (downloads)
.. |docker_jalview| image:: https://quay.io/repository/biocontainers/jalview/status
   :target: https://quay.io/repository/biocontainers/jalview
.. _`jalview/tags`: https://quay.io/repository/biocontainers/jalview?tab=tags






Notes
-----
This wrapper and installation is primarily for commandline\-only use.
Set JALVIEW\_JRE\=j1.8 or JALVIEW\_JRE\=j11 to specify the java runtime if you need jalview to start up as quickly as possible
Set JALVIEW\_MAXMEM\=2g to restrict jalviews maximal memory consumption \(here to 2G RAM\). Otherwise 90\% of physical memory
\(capped at 32G\) is allocated.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jalview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jalview/README.html
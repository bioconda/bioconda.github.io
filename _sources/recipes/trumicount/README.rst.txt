:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trumicount'
.. highlight: bash

trumicount
==========

.. conda:recipe:: trumicount
   :replaces_section_title:
   :noindex:

   For NGS experiments using unique molecular identifiers \(UMIs\)\, molecules that are lost entirely during sequencing cause under\- estimation of the molecule count\, and amplification artifacts like PCR chimeras cause over\-estimation. TRUmiCount corrects UMI data for both types of errors\, thus improving the accuracy of measured molecule counts considerably.

   :homepage: https://cibiv.github.io/trumicount/
   :developer docs: https://github.com/Cibiv/trumicount
   :license: AGPL / AGPL-3.0
   :recipe: /`trumicount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trumicount/meta.yaml>`_

   


.. conda:package:: trumicount

   |downloads_trumicount| |docker_trumicount|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.13-3</code>,  <code>0.9.13-2</code>,  <code>0.9.13-1</code>,  <code>0.9.13-0</code>,  <code>0.9.12-0</code>,  <code>0.9.11.1-0</code>,  <code>0.9.11-1</code>,  <code>0.9.10-1</code>,  <code>0.9.9.3-1</code>,  </span></summary>
      

      ``0.9.13-3``,  ``0.9.13-2``,  ``0.9.13-1``,  ``0.9.13-0``,  ``0.9.12-0``,  ``0.9.11.1-0``,  ``0.9.11-1``,  ``0.9.10-1``,  ``0.9.9.3-1``,  ``0.9.9.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends gawk: ``>=4.0.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-docopt: 
   :depends r-gwpcr: ``>=0.9.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trumicount

   and update with::

      conda update trumicount

   or use the docker container::

      docker pull quay.io/biocontainers/trumicount:<tag>

   (see `trumicount/tags`_ for valid values for ``<tag>``)


.. |downloads_trumicount| image:: https://img.shields.io/conda/dn/bioconda/trumicount.svg?style=flat
   :target: https://anaconda.org/bioconda/trumicount
   :alt:   (downloads)
.. |docker_trumicount| image:: https://quay.io/repository/biocontainers/trumicount/status
   :target: https://quay.io/repository/biocontainers/trumicount
.. _`trumicount/tags`: https://quay.io/repository/biocontainers/trumicount?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trumicount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trumicount/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't-coffee'
.. highlight: bash

t-coffee
========

.. conda:recipe:: t-coffee
   :replaces_section_title:
   :noindex:

   A collection of tools for Multiple Alignments of DNA\, RNA\, Protein Sequence

   :homepage: http://www.tcoffee.org/Projects/tcoffee/
   :license: GPL-2.0-only
   :recipe: /`t-coffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t-coffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t-coffee/meta.yaml>`_
   :links: doi: :doi:`10.1006/jmbi.2000.4042`

   


.. conda:package:: t-coffee

   |downloads_t-coffee| |docker_t-coffee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>13.45.0.4846264-3</code>,  <code>13.45.0.4846264-2</code>,  <code>13.45.0.4846264-1</code>,  <code>13.45.0.4846264-0</code>,  <code>13.39.0.d675aed-2</code>,  <code>13.39.0.d675aed-1</code>,  <code>13.39.0.d675aed-0</code>,  <code>12.00.7fb08c2-2</code>,  <code>12.00.7fb08c2-1</code>,  </span></summary>
      

      ``13.45.0.4846264-3``,  ``13.45.0.4846264-2``,  ``13.45.0.4846264-1``,  ``13.45.0.4846264-0``,  ``13.39.0.d675aed-2``,  ``13.39.0.d675aed-1``,  ``13.39.0.d675aed-0``,  ``12.00.7fb08c2-2``,  ``12.00.7fb08c2-1``,  ``12.00.7fb08c2-0``,  ``11.00.8cbe486-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends clustalo: 
   :depends clustalw: 
   :depends consan: 
   :depends dca: 
   :depends dialign-tx: ``1.0.2.*``
   :depends kalign2: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends mafft: ``7.310.*``
   :depends muscle: 
   :depends mustang: ``3.2.3.*``
   :depends pasta: 
   :depends perl: 
   :depends phylip: 
   :depends poa: ``2.0.*``
   :depends prank: 
   :depends probcons: 
   :depends probconsrna: 
   :depends ruby: 
   :depends sap: 
   :depends tmalign: 
   :depends viennarna: ``2.1.9.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install t-coffee

   and update with::

      conda update t-coffee

   or use the docker container::

      docker pull quay.io/biocontainers/t-coffee:<tag>

   (see `t-coffee/tags`_ for valid values for ``<tag>``)


.. |downloads_t-coffee| image:: https://img.shields.io/conda/dn/bioconda/t-coffee.svg?style=flat
   :target: https://anaconda.org/bioconda/t-coffee
   :alt:   (downloads)
.. |docker_t-coffee| image:: https://quay.io/repository/biocontainers/t-coffee/status
   :target: https://quay.io/repository/biocontainers/t-coffee
.. _`t-coffee/tags`: https://quay.io/repository/biocontainers/t-coffee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t-coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t-coffee/README.html
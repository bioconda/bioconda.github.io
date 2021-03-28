:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chemfp'
.. highlight: bash

chemfp
======

.. conda:recipe:: chemfp
   :replaces_section_title:
   :noindex:

   chemfp is a set of command\-lines tools for generating cheminformatics fingerprints and searching those
   fingerprints by Tanimoto similarity\, as well as a Python library which can be used to build new tools.

   These algorithms are designed for the dense\, 100\-10\,000 bit
   fingerprints which occur in small\-molecule\/pharmaceutical
   chemisty. The Tanimoto search algorithms are implemented in C for
   performance and support both threshold and k\-nearest searches.

   Fingerprint generation can be done either by extracting existing
   fingerprint data from an SD file or by using an existing chemistry
   toolkit. chemfp supports the Python libraries from Open Babel\,
   OpenEye\, and RDKit toolkits.


   :homepage: https://chemfp.com
   :license: MIT
   :recipe: /`chemfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chemfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chemfp/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13321-019-0398-8`, usegalaxy-eu: :usegalaxy-eu:`ctb_chemfp_mol2fps`

   


.. conda:package:: chemfp

   |downloads_chemfp| |docker_chemfp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1-1</code>,  <code>1.6.1-0</code>,  <code>1.6-0</code>,  <code>1.5-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.3a1-0</code>,  </span></summary>
      

      ``1.6.1-1``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3-1``,  ``1.3-0``,  ``1.3a1-0``,  ``1.1p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends openbabel: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends rdkit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chemfp

   and update with::

      conda update chemfp

   or use the docker container::

      docker pull quay.io/biocontainers/chemfp:<tag>

   (see `chemfp/tags`_ for valid values for ``<tag>``)


.. |downloads_chemfp| image:: https://img.shields.io/conda/dn/bioconda/chemfp.svg?style=flat
   :target: https://anaconda.org/bioconda/chemfp
   :alt:   (downloads)
.. |docker_chemfp| image:: https://quay.io/repository/biocontainers/chemfp/status
   :target: https://quay.io/repository/biocontainers/chemfp
.. _`chemfp/tags`: https://quay.io/repository/biocontainers/chemfp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chemfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chemfp/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'antismash'
.. highlight: bash

antismash
=========

.. conda:recipe:: antismash
   :replaces_section_title:
   :noindex:

   antiSMASH \- the antibiotics and Secondary Metabolite Analysis SHell

   :homepage: https://docs.antismash.secondarymetabolites.org/intro/
   :documentation: https://docs.antismash.secondarymetabolites.org
   
   :developer docs: https://github.com/antismash/antismash
   :license: AGPL / AGPL-3.0
   :recipe: /`antismash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash/meta.yaml>`_
   :links: biotools: :biotools:`antismash`, doi: :doi:`10.1093/nar/gkr466`, doi: :doi:`10.1093/nar/gkt449`, doi: :doi:`10.1093/nar/gkv437`, doi: :doi:`10.1093/nar/gkx319`, doi: :doi:`10.1093/nar/gkz310`, doi: :doi:`10.1093/nar/gkab335`, usegalaxy-eu: :usegalaxy-eu:`antismash`

   antiSMASH allows the rapid genome\-wide identification\,
   annotation and analysis of secondary metabolite biosynthesis gene clusters.



.. conda:package:: antismash

   |downloads_antismash| |docker_antismash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.0-0</code>,  <code>5.1.2-4</code>,  <code>5.1.2-3</code>,  <code>5.1.2-2</code>,  <code>5.1.2-1</code>,  <code>5.1.2-0</code>,  <code>5.1.1-0</code>,  <code>4.2.0-2</code>,  <code>4.2.0-1</code>,  </span></summary>
      

      ``6.0.0-0``,  ``5.1.2-4``,  ``5.1.2-3``,  ``5.1.2-2``,  ``5.1.2-1``,  ``5.1.2-0``,  ``5.1.1-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.2-3``,  ``4.0.2-2``,  ``4.0.2-1``,  ``4.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: ``>=1.78``
   :depends blast: 
   :depends diamond: ``0.9.*``
   :depends fasttree: ``2.1.*``
   :depends glimmerhmm: ``3.0.*``
   :depends helperlibs: ``>=0.2.0``
   :depends hmmer: ``3.1b2``
   :depends hmmer2: 
   :depends jinja2: 
   :depends joblib: 
   :depends jsonschema: 
   :depends matplotlib-base: 
   :depends meme: ``<=4.11.2``
   :depends muscle: ``3.8.*``
   :depends numpy: 
   :depends openjdk: 
   :depends prodigal: 
   :depends pyscss: 
   :depends pysvg-py3: 
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=0.19``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install antismash

   and update with::

      conda update antismash

   or use the docker container::

      docker pull quay.io/biocontainers/antismash:<tag>

   (see `antismash/tags`_ for valid values for ``<tag>``)


.. |downloads_antismash| image:: https://img.shields.io/conda/dn/bioconda/antismash.svg?style=flat
   :target: https://anaconda.org/bioconda/antismash
   :alt:   (downloads)
.. |docker_antismash| image:: https://quay.io/repository/biocontainers/antismash/status
   :target: https://quay.io/repository/biocontainers/antismash
.. _`antismash/tags`: https://quay.io/repository/biocontainers/antismash?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/antismash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/antismash/README.html
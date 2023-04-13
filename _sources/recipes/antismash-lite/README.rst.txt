:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'antismash-lite'
.. highlight: bash

antismash-lite
==============

.. conda:recipe:: antismash-lite
   :replaces_section_title:
   :noindex:

   antiSMASH \- the antibiotics and Secondary Metabolite Analysis SHell

   :homepage: https://docs.antismash.secondarymetabolites.org/intro/
   :documentation: https://docs.antismash.secondarymetabolites.org
   
   :developer docs: https://github.com/antismash/antismash
   :license: AGPL / AGPL-3.0
   :recipe: /`antismash-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash-lite/meta.yaml>`_
   :links: biotools: :biotools:`antismash`, doi: :doi:`10.1093/nar/gkr466`, doi: :doi:`10.1093/nar/gkt449`, doi: :doi:`10.1093/nar/gkv437`, doi: :doi:`10.1093/nar/gkx319`, doi: :doi:`10.1093/nar/gkz310`, doi: :doi:`10.1093/nar/gkab335`, usegalaxy-eu: :usegalaxy-eu:`antismash`

   antiSMASH allows the rapid genome\-wide identification\,
   annotation and analysis of secondary metabolite biosynthesis gene clusters.



.. conda:package:: antismash-lite

   |downloads_antismash-lite| |docker_antismash-lite|

   :versions:
      
      

      ``6.1.1-1``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.1-1``,  ``6.0.1-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: ``1.78.*``
   :depends blast: 
   :depends diamond: ``>=0.9,<=2.0.15``
   :depends fasttree: ``2.1.*``
   :depends glimmerhmm: ``3.0.*``
   :depends helperlibs: ``>=0.2.0``
   :depends hmmer: ``>=3.1b2``
   :depends hmmer2: 
   :depends jinja2: 
   :depends joblib: 
   :depends jsonschema: 
   :depends markupsafe: ``>=2.0``
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

      conda install antismash-lite

   and update with::

      conda update antismash-lite

   or use the docker container::

      docker pull quay.io/biocontainers/antismash-lite:<tag>

   (see `antismash-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_antismash-lite| image:: https://img.shields.io/conda/dn/bioconda/antismash-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/antismash-lite
   :alt:   (downloads)
.. |docker_antismash-lite| image:: https://quay.io/repository/biocontainers/antismash-lite/status
   :target: https://quay.io/repository/biocontainers/antismash-lite
.. _`antismash-lite/tags`: https://quay.io/repository/biocontainers/antismash-lite?tab=tags


.. raw:: html

    <script>
        var package = "antismash-lite";
        var versions = ["6.1.1","6.1.1","6.1.0","6.0.1","6.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/antismash-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/antismash-lite/README.html
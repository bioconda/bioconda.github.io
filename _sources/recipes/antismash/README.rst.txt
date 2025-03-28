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
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`antismash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash/meta.yaml>`_
   :links: biotools: :biotools:`antismash`, doi: :doi:`10.1093/nar/gkr466`, doi: :doi:`10.1093/nar/gkt449`, doi: :doi:`10.1093/nar/gkv437`, doi: :doi:`10.1093/nar/gkx319`, doi: :doi:`10.1093/nar/gkz310`, doi: :doi:`10.1093/nar/gkab335`, doi: :doi:`10.1093/nar/gkad344`, usegalaxy-eu: :usegalaxy-eu:`antismash`

   antiSMASH allows the rapid genome\-wide identification\,
   annotation and analysis of secondary metabolite biosynthesis gene clusters.



.. conda:package:: antismash

   |downloads_antismash| |docker_antismash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.1.0-1</code>,  <code>7.1.0-0</code>,  <code>6.1.1-0</code>,  <code>6.1.0-0</code>,  <code>6.0.1-0</code>,  <code>6.0.0-0</code>,  <code>5.1.2-4</code>,  <code>5.1.2-3</code>,  <code>5.1.2-2</code>,  </span></summary>
      

      ``7.1.0-1``,  ``7.1.0-0``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.1.2-4``,  ``5.1.2-3``,  ``5.1.2-2``,  ``5.1.2-1``,  ``5.1.2-0``,  ``5.1.1-0``,  ``4.2.0-2``,  ``4.2.0-1``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.2-3``,  ``4.0.2-2``,  ``4.0.2-1``,  ``4.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: ``>=1.78,<=1.79``
   :depends blast: 
   :depends brawn: ``>=1.0.1``
   :depends diamond: 
   :depends fasttree: ``2.1.*``
   :depends glimmerhmm: ``3.0.*``
   :depends helperlibs: ``>=0.2.1``
   :depends hmmer: ``>=3.1b2``
   :depends hmmer2: 
   :depends jinja2: 
   :depends joblib: 
   :depends jsonschema: 
   :depends libsass: 
   :depends markupsafe: ``>=2.0``
   :depends matplotlib-base: 
   :depends meme: ``5.5.*``
   :depends moods: ``>=1.9.4.2``
   :depends nrpys: ``>=0.1.1``
   :depends numpy: 
   :depends prodigal: 
   :depends pysvg-py3: 
   :depends python: 
   :depends scikit-learn: ``>=1.3.2``
   :depends scipy: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install antismash

   and update with::

      mamba update antismash

  To create a new environment, run::

      mamba create --name myenvname antismash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/antismash:<tag>

   (see `antismash/tags`_ for valid values for ``<tag>``)


.. |downloads_antismash| image:: https://img.shields.io/conda/dn/bioconda/antismash.svg?style=flat
   :target: https://anaconda.org/bioconda/antismash
   :alt:   (downloads)
.. |docker_antismash| image:: https://quay.io/repository/biocontainers/antismash/status
   :target: https://quay.io/repository/biocontainers/antismash
.. _`antismash/tags`: https://quay.io/repository/biocontainers/antismash?tab=tags


.. raw:: html

    <script>
        var package = "antismash";
        var versions = ["7.1.0","7.1.0","6.1.1","6.1.0","6.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/antismash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/antismash/README.html
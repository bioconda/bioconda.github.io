:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'antismash-lite'
.. highlight: bash

antismash-lite
==============

.. conda:recipe:: antismash-lite
   :replaces_section_title:
   :noindex:

   antiSMASH \- the antibiotics and Secondary Metabolite Analysis SHell.

   :homepage: https://docs.antismash.secondarymetabolites.org/intro
   :documentation: https://docs.antismash.secondarymetabolites.org
   
   :developer docs: https://github.com/antismash/antismash
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`antismash-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/antismash-lite/meta.yaml>`_
   :links: biotools: :biotools:`antismash`, doi: :doi:`10.1093/nar/gkr466`, doi: :doi:`10.1093/nar/gkt449`, doi: :doi:`10.1093/nar/gkv437`, doi: :doi:`10.1093/nar/gkx319`, doi: :doi:`10.1093/nar/gkz310`, doi: :doi:`10.1093/nar/gkab335`, doi: :doi:`10.1093/nar/gkad344`, usegalaxy-eu: :usegalaxy-eu:`antismash`

   antiSMASH allows the rapid genome\-wide identification\,
   annotation and analysis of secondary metabolite biosynthesis gene clusters.



.. conda:package:: antismash-lite

   |downloads_antismash-lite| |docker_antismash-lite|

   :versions:
      
      

      ``8.0.1-0``,  ``8.0.0-0``,  ``7.1.0-0``,  ``6.1.1-1``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.1-1``,  ``6.0.1-0``

      

   
   :depends bcbio-gff: ``0.7.1``
   :depends biopython: ``1.81``
   :depends blast: 
   :depends brawn: ``1.0.2``
   :depends diamond: 
   :depends fasttree: 
   :depends helperlibs: ``0.2.1``
   :depends hmmer: 
   :depends hmmer2: 
   :depends jinja2: ``3.1.6``
   :depends joblib: ``1.4.2``
   :depends jsonschema: ``4.14.0``
   :depends libsass: ``0.22.0``
   :depends markupsafe: ``3.0.2``
   :depends matplotlib-base: ``3.10.1``
   :depends moods: ``1.9.4.2``
   :depends nrpys: ``0.1.1``
   :depends numpy: ``2.2.5``
   :depends orjson: ``3.10.16``
   :depends prodigal: 
   :depends python: ``>=3.11``
   :depends scikit-learn: ``1.6.1``
   :depends scipy: ``1.15.2``
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

      mamba install antismash-lite

   and update with::

      mamba update antismash-lite

  To create a new environment, run::

      mamba create --name myenvname antismash-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["8.0.1","8.0.0","7.1.0","6.1.1","6.1.1"];
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
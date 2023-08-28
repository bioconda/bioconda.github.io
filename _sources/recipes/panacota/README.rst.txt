:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacota'
.. highlight: bash

panacota
========

.. conda:recipe:: panacota
   :replaces_section_title:
   :noindex:

   Large scale comparative genomics tools\: annotate genomes\, do pangenome\, core\/persistent genome\, align core\/persistent families\, infer phylogenetic tree.

   :homepage: https://github.com/gem-pasteur/PanACoTA
   :documentation: https://aperrin.pages.pasteur.fr/pipeline_annotation/html-doc/
   
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`panacota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota/meta.yaml>`_

   


.. conda:package:: panacota

   |downloads_panacota| |docker_panacota|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1.2-0``

      

   
   :depends biopython: ``>=1.60``
   :depends colorlog: 
   :depends fastme: 
   :depends fasttree: ``>=2.1.10``
   :depends iqtree: ``>=1.6.12``
   :depends mafft: 
   :depends mash: 
   :depends matplotlib-base: ``>=2.0.0``
   :depends mmseqs2: 
   :depends ncbi-genome-download: ``>=0.3.0``
   :depends numpy: ``>=1.11``
   :depends prodigal: ``>=2.6.2``
   :depends progressbar2: ``>=3.18.0``
   :depends prokka: ``1.14.5``
   :depends python: ``>=3.6``
   :depends quicktree: 
   :depends scipy: 
   :depends termcolor: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install panacota

   and update with::

      mamba update panacota

  To create a new environment, run::

      mamba create --name myenvname panacota

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panacota:<tag>

   (see `panacota/tags`_ for valid values for ``<tag>``)


.. |downloads_panacota| image:: https://img.shields.io/conda/dn/bioconda/panacota.svg?style=flat
   :target: https://anaconda.org/bioconda/panacota
   :alt:   (downloads)
.. |docker_panacota| image:: https://quay.io/repository/biocontainers/panacota/status
   :target: https://quay.io/repository/biocontainers/panacota
.. _`panacota/tags`: https://quay.io/repository/biocontainers/panacota?tab=tags


.. raw:: html

    <script>
        var package = "panacota";
        var versions = ["1.4.0","1.3.1","1.2.0","1.1.0","1.0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacota/README.html
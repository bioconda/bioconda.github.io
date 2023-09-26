:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlem'
.. highlight: bash

singlem
=======

.. conda:recipe:: singlem
   :replaces_section_title:
   :noindex:

   SingleM is a tool to find the abundances of discrete operational taxonomic units \(OTUs\) directly from shotgun metagenome data\, without heavy reliance on reference sequence databases. It is able to differentiate closely related species even if those species are from lineages new to science.

   :homepage: https://github.com/wwood/singlem
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`singlem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlem/meta.yaml>`_

   


.. conda:package:: singlem

   |downloads_singlem| |docker_singlem|

   :versions:
      
      

      ``0.14.0-0``,  ``0.13.2-2``,  ``0.13.2-1``,  ``0.13.2-0``

      

   
   :depends biopython: 
   :depends bird_tool_utils_python: ``>=0.4.1``
   :depends cd-hit: 
   :depends diamond: ``>=2.1.7``
   :depends expressbetadiversity: 
   :depends extern: 
   :depends fastalite: 
   :depends fasttree: 
   :depends graftm: ``>=0.14.0``
   :depends hmmer: 
   :depends jinja2: 
   :depends krona: 
   :depends mafft: 
   :depends mfqe: 
   :depends ncbi-ngs-sdk: 
   :depends orfm: 
   :depends pandas: 
   :depends pip: 
   :depends polars: ``>=0.19.3``
   :depends pplacer: 
   :depends prodigal: 
   :depends pyarrow: 
   :depends pyranges: 
   :depends python: ``>=3.7``
   :depends seqmagick: 
   :depends smafa: ``>=0.7.0``
   :depends sqlalchemy: 
   :depends sqlite: 
   :depends squarify: 
   :depends sra-tools: 
   :depends tqdm: 
   :depends zenodo_backpack: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install singlem

   and update with::

      mamba update singlem

  To create a new environment, run::

      mamba create --name myenvname singlem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/singlem:<tag>

   (see `singlem/tags`_ for valid values for ``<tag>``)


.. |downloads_singlem| image:: https://img.shields.io/conda/dn/bioconda/singlem.svg?style=flat
   :target: https://anaconda.org/bioconda/singlem
   :alt:   (downloads)
.. |docker_singlem| image:: https://quay.io/repository/biocontainers/singlem/status
   :target: https://quay.io/repository/biocontainers/singlem
.. _`singlem/tags`: https://quay.io/repository/biocontainers/singlem?tab=tags


.. raw:: html

    <script>
        var package = "singlem";
        var versions = ["0.14.0","0.13.2","0.13.2","0.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlem/README.html
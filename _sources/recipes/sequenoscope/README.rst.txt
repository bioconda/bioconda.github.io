:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenoscope'
.. highlight: bash

sequenoscope
============

.. conda:recipe:: sequenoscope
   :replaces_section_title:
   :noindex:

   sequenoscope is a versatile bioinformatic pipeline for the analysis of sequencing data.

   :homepage: https://github.com/phac-nml/sequenoscope
   :license: Apache-2.0
   :recipe: /`sequenoscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenoscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenoscope/meta.yaml>`_

   


.. conda:package:: sequenoscope

   |downloads_sequenoscope| |docker_sequenoscope|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends biopython: ``>=1.7``
   :depends fastp: ``>=0.22.0,<=0.23.2``
   :depends mash: ``>=2.3``
   :depends minimap2: ``>=2.26``
   :depends numpy: 
   :depends pandas: 
   :depends plotly: ``>=5.16.1``
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.7.12,<4``
   :depends samtools: ``>=1.6``
   :depends scipy: ``>=1.7.3``
   :depends seqtk: ``>=1.4``
   :depends six: ``>=1.14.0``
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

      mamba install sequenoscope

   and update with::

      mamba update sequenoscope

  To create a new environment, run::

      mamba create --name myenvname sequenoscope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequenoscope:<tag>

   (see `sequenoscope/tags`_ for valid values for ``<tag>``)


.. |downloads_sequenoscope| image:: https://img.shields.io/conda/dn/bioconda/sequenoscope.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenoscope
   :alt:   (downloads)
.. |docker_sequenoscope| image:: https://quay.io/repository/biocontainers/sequenoscope/status
   :target: https://quay.io/repository/biocontainers/sequenoscope
.. _`sequenoscope/tags`: https://quay.io/repository/biocontainers/sequenoscope?tab=tags


.. raw:: html

    <script>
        var package = "sequenoscope";
        var versions = ["0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenoscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenoscope/README.html
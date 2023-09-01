:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transposcope'
.. highlight: bash

transposcope
============

.. conda:recipe:: transposcope
   :replaces_section_title:
   :noindex:

   A package for visualizing read coverage in areas flanking mobile element insertions.

   :homepage: https://github.com/FenyoLab/transposcope
   :license: MIT / MIT License
   :recipe: /`transposcope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposcope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposcope/meta.yaml>`_

   


.. conda:package:: transposcope

   |downloads_transposcope| |docker_transposcope|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.76``
   :depends bowtie2: ``>=2.3.5``
   :depends numpy: ``>=1.17.4``
   :depends pandas: ``>=0.25.1``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3``
   :depends samtools: ``>=1.10``
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

      mamba install transposcope

   and update with::

      mamba update transposcope

  To create a new environment, run::

      mamba create --name myenvname transposcope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transposcope:<tag>

   (see `transposcope/tags`_ for valid values for ``<tag>``)


.. |downloads_transposcope| image:: https://img.shields.io/conda/dn/bioconda/transposcope.svg?style=flat
   :target: https://anaconda.org/bioconda/transposcope
   :alt:   (downloads)
.. |docker_transposcope| image:: https://quay.io/repository/biocontainers/transposcope/status
   :target: https://quay.io/repository/biocontainers/transposcope
.. _`transposcope/tags`: https://quay.io/repository/biocontainers/transposcope?tab=tags


.. raw:: html

    <script>
        var package = "transposcope";
        var versions = ["2.0.1","2.0.0","2.0.0","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transposcope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transposcope/README.html
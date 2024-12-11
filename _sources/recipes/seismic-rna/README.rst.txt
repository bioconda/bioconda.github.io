:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seismic-rna'
.. highlight: bash

seismic-rna
===========

.. conda:recipe:: seismic-rna
   :replaces_section_title:
   :noindex:

   SEISMIC\-RNA software by the Rouskin Lab

   :homepage: https://github.com/rouskinlab/seismic-rna
   :license: `GPL3 / GPL-3.0-only <https://www.gnu.org/licenses/gpl-3.0.html>`_
   :recipe: /`seismic-rna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seismic-rna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seismic-rna/meta.yaml>`_

   


.. conda:package:: seismic-rna

   |downloads_seismic-rna| |docker_seismic-rna|

   :versions:
      
      

      ``0.22.1-0``,  ``0.22.0-0``,  ``0.21.1-1``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.1-0``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.19.2-0``

      

   
   :depends bowtie2: ``>=2.5.4``
   :depends brotli-python: ``>=1.0``
   :depends click: ``>=8.1``
   :depends fastp: ``>=0.23.0``
   :depends fastqsplitter: ``>=1.2``
   :depends numba: ``>=0.60``
   :depends numpy: ``>=1.26,<1.27``
   :depends pandas: ``>=2.2``
   :depends plotly: ``>=5.23``
   :depends python: ``>=3.10``
   :depends python-kaleido: ``>=0.2.1``
   :depends pyyaml: ``>=6.0``
   :depends rnastructure: ``>=6.4``
   :depends samtools: ``>=1.20``
   :depends scipy: ``>=1.13``
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

      mamba install seismic-rna

   and update with::

      mamba update seismic-rna

  To create a new environment, run::

      mamba create --name myenvname seismic-rna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seismic-rna:<tag>

   (see `seismic-rna/tags`_ for valid values for ``<tag>``)


.. |downloads_seismic-rna| image:: https://img.shields.io/conda/dn/bioconda/seismic-rna.svg?style=flat
   :target: https://anaconda.org/bioconda/seismic-rna
   :alt:   (downloads)
.. |docker_seismic-rna| image:: https://quay.io/repository/biocontainers/seismic-rna/status
   :target: https://quay.io/repository/biocontainers/seismic-rna
.. _`seismic-rna/tags`: https://quay.io/repository/biocontainers/seismic-rna?tab=tags


.. raw:: html

    <script>
        var package = "seismic-rna";
        var versions = ["0.22.1","0.22.0","0.21.1","0.21.1","0.21.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seismic-rna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seismic-rna/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ourotools'
.. highlight: bash

ourotools
=========

.. conda:recipe:: ourotools
   :replaces_section_title:
   :noindex:

   A comprehensive toolkit for quality control and analysis of single\-cell long\-read RNA\-seq data

   :homepage: https://github.com/ahs2202/ouro-tools
   :documentation: https://pypi.org/project/ourotools/
   
   :license: MIT / MIT
   :recipe: /`ourotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ourotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ourotools/meta.yaml>`_

   Ouro\-Tools is a novel\, comprehensive computational pipeline for long\-read scRNA\-seq with the following key features. Ouro\-Tools \(1\) normalizes mRNA size distributions and \(2\) detects mRNA 7\-methylguanosine caps to integrate multiple single\-cell long\-read RNA\-sequencing experiments across modalities and characterize full\-length transcripts\, respectively.


.. conda:package:: ourotools

   |downloads_ourotools| |docker_ourotools|

   :versions:
      
      

      ``0.2.8-0``,  ``0.2.7-0``

      

   
   :depends bitarray: ``>=2.5.1``
   :depends h5py: ``>=3.8.0``
   :depends intervaltree: ``>=3.1.0``
   :depends joblib: ``>=1.2.0``
   :depends mappy: ``>=2.24``
   :depends matplotlib-base: ``>=3.5.2``
   :depends minimap2: ``>=2.28``
   :depends nest-asyncio: ``>=1.5.6``
   :depends numpy: ``>=1.26.4``
   :depends owlready2: ``>=0.46``
   :depends pandas: ``>=1.5.2``
   :depends plotly: ``>=5.18.0``
   :depends pybigwig: ``>=0.3.22``
   :depends pysam: ``>=0.18.0``
   :depends python: ``>=3.11``
   :depends regex: ``>=2.5.135``
   :depends samtools: ``>=1.10``
   :depends scanpy: ``>=1.10.2``
   :depends scipy: ``>=1.9.1``
   :depends tqdm: ``>=4.64.1``
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

      mamba install ourotools

   and update with::

      mamba update ourotools

  To create a new environment, run::

      mamba create --name myenvname ourotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ourotools:<tag>

   (see `ourotools/tags`_ for valid values for ``<tag>``)


.. |downloads_ourotools| image:: https://img.shields.io/conda/dn/bioconda/ourotools.svg?style=flat
   :target: https://anaconda.org/bioconda/ourotools
   :alt:   (downloads)
.. |docker_ourotools| image:: https://quay.io/repository/biocontainers/ourotools/status
   :target: https://quay.io/repository/biocontainers/ourotools
.. _`ourotools/tags`: https://quay.io/repository/biocontainers/ourotools?tab=tags


.. raw:: html

    <script>
        var package = "ourotools";
        var versions = ["0.2.8","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ourotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ourotools/README.html
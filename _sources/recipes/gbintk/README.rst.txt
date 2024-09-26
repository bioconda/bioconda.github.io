:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbintk'
.. highlight: bash

gbintk
======

.. conda:recipe:: gbintk
   :replaces_section_title:
   :noindex:

   GraphBin\-Tk\: assembly graph\-based metagenomic binning toolkit

   :homepage: https://github.com/metagentools/gbintk
   :documentation: https://gbintk.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gbintk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbintk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbintk/meta.yaml>`_

   GraphBin\-Tk is a toolkit that combines assembly graph\-based metagenomic bin\-refinement and binning techniques GraphBin\, GraphBin2 and MetaCoAG.



.. conda:package:: gbintk

   |downloads_gbintk| |docker_gbintk|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends cairo: 
   :depends cairocffi: 
   :depends click: 
   :depends cogent3: 
   :depends fraggenescan: 
   :depends graphbin: 
   :depends graphbin2: 
   :depends hmmer: 
   :depends metacoag: ``>=1.2.1``
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pkg-config: 
   :depends python: ``>=3.7,<3.11``
   :depends python-igraph: 
   :depends scipy: 
   :depends tabulate: 
   :depends tqdm: 
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

      mamba install gbintk

   and update with::

      mamba update gbintk

  To create a new environment, run::

      mamba create --name myenvname gbintk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gbintk:<tag>

   (see `gbintk/tags`_ for valid values for ``<tag>``)


.. |downloads_gbintk| image:: https://img.shields.io/conda/dn/bioconda/gbintk.svg?style=flat
   :target: https://anaconda.org/bioconda/gbintk
   :alt:   (downloads)
.. |docker_gbintk| image:: https://quay.io/repository/biocontainers/gbintk/status
   :target: https://quay.io/repository/biocontainers/gbintk
.. _`gbintk/tags`: https://quay.io/repository/biocontainers/gbintk?tab=tags


.. raw:: html

    <script>
        var package = "gbintk";
        var versions = ["1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbintk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbintk/README.html
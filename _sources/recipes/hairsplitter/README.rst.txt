:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hairsplitter'
.. highlight: bash

hairsplitter
============

.. conda:recipe:: hairsplitter
   :replaces_section_title:
   :noindex:

   Recovers collapsed haplotypes from a draft assembly and long reads

   :homepage: https://github.com/RolandFaure/HairSplitter
   :license: GPL-3.0-or-later
   :recipe: /`hairsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hairsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hairsplitter/meta.yaml>`_

   


.. conda:package:: hairsplitter

   |downloads_hairsplitter| |docker_hairsplitter|

   :versions:
      
      

      ``1.9.10-0``,  ``1.9.9-0``,  ``1.9.5-0``,  ``1.8.0-0``,  ``1.7.15-0``,  ``1.7.14-0``,  ``1.7.13-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends minigraph: ``>=0.20``
   :depends minimap2: 
   :depends numpy: 
   :depends openmp: 
   :depends python: 
   :depends racon: 
   :depends raven-assembler: 
   :depends samtools: ``>=1.16``
   :depends scipy: 
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

      mamba install hairsplitter

   and update with::

      mamba update hairsplitter

  To create a new environment, run::

      mamba create --name myenvname hairsplitter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hairsplitter:<tag>

   (see `hairsplitter/tags`_ for valid values for ``<tag>``)


.. |downloads_hairsplitter| image:: https://img.shields.io/conda/dn/bioconda/hairsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/hairsplitter
   :alt:   (downloads)
.. |docker_hairsplitter| image:: https://quay.io/repository/biocontainers/hairsplitter/status
   :target: https://quay.io/repository/biocontainers/hairsplitter
.. _`hairsplitter/tags`: https://quay.io/repository/biocontainers/hairsplitter?tab=tags


.. raw:: html

    <script>
        var package = "hairsplitter";
        var versions = ["1.9.10","1.9.9","1.9.5","1.8.0","1.7.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hairsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hairsplitter/README.html
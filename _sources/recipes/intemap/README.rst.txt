:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intemap'
.. highlight: bash

intemap
=======

.. conda:recipe:: intemap
   :replaces_section_title:
   :noindex:

   Integrated metagenomic assembly pipeline for short reads

   :homepage: http://cqb.pku.edu.cn/ZhuLab/InteMAP/index.html
   :license: 
   :recipe: /`intemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intemap/meta.yaml>`_

   


.. conda:package:: intemap

   |downloads_intemap| |docker_intemap|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends abyss: 
   :depends bowtie2: 
   :depends idba: 
   :depends jellyfish: 
   :depends libgcc: 
   :depends mummer: 
   :depends python: ``2.7*``
   :depends quake: 
   :depends wgs-assembler: 
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

      mamba install intemap

   and update with::

      mamba update intemap

  To create a new environment, run::

      mamba create --name myenvname intemap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/intemap:<tag>

   (see `intemap/tags`_ for valid values for ``<tag>``)


.. |downloads_intemap| image:: https://img.shields.io/conda/dn/bioconda/intemap.svg?style=flat
   :target: https://anaconda.org/bioconda/intemap
   :alt:   (downloads)
.. |docker_intemap| image:: https://quay.io/repository/biocontainers/intemap/status
   :target: https://quay.io/repository/biocontainers/intemap
.. _`intemap/tags`: https://quay.io/repository/biocontainers/intemap?tab=tags


.. raw:: html

    <script>
        var package = "intemap";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intemap/README.html
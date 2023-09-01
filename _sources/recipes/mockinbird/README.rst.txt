:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mockinbird'
.. highlight: bash

mockinbird
==========

.. conda:recipe:: mockinbird
   :replaces_section_title:
   :noindex:

   A fully automatic and reproducible PAR\-CLIP analysis pipeline

   :homepage: https://github.com/soedinglab/mockinbird
   :documentation: http://wwwuser.gwdg.de/~compbiol/mockinbird/doc/
   
   :license: GPL3 / GPL-3
   :recipe: /`mockinbird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird/meta.yaml>`_

   


.. conda:package:: mockinbird

   |downloads_mockinbird| |docker_mockinbird|

   :versions:
      
      

      ``1.0.0a1-6``,  ``1.0.0a1-5``,  ``1.0.0a1-4``,  ``1.0.0a1-3``,  ``1.0.0a1-2``,  ``1.0.0a1-1``,  ``1.0.0a1-0``

      

   
   :depends bowtie: 
   :depends fastqc: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends pyyaml: 
   :depends r-base: 
   :depends r-lsd: 
   :depends samtools: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends star: 
   :depends xxmotif: 
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

      mamba install mockinbird

   and update with::

      mamba update mockinbird

  To create a new environment, run::

      mamba create --name myenvname mockinbird

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mockinbird:<tag>

   (see `mockinbird/tags`_ for valid values for ``<tag>``)


.. |downloads_mockinbird| image:: https://img.shields.io/conda/dn/bioconda/mockinbird.svg?style=flat
   :target: https://anaconda.org/bioconda/mockinbird
   :alt:   (downloads)
.. |docker_mockinbird| image:: https://quay.io/repository/biocontainers/mockinbird/status
   :target: https://quay.io/repository/biocontainers/mockinbird
.. _`mockinbird/tags`: https://quay.io/repository/biocontainers/mockinbird?tab=tags


.. raw:: html

    <script>
        var package = "mockinbird";
        var versions = ["1.0.0a1","1.0.0a1","1.0.0a1","1.0.0a1","1.0.0a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mockinbird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mockinbird/README.html
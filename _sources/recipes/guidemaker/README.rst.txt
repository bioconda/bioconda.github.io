:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidemaker'
.. highlight: bash

guidemaker
==========

.. conda:recipe:: guidemaker
   :replaces_section_title:
   :noindex:

   GuideMaker\: Software to design gRNAs pools in non\-model genomes and CRISPR\-Cas systems

   :homepage: https://guidemaker.app.scinet.usda.gov/
   :documentation: https://guidemaker.org/
   
   :developer docs: https://github.com/USDA-ARS-GBRU/GuideMaker
   :license: PUBLIC-DOMAIN / CC0-1.0
   :recipe: /`guidemaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidemaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidemaker/meta.yaml>`_
   :links: biotools: :biotools:`GuideMaker`, doi: :doi:`10.5281/zenodo.4849258`

   


.. conda:package:: guidemaker

   |downloads_guidemaker| |docker_guidemaker|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.4-0``,  ``0.2.0-0``

      

   
   :depends altair: 
   :depends biopython: ``>=1.79``
   :depends importlib-resources: ``>=6.0``
   :depends nmslib: ``>=2.0.6``
   :depends numpy: ``>=1.11``
   :depends onnxruntime: ``>=1.8.1``
   :depends pandas: ``>=1.0.0``
   :depends pdoc3: 
   :depends pip: 
   :depends pybedtools: ``>=0.8.2``
   :depends pytest: ``>=4.6``
   :depends pytest-cov: 
   :depends python: ``>=3.8,<3.12``
   :depends pyyaml: ``>=5.4.1``
   :depends regex: ``2020.11.13``
   :depends streamlit: ``>=0.81.0``
   :depends streamlit_tags: ``>=1.2.6``
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

      mamba install guidemaker

   and update with::

      mamba update guidemaker

  To create a new environment, run::

      mamba create --name myenvname guidemaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/guidemaker:<tag>

   (see `guidemaker/tags`_ for valid values for ``<tag>``)


.. |downloads_guidemaker| image:: https://img.shields.io/conda/dn/bioconda/guidemaker.svg?style=flat
   :target: https://anaconda.org/bioconda/guidemaker
   :alt:   (downloads)
.. |docker_guidemaker| image:: https://quay.io/repository/biocontainers/guidemaker/status
   :target: https://quay.io/repository/biocontainers/guidemaker
.. _`guidemaker/tags`: https://quay.io/repository/biocontainers/guidemaker?tab=tags


.. raw:: html

    <script>
        var package = "guidemaker";
        var versions = ["0.4.2","0.4.1","0.4.0","0.3.6","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidemaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidemaker/README.html
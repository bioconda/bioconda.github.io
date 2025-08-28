:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sadie-antibody'
.. highlight: bash

sadie-antibody
==============

.. conda:recipe:: sadie-antibody
   :replaces_section_title:
   :noindex:

   The Complete Antibody Library

   :homepage: https://sadie.jordanrwillis.com
   :developer docs: https://github.com/jwillis0720/sadie
   :license: MIT
   :recipe: /`sadie-antibody <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sadie-antibody>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sadie-antibody/meta.yaml>`_

   SADIE \(Sequencing Analysis and Data library for Immunoinformatics Exploration\) provides
   command\-line apps and a Python API for antibody\/AIRR analyses.



.. conda:package:: sadie-antibody

   |downloads_sadie-antibody| |docker_sadie-antibody|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends biopython: ``>=1.84``
   :depends click: ``>=8.0,<8.2``
   :depends filetype: ``>=1.2.0``
   :depends ipython: ``>=8.18.0``
   :depends openpyxl: ``>=3.1.0``
   :depends pandas: ``>=2.3,<3``
   :depends pip: 
   :depends pyarrow: ``>=20.0.0``
   :depends pydantic: ``>=2.0.0,<3.0.0``
   :depends pyhmmer: ``>=0.11.1``
   :depends python: ``>=3.9,<3.14``
   :depends python-levenshtein: ``>=0.27.0``
   :depends pyyaml: ``>=6.0``
   :depends requests: ``>=2.32.0``
   :depends rich: ``>=14.1.0``
   :depends scikit-learn: ``>=1.5.0``
   :depends scipy: ``>=1.11.0``
   :depends semantic_version: 
   :depends yarl: ``>=1.9.0``
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

      mamba install sadie-antibody

   and update with::

      mamba update sadie-antibody

  To create a new environment, run::

      mamba create --name myenvname sadie-antibody

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sadie-antibody:<tag>

   (see `sadie-antibody/tags`_ for valid values for ``<tag>``)


.. |downloads_sadie-antibody| image:: https://img.shields.io/conda/dn/bioconda/sadie-antibody.svg?style=flat
   :target: https://anaconda.org/bioconda/sadie-antibody
   :alt:   (downloads)
.. |docker_sadie-antibody| image:: https://quay.io/repository/biocontainers/sadie-antibody/status
   :target: https://quay.io/repository/biocontainers/sadie-antibody
.. _`sadie-antibody/tags`: https://quay.io/repository/biocontainers/sadie-antibody?tab=tags


.. raw:: html

    <script>
        var package = "sadie-antibody";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sadie-antibody/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sadie-antibody/README.html
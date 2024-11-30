:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogist'
.. highlight: bash

pathogist
=========

.. conda:recipe:: pathogist
   :replaces_section_title:
   :noindex:

   Calibrated multi\-criterion genomic analysis for public health microbiology

   :homepage: https://github.com/WGS-TB/PathOGiST
   :license: GPL-3.0
   :recipe: /`pathogist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist/meta.yaml>`_

   


.. conda:package:: pathogist

   |downloads_pathogist| |docker_pathogist|

   :versions:
      
      

      ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2.3-0``

      

   
   :depends coincbc: ``>=2.9.9``
   :depends khmer: 
   :depends kwip: 
   :depends matplotlib: 
   :depends mentalist: 
   :depends networkx: 
   :depends numpy: ``>=1.15.1``
   :depends pandas: ``>=0.23.4``
   :depends prince: 
   :depends pulp: ``>=1.6.8``
   :depends python: 
   :depends pyyaml: ``>=3.13``
   :depends scikit-learn: ``>=0.19.1``
   :depends scipy: ``>=1.1.0``
   :depends snippy: ``3.2``
   :depends spotyping3: 
   :depends vcflib: 
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

      mamba install pathogist

   and update with::

      mamba update pathogist

  To create a new environment, run::

      mamba create --name myenvname pathogist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathogist:<tag>

   (see `pathogist/tags`_ for valid values for ``<tag>``)


.. |downloads_pathogist| image:: https://img.shields.io/conda/dn/bioconda/pathogist.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogist
   :alt:   (downloads)
.. |docker_pathogist| image:: https://quay.io/repository/biocontainers/pathogist/status
   :target: https://quay.io/repository/biocontainers/pathogist
.. _`pathogist/tags`: https://quay.io/repository/biocontainers/pathogist?tab=tags


.. raw:: html

    <script>
        var package = "pathogist";
        var versions = ["0.3.6","0.3.6","0.3.2","0.3.1","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogist/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rna-cd'
.. highlight: bash

rna-cd
======

.. conda:recipe:: rna-cd
   :replaces_section_title:
   :noindex:

   RNA contamination detector

   :homepage: https://github.com/LUMC/rna_cd
   :documentation: https://rna-cd.readthedocs.io/en/latest/
   
   :license: AGPL / GNU Affero General Public v3 or later (AGPLv3+)
   :recipe: /`rna-cd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-cd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-cd/meta.yaml>`_

   


.. conda:package:: rna-cd

   |downloads_rna-cd| |docker_rna-cd|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends joblib: 
   :depends matplotlib: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends scikit-learn: 
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

      mamba install rna-cd

   and update with::

      mamba update rna-cd

  To create a new environment, run::

      mamba create --name myenvname rna-cd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rna-cd:<tag>

   (see `rna-cd/tags`_ for valid values for ``<tag>``)


.. |downloads_rna-cd| image:: https://img.shields.io/conda/dn/bioconda/rna-cd.svg?style=flat
   :target: https://anaconda.org/bioconda/rna-cd
   :alt:   (downloads)
.. |docker_rna-cd| image:: https://quay.io/repository/biocontainers/rna-cd/status
   :target: https://quay.io/repository/biocontainers/rna-cd
.. _`rna-cd/tags`: https://quay.io/repository/biocontainers/rna-cd?tab=tags


.. raw:: html

    <script>
        var package = "rna-cd";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-cd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-cd/README.html
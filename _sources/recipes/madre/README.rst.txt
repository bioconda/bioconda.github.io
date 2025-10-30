:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'madre'
.. highlight: bash

madre
=====

.. conda:recipe:: madre
   :replaces_section_title:
   :noindex:

   Strain\-level metagenomic classification with Metagenome Assembly driven Database Reduction approach.

   :homepage: https://github.com/lbcb-sci/MADRe
   :documentation: https://github.com/lbcb-sci/MADRe/blob/v0.0.5/README.md
   
   :license: MIT / MIT
   :recipe: /`madre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/madre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/madre/meta.yaml>`_

   


.. conda:package:: madre

   |downloads_madre| |docker_madre|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends flye: 
   :depends hairsplitter: 
   :depends kraken2: 
   :depends metamdbg: 
   :depends minimap2: ``>=2.28``
   :depends myloasm: 
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends seqkit: 
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

      mamba install madre

   and update with::

      mamba update madre

  To create a new environment, run::

      mamba create --name myenvname madre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/madre:<tag>

   (see `madre/tags`_ for valid values for ``<tag>``)


.. |downloads_madre| image:: https://img.shields.io/conda/dn/bioconda/madre.svg?style=flat
   :target: https://anaconda.org/bioconda/madre
   :alt:   (downloads)
.. |docker_madre| image:: https://quay.io/repository/biocontainers/madre/status
   :target: https://quay.io/repository/biocontainers/madre
.. _`madre/tags`: https://quay.io/repository/biocontainers/madre?tab=tags


.. raw:: html

    <script>
        var package = "madre";
        var versions = ["0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/madre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/madre/README.html
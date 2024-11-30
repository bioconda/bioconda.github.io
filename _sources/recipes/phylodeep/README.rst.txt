:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylodeep'
.. highlight: bash

phylodeep
=========

.. conda:recipe:: phylodeep
   :replaces_section_title:
   :noindex:

   Deep\-learning parameter estimation and model selection from phylogenetic trees.

   :homepage: https://github.com/evolbioinfo/phylodeep
   :documentation: https://github.com/evolbioinfo/phylodeep/blob/0.9/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phylodeep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep/meta.yaml>`_

   PhyloDeep is a python library for parameter estimation and model selection from phylogenetic trees\, 
   based on deep learning.



.. conda:package:: phylodeep

   |downloads_phylodeep| |docker_phylodeep|

   :versions:
      
      

      ``0.9-0``,  ``0.7-0``,  ``0.6-0``

      

   
   :depends ete3: ``>=3.1.1,<=3.1.3``
   :depends keras: ``2.2.4``
   :depends matplotlib-base: ``>=3.0.2,<3.7.0``
   :depends pandas: ``>=1.0.0,<1.4.0``
   :depends phylodeep_data_bd: ``>=0.6``
   :depends phylodeep_data_bdei: ``>=0.4``
   :depends phylodeep_data_bdss: ``>=0.4``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=1.0,<1.3.0``
   :depends tensorflow: ``>=2.0.0``
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

      mamba install phylodeep

   and update with::

      mamba update phylodeep

  To create a new environment, run::

      mamba create --name myenvname phylodeep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylodeep:<tag>

   (see `phylodeep/tags`_ for valid values for ``<tag>``)


.. |downloads_phylodeep| image:: https://img.shields.io/conda/dn/bioconda/phylodeep.svg?style=flat
   :target: https://anaconda.org/bioconda/phylodeep
   :alt:   (downloads)
.. |docker_phylodeep| image:: https://quay.io/repository/biocontainers/phylodeep/status
   :target: https://quay.io/repository/biocontainers/phylodeep
.. _`phylodeep/tags`: https://quay.io/repository/biocontainers/phylodeep?tab=tags


.. raw:: html

    <script>
        var package = "phylodeep";
        var versions = ["0.9","0.7","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylodeep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylodeep/README.html
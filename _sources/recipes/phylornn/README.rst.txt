:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylornn'
.. highlight: bash

phylornn
========

.. conda:recipe:: phylornn
   :replaces_section_title:
   :noindex:

   PhyloRNN

   :homepage: https://github.com/phyloRNN/phyloRNN
   :license: LGPL / LPGL-2.1-only
   :recipe: /`phylornn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylornn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylornn/meta.yaml>`_

   


.. conda:package:: phylornn

   |downloads_phylornn| |docker_phylornn|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: ``>=1.81,<2``
   :depends dendropy: ``>=4.5.2,<4.6``
   :depends keras: ``>=2.9.0,<2.10``
   :depends matplotlib-base: ``>=3.5.2,<3.6``
   :depends numpy: ``>=1.23.1,<1.24``
   :depends pandas: ``>=1.4.3,<1.5``
   :depends phyml: ``>=3.3.0,<3.4``
   :depends python: ``>=3.8``
   :depends scipy: ``>=1.8.1,<1.9``
   :depends seaborn: ``>=0.11.2,<0.12``
   :depends seq-gen: ``>=1.3.0,<1.4``
   :depends tensorflow: ``>=2.9.1,<3``
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

      mamba install phylornn

   and update with::

      mamba update phylornn

  To create a new environment, run::

      mamba create --name myenvname phylornn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylornn:<tag>

   (see `phylornn/tags`_ for valid values for ``<tag>``)


.. |downloads_phylornn| image:: https://img.shields.io/conda/dn/bioconda/phylornn.svg?style=flat
   :target: https://anaconda.org/bioconda/phylornn
   :alt:   (downloads)
.. |docker_phylornn| image:: https://quay.io/repository/biocontainers/phylornn/status
   :target: https://quay.io/repository/biocontainers/phylornn
.. _`phylornn/tags`: https://quay.io/repository/biocontainers/phylornn?tab=tags


.. raw:: html

    <script>
        var package = "phylornn";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylornn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylornn/README.html
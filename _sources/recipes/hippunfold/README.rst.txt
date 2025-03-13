:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hippunfold'
.. highlight: bash

hippunfold
==========

.. conda:recipe:: hippunfold
   :replaces_section_title:
   :noindex:

   This tool aims to automatically model the topological folding 
   structure of the human hippocampus\, and computationally unfold it. 


   :homepage: https://github.com/khanlab/hippunfold
   :license: MIT
   :recipe: /`hippunfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold/meta.yaml>`_

   This tool aims to automatically model the topological folding structure 
   of the human hippocampus\, and computationally unfold it. 



.. conda:package:: hippunfold

   |downloads_hippunfold| |docker_hippunfold|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends appdirs: ``>=1.4.4,<2.0.0``
   :depends jinja2: ``>=3.0.3,<4.0.0``
   :depends nibabel: ``>=5.3.2,<6.0.0``
   :depends pandas: ``>=2.1.1``
   :depends pygments: ``>=2.10.0,<3.0.0``
   :depends pygraphviz: 
   :depends python: ``>=3.9,<4.0``
   :depends pyvista: ``>=0.44.2,<0.45.0``
   :depends snakebids: ``>=0.14.0``
   :depends snakemake: ``>=8.1.2``
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

      mamba install hippunfold

   and update with::

      mamba update hippunfold

  To create a new environment, run::

      mamba create --name myenvname hippunfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hippunfold:<tag>

   (see `hippunfold/tags`_ for valid values for ``<tag>``)


.. |downloads_hippunfold| image:: https://img.shields.io/conda/dn/bioconda/hippunfold.svg?style=flat
   :target: https://anaconda.org/bioconda/hippunfold
   :alt:   (downloads)
.. |docker_hippunfold| image:: https://quay.io/repository/biocontainers/hippunfold/status
   :target: https://quay.io/repository/biocontainers/hippunfold
.. _`hippunfold/tags`: https://quay.io/repository/biocontainers/hippunfold?tab=tags


.. raw:: html

    <script>
        var package = "hippunfold";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hippunfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hippunfold/README.html
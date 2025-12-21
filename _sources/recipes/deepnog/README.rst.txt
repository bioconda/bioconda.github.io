:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepnog'
.. highlight: bash

deepnog
=======

.. conda:recipe:: deepnog
   :replaces_section_title:
   :noindex:

   Deep learning tool for protein orthologous group assignment

   :homepage: https://github.com/univieCUBE/deepnog
   :documentation: https://deepnog.readthedocs.io
   
   :license: BSD / BSD 3-Clause
   :recipe: /`deepnog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepnog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepnog/meta.yaml>`_

   


.. conda:package:: deepnog

   |downloads_deepnog| |docker_deepnog|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.1-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pytorch: 
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends tensorboard: 
   :depends tqdm: 
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

      mamba install deepnog

   and update with::

      mamba update deepnog

  To create a new environment, run::

      mamba create --name myenvname deepnog

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepnog:<tag>

   (see `deepnog/tags`_ for valid values for ``<tag>``)


.. |downloads_deepnog| image:: https://img.shields.io/conda/dn/bioconda/deepnog.svg?style=flat
   :target: https://anaconda.org/bioconda/deepnog
   :alt:   (downloads)
.. |docker_deepnog| image:: https://quay.io/repository/biocontainers/deepnog/status
   :target: https://quay.io/repository/biocontainers/deepnog
.. _`deepnog/tags`: https://quay.io/repository/biocontainers/deepnog?tab=tags


.. raw:: html

    <script>
        var package = "deepnog";
        var versions = ["1.2.4","1.2.3","1.2.3","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepnog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepnog/README.html
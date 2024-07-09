:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parm'
.. highlight: bash

parm
====

.. conda:recipe:: parm
   :replaces_section_title:
   :noindex:

   promoter activity regulatory model

   :homepage: https://github.com/vansteensellab/PARM
   :license: https://github.com/vansteensellab/PARM/blob/main/LICENSE
   :recipe: /`parm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parm/meta.yaml>`_

   


.. conda:package:: parm

   |downloads_parm| |docker_parm|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends biopython: 
   :depends einops: 
   :depends h5py: 
   :depends logomaker: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends optuna: 
   :depends pandas: 
   :depends python: ``>=3.10.8``
   :depends pytorch: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends tqdm: 
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

      mamba install parm

   and update with::

      mamba update parm

  To create a new environment, run::

      mamba create --name myenvname parm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parm:<tag>

   (see `parm/tags`_ for valid values for ``<tag>``)


.. |downloads_parm| image:: https://img.shields.io/conda/dn/bioconda/parm.svg?style=flat
   :target: https://anaconda.org/bioconda/parm
   :alt:   (downloads)
.. |docker_parm| image:: https://quay.io/repository/biocontainers/parm/status
   :target: https://quay.io/repository/biocontainers/parm
.. _`parm/tags`: https://quay.io/repository/biocontainers/parm?tab=tags


.. raw:: html

    <script>
        var package = "parm";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parm/README.html
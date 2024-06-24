:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltapd'
.. highlight: bash

deltapd
=======

.. conda:recipe:: deltapd
   :replaces_section_title:
   :noindex:

   DeltaPD is a tool used to determine outliers in a gene tree when compared against a reference tree.

   :homepage: https://github.com/Ecogenomics/DeltaPD
   :license: AGPL / AGPL-3.0-only
   :recipe: /`deltapd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltapd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltapd/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4107213`

   


.. conda:package:: deltapd

   |downloads_deltapd| |docker_deltapd|

   :versions:
      
      

      ``0.1.5-5``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends dendropy: 
   :depends ete3: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends phylodm: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install deltapd

   and update with::

      mamba update deltapd

  To create a new environment, run::

      mamba create --name myenvname deltapd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deltapd:<tag>

   (see `deltapd/tags`_ for valid values for ``<tag>``)


.. |downloads_deltapd| image:: https://img.shields.io/conda/dn/bioconda/deltapd.svg?style=flat
   :target: https://anaconda.org/bioconda/deltapd
   :alt:   (downloads)
.. |docker_deltapd| image:: https://quay.io/repository/biocontainers/deltapd/status
   :target: https://quay.io/repository/biocontainers/deltapd
.. _`deltapd/tags`: https://quay.io/repository/biocontainers/deltapd?tab=tags


.. raw:: html

    <script>
        var package = "deltapd";
        var versions = ["0.1.5","0.1.5","0.1.5","0.1.5","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltapd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltapd/README.html
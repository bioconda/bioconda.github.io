:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beast-pype'
.. highlight: bash

beast-pype
==========

.. conda:recipe:: beast-pype
   :replaces_section_title:
   :noindex:

   A package of BEAST 2 pipelines for phylodynamics.

   :homepage: https://github.com/m-d-grunnill/BEAST_pype
   :license: GPL-2.0-only
   :recipe: /`beast-pype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast-pype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beast-pype/meta.yaml>`_

   


.. conda:package:: beast-pype

   |downloads_beast-pype| |docker_beast-pype|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.2-0``

      

   
   :depends arviz: ``>=0.23.0``
   :depends bash_kernel: ``>=0.10.0``
   :depends beast2: ``>=2.6.3``
   :depends beast2-xml: ``>=1.5.0``
   :depends biopython: ``>=1.86``
   :depends click: ``>=8.3.1``
   :depends dark-matter: ``>=5.1.2``
   :depends ete3: ``>=3.1.1``
   :depends ipykernel: ``>=4.3.1``
   :depends ipywidgets: ``>=8.1.8``
   :depends iqtree: ``>=3.0.1``
   :depends jupyter: ``>=1.1.1``
   :depends matplotlib-base: ``>=3.10.8``
   :depends nbconvert: ``>=7.16.6``
   :depends nbformat: ``>=5.10.4``
   :depends numpy: ``>=2.4.0``
   :depends pandas: ``>=2.3.3``
   :depends papermill: ``>=2.6.0``
   :depends parallel: ``>=2051122``
   :depends python: ``>=3.10``
   :depends python-dateutil: ``>=2.9.0``
   :depends pyyaml: ``>=6.0.3``
   :depends scipy: ``>=1.16.3``
   :depends seaborn: ``>=0.13.2``
   :depends seqkit: ``>=2.12.0``
   :depends treetime: ``>=0.11.4``
   :depends xarray: ``>=2025.12.0``
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

      mamba install beast-pype

   and update with::

      mamba update beast-pype

  To create a new environment, run::

      mamba create --name myenvname beast-pype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beast-pype:<tag>

   (see `beast-pype/tags`_ for valid values for ``<tag>``)


.. |downloads_beast-pype| image:: https://img.shields.io/conda/dn/bioconda/beast-pype.svg?style=flat
   :target: https://anaconda.org/bioconda/beast-pype
   :alt:   (downloads)
.. |docker_beast-pype| image:: https://quay.io/repository/biocontainers/beast-pype/status
   :target: https://quay.io/repository/biocontainers/beast-pype
.. _`beast-pype/tags`: https://quay.io/repository/biocontainers/beast-pype?tab=tags


.. raw:: html

    <script>
        var package = "beast-pype";
        var versions = ["0.1.4","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beast-pype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beast-pype/README.html
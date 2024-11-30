:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pling'
.. highlight: bash

pling
=====

.. conda:recipe:: pling
   :replaces_section_title:
   :noindex:

   Pling computes the rearrangement distance between plasmids and clusters on their basis 

   :homepage: https://github.com/iqbal-lab-org/pling
   :license: MIT / LICENSE
   :recipe: /`pling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pling/meta.yaml>`_

   


.. conda:package:: pling

   |downloads_pling| |docker_pling|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends dingii: 
   :depends glpk: ``>=5.0``
   :depends intervaltree: ``>=3.0.2``
   :depends mummer: ``>=3.23``
   :depends numpy: ``>=1.26.0``
   :depends pandas: ``>=1.5.3``
   :depends plasnet: ``>=0.6.0``
   :depends python: ``>=3.9,<3.12``
   :depends snakemake: ``>=7.25.4,<8.0.0``
   :depends sourmash: ``>=4.4.0,<5.0.0``
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

      mamba install pling

   and update with::

      mamba update pling

  To create a new environment, run::

      mamba create --name myenvname pling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pling:<tag>

   (see `pling/tags`_ for valid values for ``<tag>``)


.. |downloads_pling| image:: https://img.shields.io/conda/dn/bioconda/pling.svg?style=flat
   :target: https://anaconda.org/bioconda/pling
   :alt:   (downloads)
.. |docker_pling| image:: https://quay.io/repository/biocontainers/pling/status
   :target: https://quay.io/repository/biocontainers/pling
.. _`pling/tags`: https://quay.io/repository/biocontainers/pling?tab=tags


.. raw:: html

    <script>
        var package = "pling";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pling/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvis_galaxy'
.. highlight: bash

scvis_galaxy
============

.. conda:recipe:: scvis_galaxy
   :replaces_section_title:
   :noindex:

   scvis is a python package for dimension reduction of high\-dimensional biological data\, especially single\-cell RNA\-sequencing \(scRNA\-seq\) data.

   :homepage: https://github.com/shahcompbio/scvis
   :license: Creative Commons Attribution 4.0 International License
   :recipe: /`scvis_galaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis_galaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis_galaxy/meta.yaml>`_

   


.. conda:package:: scvis_galaxy

   |downloads_scvis_galaxy| |docker_scvis_galaxy|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends matplotlib: ``>=1.5.1``
   :depends nomkl: 
   :depends numpy: ``>=1.11.1``
   :depends pandas: ``>=0.19.1``
   :depends pip: 
   :depends python: 
   :depends pyyaml: ``>=3.11``
   :depends setuptools: 
   :depends tensorflow: ``>=1.13``
   :depends wheel: 
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

      mamba install scvis_galaxy

   and update with::

      mamba update scvis_galaxy

  To create a new environment, run::

      mamba create --name myenvname scvis_galaxy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scvis_galaxy:<tag>

   (see `scvis_galaxy/tags`_ for valid values for ``<tag>``)


.. |downloads_scvis_galaxy| image:: https://img.shields.io/conda/dn/bioconda/scvis_galaxy.svg?style=flat
   :target: https://anaconda.org/bioconda/scvis_galaxy
   :alt:   (downloads)
.. |docker_scvis_galaxy| image:: https://quay.io/repository/biocontainers/scvis_galaxy/status
   :target: https://quay.io/repository/biocontainers/scvis_galaxy
.. _`scvis_galaxy/tags`: https://quay.io/repository/biocontainers/scvis_galaxy?tab=tags


.. raw:: html

    <script>
        var package = "scvis_galaxy";
        var versions = ["0.1.1"];
    </script>





Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvis_galaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvis_galaxy/README.html
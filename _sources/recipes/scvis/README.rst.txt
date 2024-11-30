:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvis'
.. highlight: bash

scvis
=====

.. conda:recipe:: scvis
   :replaces_section_title:
   :noindex:

   scvis is a python package for dimension reduction of high\-dimensional biological data\, especially single\-cell RNA\-sequencing \(scRNA\-seq\) data.

   :homepage: https://bitbucket.org/jerry00/scvis-dev/commits/all
   :license: Creative Commons Attribution 4.0 International License
   :recipe: /`scvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis/meta.yaml>`_

   


.. conda:package:: scvis

   |downloads_scvis| |docker_scvis|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends matplotlib: ``>=1.5.1``
   :depends nomkl: 
   :depends numpy: ``>=1.11.1``
   :depends pandas: ``>=0.19.1``
   :depends pip: 
   :depends python: 
   :depends pyyaml: ``>=3.11``
   :depends setuptools: 
   :depends tensorflow: ``>=1.12``
   :depends wheel: 
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

      mamba install scvis

   and update with::

      mamba update scvis

  To create a new environment, run::

      mamba create --name myenvname scvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scvis:<tag>

   (see `scvis/tags`_ for valid values for ``<tag>``)


.. |downloads_scvis| image:: https://img.shields.io/conda/dn/bioconda/scvis.svg?style=flat
   :target: https://anaconda.org/bioconda/scvis
   :alt:   (downloads)
.. |docker_scvis| image:: https://quay.io/repository/biocontainers/scvis/status
   :target: https://quay.io/repository/biocontainers/scvis
.. _`scvis/tags`: https://quay.io/repository/biocontainers/scvis?tab=tags


.. raw:: html

    <script>
        var package = "scvis";
        var versions = ["0.1.0"];
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

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvis/README.html
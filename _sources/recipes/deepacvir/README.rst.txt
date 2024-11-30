:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepacvir'
.. highlight: bash

deepacvir
=========

.. conda:recipe:: deepacvir
   :replaces_section_title:
   :noindex:

   Detecting novel human viruses from DNA reads with reverse\-complement neural networks.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :developer docs: https://gitlab.com/JakubBartoszewicz/deepac-vir
   :license: MIT / MIT
   :recipe: /`deepacvir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacvir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepacvir/meta.yaml>`_

   


.. conda:package:: deepacvir

   |downloads_deepacvir| |docker_deepacvir|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends deepac: ``>=0.11.0``
   :depends numpy: ``>=1.17``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.22.1``
   :depends tensorflow: ``>=2.1``
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

      mamba install deepacvir

   and update with::

      mamba update deepacvir

  To create a new environment, run::

      mamba create --name myenvname deepacvir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepacvir:<tag>

   (see `deepacvir/tags`_ for valid values for ``<tag>``)


.. |downloads_deepacvir| image:: https://img.shields.io/conda/dn/bioconda/deepacvir.svg?style=flat
   :target: https://anaconda.org/bioconda/deepacvir
   :alt:   (downloads)
.. |docker_deepacvir| image:: https://quay.io/repository/biocontainers/deepacvir/status
   :target: https://quay.io/repository/biocontainers/deepacvir
.. _`deepacvir/tags`: https://quay.io/repository/biocontainers/deepacvir?tab=tags


.. raw:: html

    <script>
        var package = "deepacvir";
        var versions = ["0.2.2","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepacvir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepacvir/README.html